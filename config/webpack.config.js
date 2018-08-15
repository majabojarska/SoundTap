const path = require("path")

module.exports = {
    entry: {
        main: "./src/main.js"
    },
    mode: "development",
    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/"
    },
    devServer: {
        contentBase: "dist",
        overlay: true,
        stats: {
            colors: true
        },
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [{
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [{
                        loader: "file-loader",
                        options: {
                            name: "[name].html"
                        }
                    },
                    {
                        loader: "extract-loader"
                    },
                    {
                        loader: "html-loader",
                    }
                ]
            }, {
                test: /\.(png|jpe?g|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'img/[name].[ext]',
                    }
                }]
            },
            // {
            //     test: /\.(png|jpe?g|svg)$/,
            //     use: [{
            //         loader: 'url-loader',
            //         options: {
            //             limit: 8000, // Convert images < 8kb to base64 strings
            //             name: 'img/[name].[ext]',
            //         }
            //     }]
            // }
        ]
    }
}