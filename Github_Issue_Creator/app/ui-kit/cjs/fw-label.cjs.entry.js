'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-6fd1ea16.js');

const Label = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        /**
         * The type of the label
         */
        this.color = 'normal';
        /**
         * The text in the label
         */
        this.value = '';
    }
    render() {
        return core.h("span", { class: 'label label--' + this.color.toLowerCase() }, this.value);
    }
    static get style() { return ":host{--color-milk:#fff;--color-elephant-900:#12344d;--color-elephant-800:#264966;--color-elephant-700:#345c7c;--color-elephant-600:#447093;--color-smoke-700:#475867;--color-smoke-300:#92a2b1;--color-smoke-100:#cfd7df;--color-smoke-50:#ebeff3;--color-smoke-25:#f3f5f7;--color-jungle-800:#00795b;--color-jungle-500:#00a886;--color-jungle-100:#b4e5da;--color-jungle-50:#e0f5f1;--color-azure-800:#2c5cc5;--color-azure-100:#bbdcfe;--color-azure-50:#e5f2fd;--color-persimmon-900:#c82124;--color-persimmon-800:#d72d30;--color-persimmon-100:#ffd0d6;--color-persimmon-50:#ffecf0;--color-casablanca-700:#e86f25;--color-casablanca-100:#fedcb3;--color-casablanca-50:#fef1e1;--border-color:var(--color-smoke-100);--border-success-color:var(--color-jungle-100);--border-info-color:var(--color-azure-100);--border-danger-color:var(--color-persimmon-100);--border-warning-color:var(--color-casablanca-100);--bg-dark:var(--color-elephant-900);--bg-success:var(--color-jungle-50);--bg-info:var(--color-azure-50);--bg-danger:var(--color-persimmon-50);--bg-warning:var(--color-casablanca-50);--radius:4px;--radius-small:2px;--font-stack:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif;--font-weight-400:400;--font-weight-300:300;--font-weight-500:500;--font-weight-600:600;--font-weight-700:700;--font-size-10:10px;--font-size-12:12px;--font-size-14:14px;--font-size-16:16px;--font-size-18:18px;--font-size-20:20px;--font-size-24:24px;--text-default:var(--color-elephant-900);--text-secondary:var(--color-smoke-700);--text-disabled:var(--color-smoke-300);--text-success:var(--color-jungle-800);--text-info:var(--color-azure-800);--text-danger:var(--color-persimmon-800);--text-warning:var(--color-casablanca-700);--text-link:var(--color-azure-800);--icon-primary:var(--color-smoke-700);--icon-primary-hover:var(--color-smoke-100);font-family:var(--font-stack);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.label{color:#6f7c87;border:1px solid #dadfe3;background-color:var(--color-milk);font-weight:600;font-size:var(--font-size-12);padding:0 5px;line-height:1.5;display:inline-block;border-radius:2px}.label--blue{background-color:var(--color-azure-50);color:var(--color-azure-800);border:1px solid var(--color-azure-100)}.label--red{background-color:var(--color-persimmon-50);color:var(--color-persimmon-800);border:1px solid var(--color-persimmon-100)}.label--green{background-color:var(--color-jungle-50);color:var(--color-jungle-800);border:1px solid var(--color-jungle-100)}.label--yellow{background-color:var(--color-casablanca-50);color:var(--color-casablanca-700);border:1px solid var(--color-casablanca-100)}.label--grey{background-color:var(--color-smoke-50);color:var(--color-smoke-700);border:1px solid var(--color-smoke-100)}"; }
};

exports.fw_label = Label;
