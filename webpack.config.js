const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/main.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                // Babel Loader
                test: /\.(ts|tsx)$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        "@babel/preset-env",  // 최신 JS문법을 변환
                        // "@babel/preset-react",
                        ["@babel/preset-react", { runtime: 'automatic' }],
                        "@babel/preset-typescript" // 타입스크립트를 변환
                    ]
                },
                exclude: /node_modules/ // 외부 모듈을 제외
            },
            {
                // CSS Loader & style-loader
                test: /\.css$/, // test -> 어떤 파일에 로더를 적용할 지 (.css 확장자에만 적용)
                use: [
                    // 여러 모듈을 사용할 땐 순서가 매우 중요하다.
                    // 1. css-loader가 먼저 실행돼 CSS파일을 JS로 변환
                    // 2. 변환된 결과를 style-loader가 실행해서 DOM <style> 태그에 삽입

                    // **우측에서 왼쪽 순으로 실행된다.**
                    'style-loader', // CSS를 <style> 태그로 주입
                    'css-loader', // CSS를 JS 모듈로 변환
                ]
            },
            {
                // Asset 이미지 | 아이콘 | 폰트 등
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset" // Asset Modules 사용
                // Asset Modules의 type은
                // asset/resource - 파일을 별도 파일로 내보내고 URL 반환
                // asset/inline - 파일을 base64로 인코딩된 data URL로 변환
                // asset/source 파일의 내용을 문자열로 변환
                // asset - 파일 크기에 따라 자동으로 asset/resource와 asset/inline 중 하나를 선택함
            },
            {
                // font와 같이 이미지보다 용량이 크고 정적인 파일은 파일로 내보낸다.
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource" ,
                generator: {
                    filename: "public/assets/Inter-Medium.woff2"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html", // 템플릿 HTML
            filename: "index.html", // 출력될 HTML 파일 이름
            inject: true // <script> 태그 자동 삽입
        })
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'], // 파일을 import할 때 확장자를 생략
        alias: {
            '@': path.resolve(__dirname, './src'),
        }
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "dist") // 빌드된 파일을 이 경로에서 서빙
        },
        port: 3000,
        open: true, // 서버 실행 시 브라우저 자동 열기
        hot: true, // HMR 사용
        historyApiFallback: true, // SPA 라우팅 지원
        client: {
            overlay: true // 에러 발생 시 브라우저에 띄움
        }
    }
}