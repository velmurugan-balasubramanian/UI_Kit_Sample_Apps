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
import { r as registerInstance, c as createEvent, h, H as Host } from './core-f05d0500.js';
var Textarea = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
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
        this.onInput = function (ev) {
            var input = ev.target;
            if (input) {
                _this.value = input.value || '';
            }
            _this.fwInput.emit(ev);
        };
        this.onFocus = function () {
            _this.hasFocus = true;
            _this.fwFocus.emit();
        };
        this.onBlur = function () {
            _this.hasFocus = false;
            _this.fwBlur.emit();
        };
        this.fwChange = createEvent(this, "fwChange", 7);
        this.fwFocus = createEvent(this, "fwFocus", 7);
        this.fwBlur = createEvent(this, "fwBlur", 7);
        this.fwInput = createEvent(this, "fwInput", 7);
    }
    class_1.prototype.watchHandler = function (newValue) {
        this.fwChange.emit({ value: newValue });
    };
    class_1.prototype.getValue = function () {
        return this.value || '';
    };
    class_1.prototype.hasValue = function () {
        return this.getValue().length > 0;
    };
    /**
     * Sets focus on the specified `fw-input`. Use this method instead of the global
     * `input.focus()`.
     */
    class_1.prototype.setFocus = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.nativeInput) {
                    this.nativeInput.focus();
                }
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.render = function () {
        var _a;
        var _this = this;
        var value = '';
        return (h(Host, { "aria-disabled": this.disabled, class: {
                'has-value': this.hasValue(),
                'has-focus': this.hasFocus,
            } }, h("div", { class: "textarea-container" }, this.label !== '' ? h("label", { class: {
                'required': this.required,
            } }, this.label) : '', h("div", { class: (_a = {
                    'textarea-container-inner': true
                },
                _a[this.state] = true,
                _a) }, h("textarea", { ref: function (input) { return _this.nativeInput = input; }, disabled: this.disabled, name: this.name, placeholder: this.placeholder || '', minLength: this.minlength, maxLength: this.maxlength, readOnly: this.readonly, required: this.required, value: value, onInput: function (e) { return _this.onInput(e); }, onBlur: this.onBlur, onFocus: this.onFocus, rows: this.rows, cols: this.cols, wrap: this.wrap })), this.stateText !== '' ?
            h("span", { class: "help-block" }, this.stateText) : '')));
    };
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "value": ["watchHandler"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ":host{--color-milk:#fff;--color-elephant-900:#12344d;--color-elephant-800:#264966;--color-elephant-700:#345c7c;--color-elephant-600:#447093;--color-smoke-700:#475867;--color-smoke-300:#92a2b1;--color-smoke-100:#cfd7df;--color-smoke-50:#ebeff3;--color-smoke-25:#f3f5f7;--color-jungle-800:#00795b;--color-jungle-500:#00a886;--color-jungle-100:#b4e5da;--color-jungle-50:#e0f5f1;--color-azure-800:#2c5cc5;--color-azure-100:#bbdcfe;--color-azure-50:#e5f2fd;--color-persimmon-900:#c82124;--color-persimmon-800:#d72d30;--color-persimmon-100:#ffd0d6;--color-persimmon-50:#ffecf0;--color-casablanca-700:#e86f25;--color-casablanca-100:#fedcb3;--color-casablanca-50:#fef1e1;--border-color:var(--color-smoke-100);--border-success-color:var(--color-jungle-100);--border-info-color:var(--color-azure-100);--border-danger-color:var(--color-persimmon-100);--border-warning-color:var(--color-casablanca-100);--bg-dark:var(--color-elephant-900);--bg-success:var(--color-jungle-50);--bg-info:var(--color-azure-50);--bg-danger:var(--color-persimmon-50);--bg-warning:var(--color-casablanca-50);--radius:4px;--radius-small:2px;--font-stack:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif;--font-weight-400:400;--font-weight-300:300;--font-weight-500:500;--font-weight-600:600;--font-weight-700:700;--font-size-10:10px;--font-size-12:12px;--font-size-14:14px;--font-size-16:16px;--font-size-18:18px;--font-size-20:20px;--font-size-24:24px;--text-default:var(--color-elephant-900);--text-secondary:var(--color-smoke-700);--text-disabled:var(--color-smoke-300);--text-success:var(--color-jungle-800);--text-info:var(--color-azure-800);--text-danger:var(--color-persimmon-800);--text-warning:var(--color-casablanca-700);--text-link:var(--color-azure-800);--icon-primary:var(--color-smoke-700);--icon-primary-hover:var(--color-smoke-100);font-family:var(--font-stack);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box;--label-font:var(--font-stack);--input-bg:var(--color-milk);--help-color:var(--color-smoke-300);--error-color:var(--color-persimmon-800);--input-color:var(--color-elephant-900);--input-disabled-bg:var(--color-smoke-25);--input-hover-color:var(--color-smoke-700);--input-focus-color:var(--color-azure-800);--input-border:var(--color-smoke-100);--warning-color:var(--color-casablanca-100)}.textarea-container{margin-bottom:16px}label{font-size:var(--font-size-12);font-weight:var(--font-weight-500);color:var(--color-elephant-900);margin-bottom:0;padding-bottom:4px;padding-left:2px;display:block}label.required:after{content:\"*\";position:relative;display:inline-block;top:2px;font-size:var(--font-size-14);color:var(--error-color);padding-left:2px}.textarea-container-inner{display:block;width:100%;position:relative}.textarea-container-inner textarea{border:0;border:1px solid var(--input-border);margin:5px 0 0;border-radius:4px;padding:4px 12px 5px;background-color:var(--input-bg);-webkit-box-shadow:none;box-shadow:none;min-height:24px;font-size:var(--font-size-12);font-weight:var(--font-weight-500);letter-spacing:0;line-height:20px;cursor:text;display:inline-block}.textarea-container-inner textarea:hover{border:1px var(--input-hover-color) solid;-webkit-transition:.2s linear;transition:.2s linear}.textarea-container-inner textarea:focus{outline:none;background:var(--input-bg);border:1px solid transparent;-webkit-box-shadow:0 0 0 2px var(--input-focus-color);box-shadow:0 0 0 2px var(--input-focus-color)}.textarea-container-inner textarea[disabled]{color:var(--color-smoke-50);background-color:var(--input-disabled-bg);border-style:solid}.textarea-container-inner textarea[disabled]:hover{border:1px solid var(--input-border);cursor:not-allowed}.textarea-container-inner+.help-block{font-size:var(--font-size-12);margin-top:3px;color:var(--help-color);position:inherit;margin-bottom:0;display:block;padding-left:2px}.textarea-container-inner.error>textarea{border-color:var(--error-color)}.textarea-container-inner.error>textarea:focus{-webkit-box-shadow:none;box-shadow:none;border-color:var(--error-color)}.textarea-container-inner.error>textarea:hover{border-color:var(--error-color)}.textarea-container-inner.error+.help-block{color:var(--error-color)}.textarea-container-inner.warning>textarea{border-color:var(--warning-color)}.textarea-container-inner.warning>textarea:focus{-webkit-box-shadow:none;box-shadow:none;border-color:var(--warning-color)}.textarea-container-inner.warning>textarea:hover{border-color:var(--warning-color)}.textarea-container-inner.warning+.help-block{color:var(--warning-color)}::-webkit-input-placeholder{color:var(--color-smoke-300);opacity:1}::-moz-placeholder{color:var(--color-smoke-300);opacity:1}:-ms-input-placeholder{opacity:1}::-ms-input-placeholder{opacity:1}::placeholder{color:var(--color-smoke-300);opacity:1}:-ms-input-placeholder{color:var(--color-smoke-300)}::-ms-input-placeholder{color:var(--color-smoke-300)}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { Textarea as fw_textarea };
