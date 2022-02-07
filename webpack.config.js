// 절대 경로
const path = require('path');
// 웹팩 플러그인 불러오기
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // bundle 파일 생성을 위한 시작 파일 지정
    entry: {
        'js/app': ['./src/index.tsx'],
    },
    // bnudle 파일을 /dist/ 폴더에 생성
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    // 서버 사이드
    devServer: {
        compress: true,
        port: 8080,
        historyApiFallback: true, // Route 로 지정된 URL 활성화
    },
    resolve: {
        // 해당 확장자 파일일 import 등 할대 확장자 안붙여도 됨
        extensions: ['.tsx', '.ts', '.js', 'jsx']
    },
    module: {
        // 바벨 규칙 test: 확장자[정규식]를 use 모듈로 빌드
        rules: [
            {
                // 해당 확장자를 babel로 빌드
                test: /\.(js|jsx|tsx|ts)$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                use: ['file-loader?name=[name].[ext]'],
                exclude: /node_modules/
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
        }),
    ],
};