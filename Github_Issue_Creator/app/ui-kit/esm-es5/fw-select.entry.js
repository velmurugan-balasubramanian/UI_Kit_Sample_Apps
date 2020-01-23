var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './core-f05d0500.js';
var Select = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
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
        this.innerOnFocus = function (e) {
            _this.hasFocus = true;
            _this.fwFocus.emit(e);
        };
        this.innerOnClick = function () {
            _this.filteredOptions = _this.options;
            _this.selectList.style.display = 'block';
            _this.selectList.style.width = String(_this.select.clientWidth) + 'px';
            _this.isExpanded = true;
        };
        this.innerOnBlur = function (e) {
            _this.selectList.style.display = 'none';
            _this.isExpanded = false;
            _this.fwBlur.emit(e);
        };
        this.fwChange = createEvent(this, "fwChange", 7);
        this.fwFocus = createEvent(this, "fwFocus", 7);
        this.fwBlur = createEvent(this, "fwBlur", 7);
    }
    class_1.prototype.keyChanged = function (newValue, oldValue) {
        var _this = this;
        if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
            this.options = this.options.map(function (option) {
                option.selected = Array.isArray(_this.value)
                    ? _this.value.includes(option.value)
                    : _this.value === option.value;
                return option;
            });
            this.fwChange.emit({ value: this.value });
        }
    };
    class_1.prototype.fwSelectedHandler = function (selectedItem) {
        var _this = this;
        this.options = this.options.map(function (option) {
            if (selectedItem.detail.value === option.value) {
                option.selected = selectedItem.detail.selected;
            }
            else if (!_this.multiple) {
                option.selected = false;
            }
            return option;
        });
        this.selectList.style.display = 'none';
        selectedItem.stopPropagation();
    };
    class_1.prototype.optionsChangedHandler = function () {
        var selectedOptions = this.options.filter(function (option) { return option.selected; });
        if (selectedOptions.length > 0) {
            this.value = this.multiple ? selectedOptions.map(function (option) { return option.value; }) : selectedOptions[0].value || '';
            this.selectInput.value = this.multiple ? '' : selectedOptions[0].text || '';
        }
    };
    class_1.prototype.fwCloseHandler = function (ev) {
        this.options = this.options.map(function (option) {
            if (option.value === ev.detail.value) {
                option.selected = false;
            }
            return option;
        });
    };
    class_1.prototype.onKeyDonw = function (ev) {
        switch (ev.key) {
            case 'ArrowDown':
                this.innerOnClick();
                break;
            case 'Escape':
                this.innerOnBlur(ev);
                break;
        }
    };
    class_1.prototype.onInput = function () {
        var value = this.selectInput.value.toLowerCase();
        this.filteredOptions = value !== ''
            ? this.options.filter(function (option) { return option.text.toLowerCase().startsWith(value); })
            : this.options;
    };
    class_1.prototype.renderTags = function () {
        if (this.multiple) {
            return this.options
                .filter(function (option) { return option.selected; })
                .map(function (option) { return h("fw-tag", { text: option.text, value: option.value }); });
        }
    };
    class_1.prototype.renderDropdown = function () {
        return this.filteredOptions.map(function (option) { return (h("fw-select-option", { value: option.value, selected: option.selected }, option.text)); });
    };
    class_1.prototype.componentWillLoad = function () {
        // this.value = this.value || (this. multiple ? [] : undefined);
        var selectOptions = Array.from(this.host.querySelectorAll('fw-select-option'));
        var options = selectOptions.map(function (option) {
            return {
                text: option.textContent,
                value: option.value,
                selected: option.selected,
            };
        });
        this.options = options;
        this.filteredOptions = this.options;
        this.host.innerHTML = '';
    };
    class_1.prototype.getSelectedItem = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.options.filter(function (option) { return option.selected; })];
            });
        });
    };
    class_1.prototype.render = function () {
        var _a;
        var _this = this;
        return (h(Host, { "aria-disabled": this.disabled, class: {
                'has-focus': this.hasFocus,
            } }, this.label !== '' ? h("label", { class: { 'required': this.required } }, " ", this.label, " ") : '', h("div", { class: "select-container" }, h("div", { class: "input-container", ref: function (select) { return _this.select = select; }, onClick: function () { return _this.innerOnClick(); } }, h("div", { class: (_a = {
                    'input-container-inner': true
                },
                _a[this.state] = true,
                _a) }, this.renderTags(), h("input", { ref: function (selectInput) { return _this.selectInput = selectInput; }, class: {
                'multiple-select': this.multiple,
            }, autoComplete: "off", disabled: this.disabled, name: this.name, placeholder: this.placeholder || '', readOnly: this.readonly, required: this.required, type: this.type, value: "", onInput: function () { return _this.onInput(); }, onFocus: function (e) { return _this.innerOnFocus(e); }, onBlur: function (e) { return _this.innerOnBlur(e); } }), h("span", { class: { 'dropdown-status-icon': true, 'expanded': this.isExpanded } }))), h("ul", { tabindex: "0", ref: function (ul) { return _this.selectList = ul; } }, this.renderDropdown()), this.stateText !== '' ?
            h("span", { class: "help-block" }, this.stateText) : '')));
    };
    Object.defineProperty(class_1.prototype, "host", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "value": ["keyChanged"],
                "options": ["optionsChangedHandler"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ":host{--color-milk:#fff;--color-elephant-900:#12344d;--color-elephant-800:#264966;--color-elephant-700:#345c7c;--color-elephant-600:#447093;--color-smoke-700:#475867;--color-smoke-300:#92a2b1;--color-smoke-100:#cfd7df;--color-smoke-50:#ebeff3;--color-smoke-25:#f3f5f7;--color-jungle-800:#00795b;--color-jungle-500:#00a886;--color-jungle-100:#b4e5da;--color-jungle-50:#e0f5f1;--color-azure-800:#2c5cc5;--color-azure-100:#bbdcfe;--color-azure-50:#e5f2fd;--color-persimmon-900:#c82124;--color-persimmon-800:#d72d30;--color-persimmon-100:#ffd0d6;--color-persimmon-50:#ffecf0;--color-casablanca-700:#e86f25;--color-casablanca-100:#fedcb3;--color-casablanca-50:#fef1e1;--border-color:var(--color-smoke-100);--border-success-color:var(--color-jungle-100);--border-info-color:var(--color-azure-100);--border-danger-color:var(--color-persimmon-100);--border-warning-color:var(--color-casablanca-100);--bg-dark:var(--color-elephant-900);--bg-success:var(--color-jungle-50);--bg-info:var(--color-azure-50);--bg-danger:var(--color-persimmon-50);--bg-warning:var(--color-casablanca-50);--radius:4px;--radius-small:2px;--font-stack:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif;--font-weight-400:400;--font-weight-300:300;--font-weight-500:500;--font-weight-600:600;--font-weight-700:700;--font-size-10:10px;--font-size-12:12px;--font-size-14:14px;--font-size-16:16px;--font-size-18:18px;--font-size-20:20px;--font-size-24:24px;--text-default:var(--color-elephant-900);--text-secondary:var(--color-smoke-700);--text-disabled:var(--color-smoke-300);--text-success:var(--color-jungle-800);--text-info:var(--color-azure-800);--text-danger:var(--color-persimmon-800);--text-warning:var(--color-casablanca-700);--text-link:var(--color-azure-800);--icon-primary:var(--color-smoke-700);--icon-primary-hover:var(--color-smoke-100);font-family:var(--font-stack);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box;--label-font:var(--font-stack);--input-bg:var(--color-milk);--help-color:var(--color-smoke-300);--error-color:var(--color-persimmon-800);--input-color:var(--color-elephant-900);--input-disabled-bg:var(--color-smoke-25);--input-hover-color:var(--color-smoke-700);--input-focus-color:var(--color-azure-800);--input-border:var(--color-smoke-100);--warning-color:var(--color-casablanca-100)}label{font-size:var(--font-size-12);font-weight:var(--font-weight-500);color:var(--color-elephant-900);margin-bottom:0;padding-bottom:4px;padding-left:2px;display:block}label.required:after{content:\"*\";position:relative;display:inline-block;top:2px;font-size:var(--font-size-14);color:var(--error-color);padding-left:2px}.input-container-inner{display:block;width:100%;position:relative}.input-container-inner input{border:none;margin-top:3px;font-size:var(--font-size-12);font-weight:var(--font-weight-500);letter-spacing:0;line-height:1.4;background-color:var(--input-bg)}.input-container-inner input:focus{border:none;outline:none}.input-container-inner input.multi-select{width:auto}.input-container-inner.error>input{border-color:var(--error-color)}.input-container-inner.error>input:focus{-webkit-box-shadow:none;box-shadow:none;border-color:var(--error-color)}.input-container-inner.error>input:hover{border-color:var(--error-color)}.input-container-inner.error+.help-block{color:var(--error-color)}.input-container-inner.warning>input{border-color:var(--warning-color)}.input-container-inner.warning>input:focus{-webkit-box-shadow:none;box-shadow:none;border-color:var(--warning-color)}.input-container-inner.warning>input:hover{border-color:var(--warning-color)}.input-container-inner.warning+.help-block{color:var(--warning-color)}.input-container{width:calc(100% - 10px);border:0;border:1px solid var(--input-border);margin:5px 0 0;border-radius:4px;padding:4px 0 4px 10px;background-color:var(--input-bg);-webkit-box-shadow:none;box-shadow:none;min-height:24px;display:inline-block}.input-container:hover{border:1px var(--input-hover-color) solid;-webkit-transition:.2s linear;transition:.2s linear}.input-container[disabled]{color:var(--color-smoke-50);background-color:var(--input-disabled-bg);border-style:solid}.input-container[disabled]:hover{border:1px solid var(--input-border);cursor:not-allowed}:host(.has-focus) .input-container{outline:none;background:var(--input-bg);border:1px solid transparent;-webkit-box-shadow:0 0 0 2px var(--input-focus-color);box-shadow:0 0 0 2px var(--input-focus-color)}.select-container{margin-bottom:16px;width:inherit;height:inherit}.select-container ul{max-height:150px;overflow-y:scroll;overflow-x:hidden;padding:8px;list-style:none;margin:0;border-radius:4px;margin-top:2px;display:none;position:absolute;z-index:1;background:var(--input-bg);width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;outline:none;-webkit-box-shadow:0 2px 18px 0 rgba(18,52,77,.16),0 2px 4px 0 rgba(18,52,77,.06);box-shadow:0 2px 18px 0 rgba(18,52,77,.16),0 2px 4px 0 rgba(18,52,77,.06);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-animation:dropdown-fade .15s;animation:dropdown-fade .15s;will-change:auto}.select-container .dropdown-status-icon{position:absolute;display:inline-block;right:12px;content:\"\";top:45%;width:5px;height:5px;background-color:transparent;border-style:inherit;border-top:1px solid #12344d;border-right:1px solid #12344d;border-left:transparent;-webkit-transform:rotate(135deg);transform:rotate(135deg);-webkit-transition:all .15s;transition:all .15s}.select-container .help-block{font-size:var(--font-size-12);margin-top:3px;color:var(--help-color);position:inherit;margin-bottom:0;display:block;padding-left:2px}.select-container .dropdown-status-icon.expanded{-webkit-transform:rotate(315deg);transform:rotate(315deg)}::-webkit-input-placeholder{color:var(--color-smoke-300);opacity:1}::-moz-placeholder{color:var(--color-smoke-300);opacity:1}:-ms-input-placeholder{opacity:1}::-ms-input-placeholder{opacity:1}::placeholder{color:var(--color-smoke-300);opacity:1}:-ms-input-placeholder{color:var(--color-smoke-300)}::-ms-input-placeholder{color:var(--color-smoke-300)}\@-webkit-keyframes dropdown-fade{0%{opacity:0;-webkit-transform:translateY(-10%);transform:translateY(-10%)}50%{opacity:.7;-webkit-transform:translateY(-5%);transform:translateY(-5%)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}\@keyframes dropdown-fade{0%{opacity:0;-webkit-transform:translateY(-10%);transform:translateY(-10%)}50%{opacity:.7;-webkit-transform:translateY(-5%);transform:translateY(-5%)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { Select as fw_select };
