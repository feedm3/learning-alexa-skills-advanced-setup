const INFRASTRUCTURE = {
    sessionTable: 'hello-world-advanced-session',
    fileStorage: 'hello-world-store'
};

const SESSION_ATTRIBUTES = {
    NAME: 'name'
};

const CONFIG = {
    INFRASTRUCTURE,
    SESSION_ATTRIBUTES
};

module.exports = () => CONFIG;
