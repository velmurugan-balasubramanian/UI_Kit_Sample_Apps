import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './core-f05d0500.js';

const Select = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * If the dropdown is shown or not
         */
        this.isExpanded = false;
        this.options = [];
        this.filteredOptions = [];
        this.hasFocus = false;
        /**
         * Label for the control
         */
        this.label = '';
        /**
         * The name of the control, which is submitted with the form data.
         */
        this.name = '';
        /**
         * The type of control to display. The default type is text.
         */
        this.type = 'text';
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
         * If `true`, the user must select some value. The default wont be shown
         */
        this.forceSelect = true;
        /**
         * Indicates that this control is disabled
         */
        this.disabled = false;
        /**
         * Set to true for multipleselect mode
         */
        this.multiple = false;
        this.innerOnFocus = (e) => {
            this.hasFocus = true;
            this.fwFocus.emit(e);
        };
        this.innerOnClick = () => {
            this.filteredOptions = this.options;
            this.selectList.style.display = 'block';
            this.selectList.style.width = String(this.select.clientWidth) + 'px';
            this.isExpanded = true;
        };
        this.innerOnBlur = (e) => {
            this.selectList.style.display = 'none';
            this.isExpanded = false;
            this.fwBlur.emit(e);
        };
        this.fwChange = createEvent(this, "fwChange", 7);
        this.fwFocus = createEvent(this, "fwFocus", 7);
        this.fwBlur = createEvent(this, "fwBlur", 7);
    }
    keyChanged(newValue, oldValue) {
        if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
            this.options = this.options.map(option => {
                option.selected = Array.isArray(this.value)
                    ? this.value.includes(option.value)
                    : this.value === option.value;
                return option;
            });
            this.fwChange.emit({ value: this.value });
        }
    }
    fwSelectedHandler(selectedItem) {
        this.options = this.options.map(option => {
            if (selectedItem.detail.value === option.value) {
                option.selected = selectedItem.detail.selected;
            }
            else if (!this.multiple) {
                option.selected = false;
            }
            return option;
        });
        this.selectList.style.display = 'none';
        selectedItem.stopPropagation();
    }
    optionsChangedHandler() {
        const selectedOptions = this.options.filter(option => option.selected);
        if (selectedOptions.length > 0) {
            this.value = this.multiple ? selectedOptions.map(option => option.value) : selectedOptions[0].value || '';
            this.selectInput.value = this.multiple ? '' : selectedOptions[0].text || '';
        }
    }
    fwCloseHandler(ev) {
        this.options = this.options.map(option => {
            if (option.value === ev.detail.value) {
                option.selected = false;
            }
            return option;
        });
    }
    onKeyDonw(ev) {
        switch (ev.key) {
            case 'ArrowDown':
                this.innerOnClick();
                break;
            case 'Escape':
                this.innerOnBlur(ev);
                break;
        }
    }
    onInput() {
        const value = this.selectInput.value.toLowerCase();
        this.filteredOptions = value !== ''
            ? this.options.filter(option => option.text.toLowerCase().startsWith(value))
            : this.options;
    }
    renderTags() {
        if (this.multiple) {
            return this.options
                .filter(option => option.selected)
                .map(option => h("fw-tag", { text: option.text, value: option.value }));
        }
    }
    renderDropdown() {
        return this.filteredOptions.map(option => (h("fw-select-option", { value: option.value, selected: option.selected }, option.text)));
    }
    componentWillLoad() {
        // this.value = this.value || (this. multiple ? [] : undefined);
        const selectOptions = Array.from(this.host.querySelectorAll('fw-select-option'));
        const options = selectOptions.map(option => {
            return {
                text: option.textContent,
                value: option.value,
                selected: option.selected,
            };
        });
        this.options = options;
        this.filteredOptions = this.options;
        this.host.innerHTML = '';
    }
    async getSelectedItem() {
        return this.options.filter(option => option.selected);
    }
    render() {
        return (h(Host, { "aria-disabled": this.disabled, class: {
                'has-focus': this.hasFocus,
            } }, this.label !== '' ? h("label", { class: { 'required': this.required } }, " ", this.label, " ") : '', h("div", { class: "select-container" }, h("div", { class: "input-container", ref: select => this.select = select, onClick: () => this.innerOnClick() }, h("div", { class: {
                'input-container-inner': true,
                [this.state]: true,
            } }, this.renderTags(), h("input", { ref: selectInput => this.selectInput = selectInput, class: {
                'multiple-select': this.multiple,
            }, autoComplete: "off", disabled: this.disabled, name: this.name, placeholder: this.placeholder || '', readOnly: this.readonly, required: this.required, type: this.type, value: "", onInput: () => this.onInput(), onFocus: e => this.innerOnFocus(e), onBlur: e => this.innerOnBlur(e) }), h("span", { class: { 'dropdown-status-icon': true, 'expanded': this.isExpanded } }))), h("ul", { tabindex: "0", ref: ul => this.selectList = ul }, this.renderDropdown()), this.stateText !== '' ?
            h("span", { class: "help-block" }, this.stateText) : '')));
    }
    get host() { return getElement(this); }
    static get watchers() { return {
        "value": ["keyChanged"],
        "options": ["optionsChangedHandler"]
    }; }
    static get style() { return ":host{--color-milk:#fff;--color-elephant-900:#12344d;--color-elephant-800:#264966;--color-elephant-700:#345c7c;--color-elephant-600:#447093;--color-smoke-700:#475867;--color-smoke-300:#92a2b1;--color-smoke-100:#cfd7df;--color-smoke-50:#ebeff3;--color-smoke-25:#f3f5f7;--color-jungle-800:#00795b;--color-jungle-500:#00a886;--color-jungle-100:#b4e5da;--color-jungle-50:#e0f5f1;--color-azure-800:#2c5cc5;--color-azure-100:#bbdcfe;--color-azure-50:#e5f2fd;--color-persimmon-900:#c82124;--color-persimmon-800:#d72d30;--color-persimmon-100:#ffd0d6;--color-persimmon-50:#ffecf0;--color-casablanca-700:#e86f25;--color-casablanca-100:#fedcb3;--color-casablanca-50:#fef1e1;--border-color:var(--color-smoke-100);--border-success-color:var(--color-jungle-100);--border-info-color:var(--color-azure-100);--border-danger-color:var(--color-persimmon-100);--border-warning-color:var(--color-casablanca-100);--bg-dark:var(--color-elephant-900);--bg-success:var(--color-jungle-50);--bg-info:var(--color-azure-50);--bg-danger:var(--color-persimmon-50);--bg-warning:var(--color-casablanca-50);--radius:4px;--radius-small:2px;--font-stack:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif;--font-weight-400:400;--font-weight-300:300;--font-weight-500:500;--font-weight-600:600;--font-weight-700:700;--font-size-10:10px;--font-size-12:12px;--font-size-14:14px;--font-size-16:16px;--font-size-18:18px;--font-size-20:20px;--font-size-24:24px;--text-default:var(--color-elephant-900);--text-secondary:var(--color-smoke-700);--text-disabled:var(--color-smoke-300);--text-success:var(--color-jungle-800);--text-info:var(--color-azure-800);--text-danger:var(--color-persimmon-800);--text-warning:var(--color-casablanca-700);--text-link:var(--color-azure-800);--icon-primary:var(--color-smoke-700);--icon-primary-hover:var(--color-smoke-100);font-family:var(--font-stack);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box;--label-font:var(--font-stack);--input-bg:var(--color-milk);--help-color:var(--color-smoke-300);--error-color:var(--color-persimmon-800);--input-color:var(--color-elephant-900);--input-disabled-bg:var(--color-smoke-25);--input-hover-color:var(--color-smoke-700);--input-focus-color:var(--color-azure-800);--input-border:var(--color-smoke-100);--warning-color:var(--color-casablanca-100)}label{font-size:var(--font-size-12);font-weight:var(--font-weight-500);color:var(--color-elephant-900);margin-bottom:0;padding-bottom:4px;padding-left:2px;display:block}label.required:after{content:\"*\";position:relative;display:inline-block;top:2px;font-size:var(--font-size-14);color:var(--error-color);padding-left:2px}.input-container-inner{display:block;width:100%;position:relative}.input-container-inner input{border:none;margin-top:3px;font-size:var(--font-size-12);font-weight:var(--font-weight-500);letter-spacing:0;line-height:1.4;background-color:var(--input-bg)}.input-container-inner input:focus{border:none;outline:none}.input-container-inner input.multi-select{width:auto}.input-container-inner.error>input{border-color:var(--error-color)}.input-container-inner.error>input:focus{-webkit-box-shadow:none;box-shadow:none;border-color:var(--error-color)}.input-container-inner.error>input:hover{border-color:var(--error-color)}.input-container-inner.error+.help-block{color:var(--error-color)}.input-container-inner.warning>input{border-color:var(--warning-color)}.input-container-inner.warning>input:focus{-webkit-box-shadow:none;box-shadow:none;border-color:var(--warning-color)}.input-container-inner.warning>input:hover{border-color:var(--warning-color)}.input-container-inner.warning+.help-block{color:var(--warning-color)}.input-container{width:calc(100% - 10px);border:0;border:1px solid var(--input-border);margin:5px 0 0;border-radius:4px;padding:4px 0 4px 10px;background-color:var(--input-bg);-webkit-box-shadow:none;box-shadow:none;min-height:24px;display:inline-block}.input-container:hover{border:1px var(--input-hover-color) solid;-webkit-transition:.2s linear;transition:.2s linear}.input-container[disabled]{color:var(--color-smoke-50);background-color:var(--input-disabled-bg);border-style:solid}.input-container[disabled]:hover{border:1px solid var(--input-border);cursor:not-allowed}:host(.has-focus) .input-container{outline:none;background:var(--input-bg);border:1px solid transparent;-webkit-box-shadow:0 0 0 2px var(--input-focus-color);box-shadow:0 0 0 2px var(--input-focus-color)}.select-container{margin-bottom:16px;width:inherit;height:inherit}.select-container ul{max-height:150px;overflow-y:scroll;overflow-x:hidden;padding:8px;list-style:none;margin:0;border-radius:4px;margin-top:2px;display:none;position:absolute;z-index:1;background:var(--input-bg);width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;outline:none;-webkit-box-shadow:0 2px 18px 0 rgba(18,52,77,.16),0 2px 4px 0 rgba(18,52,77,.06);box-shadow:0 2px 18px 0 rgba(18,52,77,.16),0 2px 4px 0 rgba(18,52,77,.06);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-animation:dropdown-fade .15s;animation:dropdown-fade .15s;will-change:auto}.select-container .dropdown-status-icon{position:absolute;display:inline-block;right:12px;content:\"\";top:45%;width:5px;height:5px;background-color:transparent;border-style:inherit;border-top:1px solid #12344d;border-right:1px solid #12344d;border-left:transparent;-webkit-transform:rotate(135deg);transform:rotate(135deg);-webkit-transition:all .15s;transition:all .15s}.select-container .help-block{font-size:var(--font-size-12);margin-top:3px;color:var(--help-color);position:inherit;margin-bottom:0;display:block;padding-left:2px}.select-container .dropdown-status-icon.expanded{-webkit-transform:rotate(315deg);transform:rotate(315deg)}::-webkit-input-placeholder{color:var(--color-smoke-300);opacity:1}::-moz-placeholder{color:var(--color-smoke-300);opacity:1}:-ms-input-placeholder{opacity:1}::-ms-input-placeholder{opacity:1}::placeholder{color:var(--color-smoke-300);opacity:1}:-ms-input-placeholder{color:var(--color-smoke-300)}::-ms-input-placeholder{color:var(--color-smoke-300)}\@-webkit-keyframes dropdown-fade{0%{opacity:0;-webkit-transform:translateY(-10%);transform:translateY(-10%)}50%{opacity:.7;-webkit-transform:translateY(-5%);transform:translateY(-5%)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}\@keyframes dropdown-fade{0%{opacity:0;-webkit-transform:translateY(-10%);transform:translateY(-10%)}50%{opacity:.7;-webkit-transform:translateY(-5%);transform:translateY(-5%)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}"; }
};

export { Select as fw_select };
