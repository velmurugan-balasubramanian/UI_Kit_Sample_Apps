import { r as registerInstance, c as createEvent, h, H as Host } from './core-f05d0500.js';
var Radio = /** @class */ (function () {
    function Radio(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Property to maintain checked state
         */
        this.checked = false;
        /**
         * Disables the radio button
         */
        this.disabled = false;
        /**
         * Label for radio button
         */
        this.label = '';
        /**
         * Value of the radio button for within a form
         */
        this.value = '';
        /**
         * Value of the name for within a form
         */
        this.name = '';
        this.fwSelect = createEvent(this, "fwSelect", 7);
        this.fwDeselect = createEvent(this, "fwDeselect", 7);
        this.fwFocus = createEvent(this, "fwFocus", 7);
        this.fwBlur = createEvent(this, "fwBlur", 7);
    }
    Radio.prototype.componentDidLoad = function () {
        this.radio.checked = this.checked;
        this.radio.disabled = this.disabled;
    };
    Radio.prototype.checkChanged = function (isChecked) {
        if (!this.disabled) {
            this.radio.checked = isChecked;
            if (isChecked) {
                this.fwSelect.emit({
                    value: this.value,
                    checked: true,
                });
            }
            else {
                this.fwDeselect.emit();
            }
        }
    };
    Radio.prototype.disabledChanged = function (isDisabled) {
        this.radio.disabled = isDisabled;
    };
    Radio.prototype.onFocus = function () {
        this.fwFocus.emit();
    };
    Radio.prototype.onBlur = function () {
        this.fwBlur.emit();
    };
    Radio.prototype.toggle = function () {
        if (!this.disabled) {
            this.checked = !this.checked;
        }
    };
    Radio.prototype.render = function () {
        var _this = this;
        return (h(Host, { class: "radio-container", onClick: function () { return _this.toggle(); }, role: "radio", tabIndex: "0", "aria-disabled": this.disabled ? 'true' : 'false', "aria-checked": "" + this.checked, onFocus: function () { return _this.onFocus(); }, onBlur: function () { return _this.onBlur(); } }, h("input", { type: "radio", ref: function (el) { return _this.radio = el; } }), h("label", null, h("span", { class: "text" }, h("slot", null)), h("br", null), this.label !== ''
            ? h("span", { class: "label-field" }, this.label)
            : '')));
    };
    Object.defineProperty(Radio, "watchers", {
        get: function () {
            return {
                "checked": ["checkChanged"],
                "disabled": ["disabledChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Radio, "style", {
        get: function () { return ":host{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}:host(.radio-container){display:inline;position:relative}:host(:focus){outline:none}:host(:focus) input[type=radio]+label:before{border:1px solid transparent;-webkit-box-shadow:0 0 0 2px #2c5cc5;box-shadow:0 0 0 2px #2c5cc5;border-color:#081824}:host(:focus) input[type=radio][disabled]+label:before{-webkit-box-shadow:none;box-shadow:none;border:1px solid #dadfe3}.label-field{font-size:12px;color:#475867;letter-spacing:0;line-height:20px;position:relative;padding-left:28px;font-weight:400}:host(:hover) input[type=radio]+label:before{-webkit-box-shadow:0 0 0 5px #ebeff3;box-shadow:0 0 0 5px #ebeff3;border-color:#081824}:host(:hover) input[type=radio][disabled]+label{cursor:not-allowed}:host(:hover) input[type=radio][disabled]+label:before{-webkit-box-shadow:none;box-shadow:none;border:1px solid #dadfe3}input[type=radio]{display:none}input[type=radio]+label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;max-width:auto;margin-bottom:0;vertical-align:middle;font-size:12px;color:#12344d;font-weight:500}input[type=radio]+label .text{padding-left:27px}input[type=radio]+label:after,input[type=radio]+label:before{content:\"\";display:block;position:absolute;top:0;-webkit-box-sizing:border-box;box-sizing:border-box}input[type=radio]+label:before{left:0;border:1px solid #cfd7df;border-radius:50px;top:4px;width:14px;height:14px;background:#fff;-webkit-transition:all .3s ease;transition:all .3s ease}input[type=radio]+label:after{left:3px;border-radius:100%;width:8px;height:8px;opacity:0;-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out;-webkit-box-sizing:border-box;box-sizing:border-box}input[type=radio]:checked+label:before{background:#fff;border-color:#2c5cc5;-webkit-box-shadow:none;box-shadow:none}input[type=radio]:checked+label:after{border-radius:50%;background-color:#2c5cc5;opacity:1;top:7px}input[type=radio]:checked:focus+label:before{border-color:#3868d3;-webkit-box-shadow:0 0 4px 1px rgba(44,92,197,.6);box-shadow:0 0 4px 1px rgba(44,92,197,.6)}input[type=radio]:checked:focus+label:after{background-color:#3868d3}input[type=radio][disabled]+label,input[type=radio][disabled]+label .label-field{color:#92a2b1}input[type=radio][disabled]+label:before{border-color:#dadfe3;background-color:#ebeff3}input[type=radio][disabled]+label:after{border-color:#ebeff3;background-color:#dadfe3}input[type=radio][disabled]:checked+label{color:#92a2b1}"; },
        enumerable: true,
        configurable: true
    });
    return Radio;
}());
export { Radio as fw_radio };
