const path = require('path');

module.exports = {
    entry: './components/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
};
