export const reportWebVitals = onPerfEntry => {

  // 개발환경일때만 Web Vitals 측정한다.
  if(process.env.NODE_ENV !== 'development') return

  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};
