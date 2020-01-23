import { r as registerInstance, c as createEvent, h } from './core-f05d0500.js';
var Toggle = /** @class */ (function () {
    function Toggle(hostRef) {
        registerInstance(this, hostRef);
        this.state = false;
        /**
         * The type of control to display. The default type is text.
         */
        this.size = 'medium';
        /**
         * The name of the control, which is submitted with the form data.
         */
        this.name = '';
        /**
         * Is it disabled
         */
        this.disabled = false;
        this.fwChange = createEvent(this, "fwChange", 7);
    }
    Toggle.prototype.watchHandler = function (newValue) {
        this.fwChange.emit({ state: newValue });
    };
    Toggle.prototype.toggle = function () {
        this.state = !this.state;
        this.fwChange.emit({ state: this.state });
    };
    Toggle.prototype.render = function () {
        var _a, _b;
        var _this = this;
        return (h("div", { class: (_a = {
                    'toggle-switch': true
                },
                _a[this.size] = true,
                _a), onClick: function () { return _this.toggle(); } }, h("input", { name: this.name, type: "checkbox", disabled: this.disabled, checked: this.state, class: "checkboxClass" }), h("span", { class: (_b = {
                    'slider': true
                },
                _b[this.size] = true,
                _b) })));
    };
    Object.defineProperty(Toggle, "watchers", {
        get: function () {
            return {
                "state": ["watchHandler"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toggle, "style", {
        get: function () { return ":host{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}*,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box}.toggle-switch{position:relative;display:inline-block}.toggle-switch.small{width:28px;height:12px}.toggle-switch.medium{width:36px;height:16px}.toggle-switch.large{width:44px;height:20px}.toggle-switch .slider{cursor:pointer;top:0;left:0;right:0;bottom:0;border-radius:34px;background:#acb6be}.toggle-switch .slider,.toggle-switch .slider:before{position:absolute;-webkit-transition:.2s;transition:.2s}.toggle-switch .slider:before{content:\"\";width:45%;height:65%;left:4px;bottom:3px;border-radius:50%;-webkit-box-shadow:0 1px 1px 0 rgba(0,0,0,.23);box-shadow:0 1px 1px 0 rgba(0,0,0,.23);background-color:#fff}.toggle-switch .slider.small{width:28px;height:12px}.toggle-switch .slider.small:before{width:16px;height:16px;left:0;bottom:-2px;border:1px solid #647a8e}.toggle-switch .slider.small:hover:before{-webkit-box-shadow:0 0 4px 4px rgba(87,108,125,.3);box-shadow:0 0 4px 4px rgba(87,108,125,.3)}.toggle-switch .slider.medium{width:36px;height:16px}.toggle-switch .slider.medium:before{width:20px;height:20px;left:0;bottom:-2px;border:1px solid #647a8e}.toggle-switch .slider.medium:hover:before{-webkit-box-shadow:0 0 4px 4px rgba(87,108,125,.3);box-shadow:0 0 4px 4px rgba(87,108,125,.3)}.toggle-switch .slider.large{width:44px;height:20px}.toggle-switch .slider.large:before{width:24px;height:24px;left:0;bottom:-2px;border:1px solid #647a8e}.toggle-switch .slider.large:hover:before{-webkit-box-shadow:0 0 5px 5px rgba(87,108,125,.3);box-shadow:0 0 5px 5px rgba(87,108,125,.3)}.toggle-switch input{display:none}.toggle-switch input:checked+.slider{background-color:#2c5cc5}.toggle-switch input:checked+.slider.small:before{-webkit-transform:translateX(12px);transform:translateX(12px);border:1px solid #2c5cc5}.toggle-switch input:checked+.slider.small:hover:before{-webkit-box-shadow:0 0 3px 3px rgba(40,61,165,.3);box-shadow:0 0 3px 3px rgba(40,61,165,.3)}.toggle-switch input:checked+.slider.medium:before{-webkit-transform:translateX(16px);transform:translateX(16px);border:1px solid #2c5cc5}.toggle-switch input:checked+.slider.medium:hover:before{-webkit-box-shadow:0 0 4px 4px rgba(40,61,165,.3);box-shadow:0 0 4px 4px rgba(40,61,165,.3)}.toggle-switch input:checked+.slider.large:before{-webkit-transform:translateX(20px);transform:translateX(20px);border:1px solid #2c5cc5}.toggle-switch input:checked+.slider.large:hover:before{-webkit-box-shadow:0 0 5px 5px rgba(40,61,165,.3);box-shadow:0 0 5px 5px rgba(40,61,165,.3)}.toggle-switch input:disabled+.slider{opacity:.4;cursor:not-allowed}"; },
        enumerable: true,
        configurable: true
    });
    return Toggle;
}());
export { Toggle as fw_toggle };
