import { r as registerInstance, c as createEvent, h, H as Host } from './core-f05d0500.js';
var Checkbox = /** @class */ (function () {
    function Checkbox(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Property to maintain checked state
         */
        this.checked = false;
        /**
         * Disables the checkbox
         */
        this.disabled = false;
        /**
         * Label for checkbox
         */
        this.label = '';
        /**
         * Value of the checkbox for within a form
         */
        this.value = '';
        this.fwChange = createEvent(this, "fwChange", 7);
        this.fwFocus = createEvent(this, "fwFocus", 7);
        this.fwBlur = createEvent(this, "fwBlur", 7);
    }
    Checkbox.prototype.componentDidLoad = function () {
        this.checkbox.checked = this.checked;
        this.checkbox.disabled = this.disabled;
    };
    Checkbox.prototype.checkChanged = function (isChecked) {
        if (!this.disabled) {
            this.checkbox.checked = isChecked;
            this.fwChange.emit({
                value: this.value,
                checked: isChecked,
            });
        }
    };
    Checkbox.prototype.disabledChanged = function (isDisabled) {
        this.checkbox.disabled = isDisabled;
    };
    Checkbox.prototype.onFocus = function () {
        this.fwFocus.emit();
    };
    Checkbox.prototype.onBlur = function () {
        this.fwBlur.emit();
    };
    Checkbox.prototype.toggle = function () {
        if (!this.disabled) {
            this.checked = !this.checked;
        }
    };
    Checkbox.prototype.render = function () {
        var _this = this;
        return (h(Host, { class: "checkbox-container", onClick: function () { return _this.toggle(); }, role: "checkbox", tabIndex: "0", "aria-disabled": this.disabled ? 'true' : 'false', "aria-checked": "" + this.checked, onFocus: function () { return _this.onFocus(); }, onBlur: function () { return _this.onBlur(); } }, h("input", { type: "checkbox", ref: function (el) { return _this.checkbox = el; } }), h("label", null, h("span", { class: "text" }, h("slot", null)), h("br", null), this.label !== ''
            ? h("span", { class: "label-field" }, this.label)
            : '')));
    };
    Object.defineProperty(Checkbox, "watchers", {
        get: function () {
            return {
                "checked": ["checkChanged"],
                "disabled": ["disabledChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Checkbox, "style", {
        get: function () { return ":host{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}:host(.checkbox-container){display:inline;position:relative}:host(:focus){outline:none}:host(:focus) input[type=checkbox]+label:before{border:1px solid transparent;-webkit-box-shadow:0 0 0 2px #2c5cc5;box-shadow:0 0 0 2px #2c5cc5}:host(:focus) input[type=checkbox][disabled]+label:before{-webkit-box-shadow:none;box-shadow:none;border:1px solid #dadfe3}.label-field{font-size:12px;color:#475867;letter-spacing:0;line-height:20px;position:relative;padding-left:28px;font-weight:400}:host(:hover) input[type=checkbox]+label:before{border-color:#12344d;-webkit-box-shadow:0 0 0 5px #ebeff3;box-shadow:0 0 0 5px #ebeff3}:host(:hover) input[type=checkbox][disabled]+label{cursor:not-allowed}:host(:hover) input[type=checkbox][disabled]+label:before{-webkit-box-shadow:none;box-shadow:none;border:1px solid #dadfe3}input[type=checkbox]{display:none}input[type=checkbox]+label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;margin-bottom:0;vertical-align:middle;font-size:12px;color:#12344d;font-weight:500}input[type=checkbox]+label .text{padding-left:27px}input[type=checkbox]+label:before{left:0;top:3px;border:1px solid #cfd7df;height:14px;width:14px;background-color:#fff;-webkit-transition:all .2s ease;transition:all .2s ease;border-radius:2px}input[type=checkbox]+label:after,input[type=checkbox]+label:before{position:absolute;display:block;content:\"\";-webkit-box-sizing:border-box;box-sizing:border-box}input[type=checkbox]+label:after{left:4px;top:5px;width:5px;height:7px;-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0;-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out}input[type=checkbox]:checked+label:before{background:#2c5cc5;border-color:#2c5cc5;-webkit-box-shadow:none;box-shadow:none}input[type=checkbox]:checked+label:after{border-right:2px solid #fff;border-bottom:2px solid #fff;opacity:1;top:5px}input[type=checkbox]:checked:hover+label:before{-webkit-box-shadow:0 0 0 5px #ebeff3;box-shadow:0 0 0 5px #ebeff3}input[type=checkbox]:checked:hover+label:after{border-right:2px solid #fff;border-bottom:2px solid #fff;opacity:1;top:5px}input[type=checkbox]:checked:focus+label:before{background:#2c5cc5;border-color:#fff;-webkit-box-shadow:0 0 0 1px #2c5cc5;box-shadow:0 0 0 1px #2c5cc5}input[type=checkbox]:checked:focus+label:after{border-right:2px solid #fff;border-bottom:2px solid #fff;opacity:1;top:5px}input[type=checkbox][disabled]+label,input[type=checkbox][disabled]+label .label-field{color:#92a2b1}input[type=checkbox][disabled]+label:before{border-color:#dadfe3;background-color:#ebeff3}input[type=checkbox][disabled]:checked+label{color:#92a2b1}input[type=checkbox][disabled]:checked+label:before{background:#dadfe3}"; },
        enumerable: true,
        configurable: true
    });
    return Checkbox;
}());
export { Checkbox as fw_checkbox };
