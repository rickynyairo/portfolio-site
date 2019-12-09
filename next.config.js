const path = require('path')
const glob = require('glob')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const withPlugins = require('next-compose-plugins');

const sassPlugin = {
  webpack: (config, _) => {
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader']
      },
      {
        test: /\.s(a|c)ss$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader',
          { loader: 'sass-loader',
            options: {
              outputStyle: 'compressed', // These options are from node-sass: https://github.com/sass/node-sass
              includePaths: ['styles', 'node_modules']
                .map((d) => path.join(__dirname, d))
                .map((g) => glob.sync(g))
                .reduce((a, c) => a.concat(c), [])
            }
          }
        ]
      }
    )
    return config
  }
}

const uglify = {
  webpack: (config, _) => {
    config.optimization.minimizer.push(new UglifyJsPlugin({}));
    return config
  }
}

module.exports = withPlugins([sassPlugin], uglify);