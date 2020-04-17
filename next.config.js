const path = require('path');

module.exports = {
    webpack(config) {
        const c = config;
        c.resolve.alias.components = path.join(__dirname, 'components');
        return c;
    },
};

