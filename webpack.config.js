module.exports = {
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: './src/main.js',
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: __dirname + '/dist',
    // 出力ファイル名
    filename: 'bundle.js'
  },
  module: {
    rules: [

      {
        // 対象となるファイルの拡張子
        test: /\.scss/,
        // Sassファイルの読み込みとコンパイル
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        // 対象となるファイルの拡張子
        test: /\.(gif|png|jpg|eot|wof|woff|ttf|svg)$/,
        // 画像をBase64として取り込む
        loader: 'url-loader'
      }
    ]
  }
};
  