// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const WebpackPwaManifest = require('webpack-pwa-manifest');
// const path = require('path');
// const { InjectManifest } = require('workbox-webpack-plugin');

// module.exports = () => {
//   return {
//     mode: 'development',
//     entry: {
//       main: './src/js/index.js',
//       install: './src/js/install.js'
//     },
//     output: {
//       filename: '[name].bundle.js',
//       path: path.resolve(__dirname, 'dist'),
//     },
//     plugins: [
//       new HtmlWebpackPlugin({
//         template: './index.html',
//         title: 'J.A.T.E'
//       }),
//       new InjectManifest({
//         swSrc: './src-sw.js',
//         swDest: 'src-sw.js'
//       }),
//       new WebpackPwaManifest({
//         name: 'Just Another Text Editor',
//         short_name: 'JATE',
//         description: 'A simple text editor!',
//         background_color: '#7eb4e2',
//         theme_color: '#7eb4e2',
//         start_url: '/',
//         publicPath: '/',
//         icons: [
//           {
//             src: path.resolve('src/images/logo.png'),
//             sizes: [96, 128, 192, 256, 384, 512],
//             destination: path.join('assets', 'icons'),
//           },
//         ],
//       }),
//     ],

//     module: {
//       rules: [
//         {
//           test: /\.css$/i,
//           use: ['style-loader', 'css-loader'],
//         },
//         {
//           test: /\.m?js$/,
//           exclude: /(node_modules|bower_components)/,
//           use: {
//             loader: 'babel-loader',
//             options: {
//               presets: ['@babel/preset-env'],
//               plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],
//             },
//           },
//         },
//       ],
//     },
//   };
// };
// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   entry: './src/js/index.js',
//   output: {
//     filename: 'main.bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './src/index.html', // source index.html
//       filename: 'index.html', // output index.html
//     }),
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader'],
//       },
//       {
//         test: /\.(png|svg|jpg|jpeg|gif)$/i,
//         type: 'asset/resource',
//       },
//     ],
//   },
// };
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'), // Update this path
      filename: 'index.html',
    }),
  ],
  mode: 'development',
};
