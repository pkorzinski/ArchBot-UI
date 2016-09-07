module.exports = {
    entry: __dirname + "/public/scripts/Index.jsx",
    output: {
        path: __dirname + "/public/build",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.jsx?$/,
              loader: "babel",
              exclude: /node_modules/ }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};