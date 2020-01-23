'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-6fd1ea16.js');

const Textarea = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.hasFocus = false;
        /**
         * The type of control to display. The default type is text.
         */
        this.label = '';
        /**
         * The value of the input.
         */
        this.value = '';
        /**
         * The name of the control, which is submitted with the form data.
         */
        this.name = '';
        /**
         * The state of the control. Color changes accordingly
         */
        this.state = 'normal';
        /**
         * How the text in the textarea is to be wrapped
         */
        this.wrap = 'soft';
        /**
         * This text will be displayed below the input box indicating the state/hint
         */
        this.stateText = '';
        /**
         * If `true`, the user cannot modify the value.
         */
        this.readonly = false;
        /**
         * If `true`, the user must fill in a value before submitting a form.
         */
        this.required = false;
        /**
         * Indicates that this control is disabled
         */
        this.disabled = false;
        this.onInput = (ev) => {
            const input = ev.target;
            if (input) {
                this.value = input.value || '';
            }
            this.fwInput.emit(ev);
        };
        this.onFocus = () => {
            this.hasFocus = true;
            this.fwFocus.emit();
        };
        this.onBlur = () => {
            this.hasFocus = false;
            this.fwBlur.emit();
        };
        this.fwChange = core.createEvent(this, "fwChange", 7);
        this.fwFocus = core.createEvent(this, "fwFocus", 7);
        this.fwBlur = core.createEvent(this, "fwBlur", 7);
        this.fwInput = core.createEvent(this, "fwInput", 7);
    }
    watchHandler(newValue) {
        this.fwChange.emit({ value: newValue });
    }
    getValue() {
        return this.value || '';
    }
    hasValue() {
        return this.getValue().length > 0;
    }
    /**
     * Sets focus on the specified `fw-input`. Use this method instead of the global
     * `input.focus()`.
     */
    async setFocus() {
        if (this.nativeInput) {
            this.nativeInput.focus();
        }
    }
    render() {
        const value = '';
        return (core.h(core.Host, { "aria-disabled": this.disabled, class: {
                'has-value': this.hasValue(),
                'has-focus': this.hasFocus,
            } }, core.h("div", { class: "textarea-container" }, this.label !== '' ? core.h("label", { class: {
                'required': this.required,
            } }, this.label) : '', core.h("div", { class: {
                'textarea-container-inner': true,
                [this.state]: true,
            } }, core.h("textarea", { ref: input => this.nativeInput = input, disabled: this.disabled, name: this.name, placeholder: this.placeholder || '', minLength: this.minlength, maxLength: this.maxlength, readOnly: this.readonly, required: this.required, value: value, onInput: e => this.onInput(e), onBlur: this.onBlur, onFocus: this.onFocus, rows: this.rows, cols: this.cols, wrap: this.wrap })), this.stateText !== '' ?
            core.h("span", { class: "help-block" }, this.stateText) : '')));
    }
    static get watchers() { return {
        "value": ["watchHandler"]
    }; }
    static get style() { return ":host{--color-milk:#fff;--color-elephant-900:#12344d;--color-elephant-800:#264966;--color-elephant-700:#345c7c;--color-elephant-600:#447093;--color-smoke-700:#475867;--color-smoke-300:#92a2b1;--color-smoke-100:#cfd7df;--color-smoke-50:#ebeff3;--color-smoke-25:#f3f5f7;--color-jungle-800:#00795b;--color-jungle-500:#00a886;--color-jungle-100:#b4e5da;--color-jungle-50:#e0f5f1;--color-azure-800:#2c5cc5;--color-azure-100:#bbdcfe;--color-azure-50:#e5f2fd;--color-persimmon-900:#c82124;--color-persimmon-800:#d72d30;--color-persimmon-100:#ffd0d6;--color-persimmon-50:#ffecf0;--color-casablanca-700:#e86f25;--color-casablanca-100:#fedcb3;--color-casablanca-50:#fef1e1;--border-color:var(--color-smoke-100);--border-success-color:var(--color-jungle-100);--border-info-color:var(--color-azure-100);--border-danger-color:var(--color-persimmon-100);--border-warning-color:var(--color-casablanca-100);--bg-dark:var(--color-elephant-900);--bg-success:var(--color-jungle-50);--bg-info:var(--color-azure-50);--bg-danger:var(--color-persimmon-50);--bg-warning:var(--color-casablanca-50);--radius:4px;--radius-small:2px;--font-stack:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif;--font-weight-400:400;--font-weight-300:300;--font-weight-500:500;--font-weight-600:600;--font-weight-700:700;--font-size-10:10px;--font-size-12:12px;--font-size-14:14px;--font-size-16:16px;--font-size-18:18px;--font-size-20:20px;--font-size-24:24px;--text-default:var(--color-elephant-900);--text-secondary:var(--color-smoke-700);--text-disabled:var(--color-smoke-300);--text-success:var(--color-jungle-800);--text-info:var(--color-azure-800);--text-danger:var(--color-persimmon-800);--text-warning:var(--color-casablanca-700);--text-link:var(--color-azure-800);--icon-primary:var(--color-smoke-700);--icon-primary-hover:var(--color-smoke-100);font-family:var(--font-stack);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box;--label-font:var(--font-stack);--input-bg:var(--color-milk);--help-color:var(--color-smoke-300);--error-color:var(--color-persimmon-800);--input-color:var(--color-elephant-900);--input-disabled-bg:var(--color-smoke-25);--input-hover-color:var(--color-smoke-700);--input-focus-color:var(--color-azure-800);--input-border:var(--color-smoke-100);--warning-color:var(--color-casablanca-100)}.textarea-container{margin-bottom:16px}label{font-size:var(--font-size-12);font-weight:var(--font-weight-500);color:var(--color-elephant-900);margin-bottom:0;padding-bottom:4px;padding-left:2px;display:block}label.required:after{content:\"*\";position:relative;display:inline-block;top:2px;font-size:var(--font-size-14);color:var(--error-color);padding-left:2px}.textarea-container-inner{display:block;width:100%;position:relative}.textarea-container-inner textarea{border:0;border:1px solid var(--input-border);margin:5px 0 0;border-radius:4px;padding:4px 12px 5px;background-color:var(--input-bg);-webkit-box-shadow:none;box-shadow:none;min-height:24px;font-size:var(--font-size-12);font-weight:var(--font-weight-500);letter-spacing:0;line-height:20px;cursor:text;display:inline-block}.textarea-container-inner textarea:hover{border:1px var(--input-hover-color) solid;-webkit-transition:.2s linear;transition:.2s linear}.textarea-container-inner textarea:focus{outline:none;background:var(--input-bg);border:1px solid transparent;-webkit-box-shadow:0 0 0 2px var(--input-focus-color);box-shadow:0 0 0 2px var(--input-focus-color)}.textarea-container-inner textarea[disabled]{color:var(--color-smoke-50);background-color:var(--input-disabled-bg);border-style:solid}.textarea-container-inner textarea[disabled]:hover{border:1px solid var(--input-border);cursor:not-allowed}.textarea-container-inner+.help-block{font-size:var(--font-size-12);margin-top:3px;color:var(--help-color);position:inherit;margin-bottom:0;display:block;padding-left:2px}.textarea-container-inner.error>textarea{border-color:var(--error-color)}.textarea-container-inner.error>textarea:focus{-webkit-box-shadow:none;box-shadow:none;border-color:var(--error-color)}.textarea-container-inner.error>textarea:hover{border-color:var(--error-color)}.textarea-container-inner.error+.help-block{color:var(--error-color)}.textarea-container-inner.warning>textarea{border-color:var(--warning-color)}.textarea-container-inner.warning>textarea:focus{-webkit-box-shadow:none;box-shadow:none;border-color:var(--warning-color)}.textarea-container-inner.warning>textarea:hover{border-color:var(--warning-color)}.textarea-container-inner.warning+.help-block{color:var(--warning-color)}::-webkit-input-placeholder{color:var(--color-smoke-300);opacity:1}::-moz-placeholder{color:var(--color-smoke-300);opacity:1}:-ms-input-placeholder{opacity:1}::-ms-input-placeholder{opacity:1}::placeholder{color:var(--color-smoke-300);opacity:1}:-ms-input-placeholder{color:var(--color-smoke-300)}::-ms-input-placeholder{color:var(--color-smoke-300)}"; }
};

exports.fw_textarea = Textarea;
