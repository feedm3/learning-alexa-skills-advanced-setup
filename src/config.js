const INFRASTRUCTURE = {
    sessionTable: 'hello-world-advanced-session',
    fileStorage: 'hello-world-store'
};

const SESSION_ATTRIBUTES = {
    NAME: 'name'
};


const IMAGE_URLS = {
    WELCOME: {
        smallImageUrl: `https://s3-eu-west-1.amazonaws.com/${ INFRASTRUCTURE.fileStorage }/mountains.jpg`,
        largeImageUrl: `https://s3-eu-west-1.amazonaws.com/${ INFRASTRUCTURE.fileStorage }/mountains.jpg`
    }
};

const CONFIG = {
    INFRASTRUCTURE,
    SESSION_ATTRIBUTES,
    IMAGE_URLS
};

module.exports = () => CONFIG;
