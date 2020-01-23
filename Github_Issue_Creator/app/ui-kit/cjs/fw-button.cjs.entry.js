'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-6fd1ea16.js');

const Button = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        /**
         *  The native button type:
         *  values: `button`, `reset`, `submit`
         */
        this.type = 'button';
        /**
         * The theme of the button,
         * Values are : `primary`, `secondary`, `danger`
         */
        this.color = 'primary';
        /**
         * Sets the button as disabled when set to true.
         */
        this.disabled = false;
        /**
         * Sets the button size to block when set to true.
         */
        this.expand = false;
        /**
         * The size of the button,
         * Values are : `normal`, `mini`
         */
        this.size = 'normal';
        this.fwClick = core.createEvent(this, "fwClick", 7);
        this.fwFocus = core.createEvent(this, "fwFocus", 7);
        this.fwBlur = core.createEvent(this, "fwBlur", 7);
    }
    onFocus() {
        this.fwFocus.emit();
    }
    onBlur() {
        this.fwBlur.emit();
    }
    handleClick() {
        this.fwClick.emit();
    }
    render() {
        return (core.h(core.Host, { onClick: () => this.handleClick(), onFocus: () => this.onFocus(), onBlur: () => this.onBlur() }, core.h("button", { type: this.type, class: `
            fw-btn fw-btn--${this.color.toLowerCase()}
            fw-btn--${this.size.toLowerCase()}
            ${this.expand ? 'fw-btn--block' : ''}
            `, disabled: this.disabled }, core.h("slot", null))));
    }
    static get style() { return ":host{--color-milk:#fff;--color-elephant-900:#12344d;--color-elephant-800:#264966;--color-elephant-700:#345c7c;--color-elephant-600:#447093;--color-smoke-700:#475867;--color-smoke-300:#92a2b1;--color-smoke-100:#cfd7df;--color-smoke-50:#ebeff3;--color-smoke-25:#f3f5f7;--color-jungle-800:#00795b;--color-jungle-500:#00a886;--color-jungle-100:#b4e5da;--color-jungle-50:#e0f5f1;--color-azure-800:#2c5cc5;--color-azure-100:#bbdcfe;--color-azure-50:#e5f2fd;--color-persimmon-900:#c82124;--color-persimmon-800:#d72d30;--color-persimmon-100:#ffd0d6;--color-persimmon-50:#ffecf0;--color-casablanca-700:#e86f25;--color-casablanca-100:#fedcb3;--color-casablanca-50:#fef1e1;--border-color:var(--color-smoke-100);--border-success-color:var(--color-jungle-100);--border-info-color:var(--color-azure-100);--border-danger-color:var(--color-persimmon-100);--border-warning-color:var(--color-casablanca-100);--bg-dark:var(--color-elephant-900);--bg-success:var(--color-jungle-50);--bg-info:var(--color-azure-50);--bg-danger:var(--color-persimmon-50);--bg-warning:var(--color-casablanca-50);--radius:4px;--radius-small:2px;--font-stack:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif;--font-weight-400:400;--font-weight-300:300;--font-weight-500:500;--font-weight-600:600;--font-weight-700:700;--font-size-10:10px;--font-size-12:12px;--font-size-14:14px;--font-size-16:16px;--font-size-18:18px;--font-size-20:20px;--font-size-24:24px;--text-default:var(--color-elephant-900);--text-secondary:var(--color-smoke-700);--text-disabled:var(--color-smoke-300);--text-success:var(--color-jungle-800);--text-info:var(--color-azure-800);--text-danger:var(--color-persimmon-800);--text-warning:var(--color-casablanca-700);--text-link:var(--color-azure-800);--icon-primary:var(--color-smoke-700);--icon-primary-hover:var(--color-smoke-100);font-family:var(--font-stack);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box;--btn-primary-color:var(--color-milk);--btn-primary-bg:var(--color-elephant-800);--btn-primary-bg-dark:var(--color-elephant-900);--btn-primary-border:var(--color-elephant-900);--btn-primary-border-active:var(--color-elephant-800);--btn-secondary-color:var(--text-default);--btn-secondary-bg:var(--color-milk);--btn-secondary-bg-dark:var(--color-smoke-25);--btn-secondary-border:var(--border-color);--btn-secondary-border-active:var(--color-smoke-50);--btn-danger-color:var(--color-milk);--btn-danger-bg:var(--color-persimmon-800);--btn-danger-bg-dark:var(--color-persimmon-900);--btn-danger-border:var(--color-persimmon-900);--btn-link-color:var(--color-azure-800);--btn-link-bg:var(--color-smoke-50);--active-box-shadow:inset 0 0 4px 0 rgba(0,0,0,0.25)}.fw-btn{font-size:var(--font-size-14);line-height:var(--font-size-14);padding:6px 12px;border:1px solid transparent;border-radius:4px;outline:0;color:var(--btn-primary-bg);cursor:pointer;-webkit-transition:all .2s linear;transition:all .2s linear;letter-spacing:.3px;font-weight:var(--font-weight-500);min-width:90px;height:32px}.fw-btn:focus{border:1px solid var(--color-azure-800);-webkit-box-shadow:0 0 0 1px var(--color-azure-800);box-shadow:0 0 0 1px var(--color-azure-800);outline:none}.fw-btn:active{-webkit-box-shadow:var(--active-box-shadow);box-shadow:var(--active-box-shadow)}.fw-btn.disabled,.fw-btn[disabled]{cursor:not-allowed;opacity:.4}.fw-btn--primary{background-color:var(--btn-primary-bg);color:var(--btn-primary-color);border:1px solid var(--btn-primary-border);background-image:-webkit-gradient(linear,left top,left bottom,from(var(--btn-primary-bg)),to(var(--btn-primary-bg-dark)));background-image:linear-gradient(180deg,var(--btn-primary-bg),var(--btn-primary-bg-dark))}.fw-btn--primary:active{border:1px solid var(--btn-primary-border-active)}.fw-btn--primary:hover:not([disabled]){background-color:var(--btn-primary-bg-dark);background-image:none}.fw-btn--secondary{background-color:var(--btn-secondary-bg-dark);color:var(--btn-secondary-color);border:1px solid var(--btn-secondary-border);background-image:-webkit-gradient(linear,left top,left bottom,from(var(--btn-secondary-bg)),to(var(--btn-secondary-bg-dark)));background-image:linear-gradient(180deg,var(--btn-secondary-bg),var(--btn-secondary-bg-dark))}.fw-btn--secondary:active{border:1px solid var(--btn-secondary-border-active)}.fw-btn--secondary:hover:not([disabled]){background-color:var(--btn-secondary-bg-dark);background-image:none}.fw-btn--danger{color:var(--btn-danger-color);background-color:var(--btn-danger-bg);border:1px solid var(--btn-danger-border);background-image:-webkit-gradient(linear,left top,left bottom,from(var(--btn-danger-bg)),to(var(--btn-danger-bg-dark)));background-image:linear-gradient(180deg,var(--btn-danger-bg),var(--btn-danger-bg-dark))}.fw-btn--danger:hover:not([disabled]){background-color:var(--btn-danger-bg-dark);background-image:none}.fw-btn--link{background-color:transparent;background-image:none;border:1px solid transparent;color:var(--btn-link-color)}.fw-btn--link:hover:not([disabled]){background-color:var(--btn-link-bg);border-color:var(--btn-link-bg)}.fw-btn--text{background-color:transparent;background-image:none;border:1px solid transparent;color:var(--btn-primary-bg)}.fw-btn--text:hover:not([disabled]){background-color:var(--btn-link-bg);border-color:var(--btn-link-bg)}.fw-btn--block{width:100%;display:block}.fw-btn--mini{padding:2px 2px;font-size:var(--font-size-10);line-height:var(--font-size-10);min-width:16px;height:16px}.fw-btn--small{padding:4px 6px;font-size:var(--font-size-12);line-height:var(--font-size-12);min-width:16px;height:24px}.fw-btn--icon{min-width:32px;width:32px;padding:0}"; }
};

exports.fw_button = Button;
