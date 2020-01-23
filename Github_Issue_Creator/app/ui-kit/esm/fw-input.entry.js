import { r as registerInstance, c as createEvent, h, H as Host } from './core-f05d0500.js';

const Input = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
         * The type of control to display. The default type is text.
         */
        this.type = 'text';
        /**
         * Indicates whether the value of the control can be automatically completed by the browser.
         */
        this.autocomplete = 'off';
        /**
         * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
         */
        this.clearInput = false;
        /**
         * The name of the control, which is submitted with the form data.
         */
        this.name = '';
        /**
         * The state of the control. Color changes accordingly
         */
        this.state = 'normal';
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
        /**
         * Name of the icon for left side
         */
        this.iconLeft = undefined;
        /**
         * Name of the icon for right side
         */
        this.iconRight = undefined;
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
        this.clearTextInput = (ev) => {
            if (this.clearInput && !this.readonly && !this.disabled && ev) {
                ev.preventDefault();
                ev.stopPropagation();
            }
            this.value = '';
            if (this.nativeInput) {
                this.nativeInput.value = '';
            }
        };
        this.fwChange = createEvent(this, "fwChange", 7);
        this.fwFocus = createEvent(this, "fwFocus", 7);
        this.fwBlur = createEvent(this, "fwBlur", 7);
        this.fwInput = createEvent(this, "fwInput", 7);
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
        return (h(Host, { "aria-disabled": this.disabled, class: {
                'has-value': this.hasValue(),
                'has-focus': this.hasFocus,
            } }, h("div", { class: "input-container" }, this.label !== '' ? h("label", { class: {
                'required': this.required,
            } }, this.label) : '', h("div", { class: {
                'input-container-inner': true,
                [this.state]: true,
                'left-icon': this.iconLeft !== undefined,
                'right-icon': this.iconRight !== undefined,
            } }, h("input", { ref: input => this.nativeInput = input, autoComplete: this.autocomplete, disabled: this.disabled, name: this.name, placeholder: this.placeholder || '', minLength: this.minlength, maxLength: this.maxlength, readOnly: this.readonly, required: this.required, type: this.type, value: value, onInput: e => this.onInput(e), onBlur: this.onBlur, onFocus: this.onFocus }), this.iconLeft !== undefined ? h("fw-icon", { class: "icon left", name: this.iconLeft }) : '', this.iconRight !== undefined ? h("fw-icon", { class: "icon right", name: this.iconRight }) : '', this.clearInput && this.value.length > 0 ?
            h("div", { class: "clear-button", onClick: e => this.clearTextInput(e) }, h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 32 32", class: "clear-button-img" }, h("path", { d: "M17.992 16l8.796-8.796a1.409 1.409 0 0 0-1.992-1.992L16 14.008 7.204 5.212a1.409 1.409 0 0 0-1.992 1.992L14.008 16l-8.796 8.796a1.409 1.409 0 0 0 1.992 1.992L16 17.992l8.796 8.796a1.409 1.409 0 0 0 1.992-1.992L17.992 16z" }))) : ''), this.stateText !== '' ?
            h("span", { class: "help-block" }, this.stateText) : '')));
    }
    static get watchers() { return {
        "value": ["watchHandler"]
    }; }
    static get style() { return ":host{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}*,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box}.input-container{margin-bottom:16px;width:inherit;height:inherit}label{font-size:12px;color:#475867;font-weight:500;margin-bottom:0;padding-bottom:4px;padding-left:2px;display:block}label.required:after{content:\"*\";position:relative;display:inline-block;top:2px;font-size:14px;color:#d72d30;padding-left:2px;font-weight:700}.input-container-inner{display:block;width:100%;position:relative}.input-container-inner input{width:100%;border:0;border:1px solid #cfd7df;margin:5px 0 0;border-radius:4px;padding:4px 12px 5px;resize:none;background-color:#fff;-webkit-box-shadow:none;box-shadow:none;min-height:24px;font-size:12px;font-weight:500;letter-spacing:0;line-height:20px;color:#183247;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:text;display:inline-block;font-family:inherit}.input-container-inner input:hover{border:1px solid #475867;-webkit-transition:.2s linear;transition:.2s linear}.input-container-inner input:focus{outline:none;background:#fff;background-color:#fff;border:1px solid transparent;-webkit-box-shadow:0 0 0 2px #2c5cc5;box-shadow:0 0 0 2px #2c5cc5}.input-container-inner input[disabled]{color:#cfd7df;background-color:#f5f7f9;border-style:solid;pointer-events:none}.input-container-inner input[disabled]:hover{border:1px solid #cfd7df}.input-container-inner .clear-button{top:13px;position:absolute;right:10px;display:inline-block}.input-container-inner .clear-button:hover{cursor:pointer;pointer-events:auto}.input-container-inner .clear-button .clear-button-img{width:15px;height:15px}.input-container-inner+.help-block{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:11px;margin-top:3px;color:#acb6be;position:inherit;margin-bottom:0;display:block;padding-left:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.input-container-inner.error>input{border-color:#d72d30}.input-container-inner.error>input:focus{-webkit-box-shadow:none;box-shadow:none;border-color:#d72d30}.input-container-inner.error>input:hover{border-color:#d72d30}.input-container-inner.error+.help-block{color:#d72d30}.input-container-inner.warning>input{border-color:#f8ab59}.input-container-inner.warning>input:focus{-webkit-box-shadow:none;box-shadow:none;border-color:#f8ab59}.input-container-inner.warning>input:hover{border-color:#f8ab59}.input-container-inner.warning+.help-block{color:#f8ab59}::-webkit-input-placeholder{color:#acb6be}::-moz-placeholder{color:#acb6be}:-ms-input-placeholder{color:#acb6be}:-moz-placeholder{color:#acb6be}.icon{position:absolute;top:8px;width:25px;height:25px;border-radius:3px;padding:3px 0 0 6px;display:block;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#ebeff3}.icon,.icon.left{left:3px}.icon.left:after{left:28px;content:\"\";width:1px;display:block;height:20px;background-color:#ebeff3;position:absolute;top:3px}.icon.right{left:auto;right:3px}.icon.right:before{right:28px;content:\"\";width:1px;display:block;height:20px;background-color:#ebeff3;position:absolute;top:3px}.left-icon input{padding-left:38px}.right-icon input{padding-right:38px}"; }
};

export { Input as fw_input };
