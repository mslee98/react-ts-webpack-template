import { createRoot } from "react-dom/client";
import App from "./App";
import { reportWebVitals } from '@/reportWebVitals';

if(process.env.NODE_ENV == 'development') {
    
    reportWebVitals(console.log);
    // reportWebVitals((metric:any) => {
    //     navigator.sendBeacon(
    //         'https://webhook.site/318f78dc-2c0c-472a-8e30-4f1434cc8dd4',
    //         new Blob([JSON.stringify(metric)], {
    //         type: 'application/json',
    //         })
    //     );
    // });
}


createRoot(document.getElementById("root")!).render(<App />);

