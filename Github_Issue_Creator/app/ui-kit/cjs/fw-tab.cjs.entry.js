'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-6fd1ea16.js');

const Tab = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    static get style() { return ":host{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}"; }
};

exports.fw_tab = Tab;
