import { r as registerInstance, c as createEvent, h, g as getElement } from './core-f05d0500.js';
var SelectOption = /** @class */ (function () {
    function SelectOption(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Flag to indicate if the option is selected or not. A tick is shown
         */
        this.selected = false;
        this.fwSelected = createEvent(this, "fwSelected", 7);
    }
    SelectOption.prototype.onOptionSelected = function () {
        this.selected = !this.selected;
        var _a = this, value = _a.value, selected = _a.selected;
        this.fwSelected.emit({ value: value, selected: selected });
    };
    SelectOption.prototype.render = function () {
        var _this = this;
        return (h("li", { class: { 'select-option': true, 'selected': this.selected }, onMouseDown: function () { return _this.onOptionSelected(); } }, h("slot", null)));
    };
    Object.defineProperty(SelectOption, "style", {
        get: function () { return ":host{--color-milk:#fff;--color-elephant-900:#12344d;--color-elephant-800:#264966;--color-elephant-700:#345c7c;--color-elephant-600:#447093;--color-smoke-700:#475867;--color-smoke-300:#92a2b1;--color-smoke-100:#cfd7df;--color-smoke-50:#ebeff3;--color-smoke-25:#f3f5f7;--color-jungle-800:#00795b;--color-jungle-500:#00a886;--color-jungle-100:#b4e5da;--color-jungle-50:#e0f5f1;--color-azure-800:#2c5cc5;--color-azure-100:#bbdcfe;--color-azure-50:#e5f2fd;--color-persimmon-900:#c82124;--color-persimmon-800:#d72d30;--color-persimmon-100:#ffd0d6;--color-persimmon-50:#ffecf0;--color-casablanca-700:#e86f25;--color-casablanca-100:#fedcb3;--color-casablanca-50:#fef1e1;--border-color:var(--color-smoke-100);--border-success-color:var(--color-jungle-100);--border-info-color:var(--color-azure-100);--border-danger-color:var(--color-persimmon-100);--border-warning-color:var(--color-casablanca-100);--bg-dark:var(--color-elephant-900);--bg-success:var(--color-jungle-50);--bg-info:var(--color-azure-50);--bg-danger:var(--color-persimmon-50);--bg-warning:var(--color-casablanca-50);--radius:4px;--radius-small:2px;--font-stack:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif;--font-weight-400:400;--font-weight-300:300;--font-weight-500:500;--font-weight-600:600;--font-weight-700:700;--font-size-10:10px;--font-size-12:12px;--font-size-14:14px;--font-size-16:16px;--font-size-18:18px;--font-size-20:20px;--font-size-24:24px;--text-default:var(--color-elephant-900);--text-secondary:var(--color-smoke-700);--text-disabled:var(--color-smoke-300);--text-success:var(--color-jungle-800);--text-info:var(--color-azure-800);--text-danger:var(--color-persimmon-800);--text-warning:var(--color-casablanca-700);--text-link:var(--color-azure-800);--icon-primary:var(--color-smoke-700);--icon-primary-hover:var(--color-smoke-100);font-family:var(--font-stack);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box;--primary-color:var(--color-elephant-900);--selected-color:var(--color-azure-800);--bg-color:var(--color-azure-50);--bg-color-hover:var(--color-smoke-50)}.select-option{cursor:pointer;color:var(--primary-color);padding:7px 30px 7px 8px;font-size:var(--font-size-14);border-radius:2px;list-style:none;line-height:1.3;margin:5px 0;word-break:break-word;word-wrap:break-word;position:relative}.select-option.selected{color:var(--selected-color);position:relative;font-weight:var(--font-weight-500);background-color:var(--bg-color)}.select-option:hover{background-color:var(--bg-color-hover)}.select-option:after{display:block;font-style:normal;font-weight:var(--font-weight-400);font-variant:normal;line-height:1;text-decoration:inherit;text-transform:none;position:absolute;right:10px;top:8px}.select-option.selected:after{content:url(\"data:image/svg+xml,%3C%3Fxml version=\'1.0\' encoding=\'UTF-8\'%3F%3E%3Csvg width=\'12px\' height=\'9px\' viewBox=\'0 0 12 9\' version=\'1.1\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\'%3E%3C!-- Generator: Sketch 52.4 (67378) - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3ECheck%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3Cpath d=\'M4.17095654,7.28764233 C3.74936256,6.89579049 3.08481084,6.91447629 2.68663874,7.32937825 C2.28846663,7.7442802 2.30745383,8.39828338 2.72904782,8.79013522 L5.87904631,11.7179111 C6.3006403,12.109763 6.96519201,12.0910772 7.36336412,11.6761752 L13.3133613,5.47617918 C13.7115334,5.06127722 13.6925462,4.40727405 13.2709522,4.0154222 C12.8493582,3.62357036 12.1848065,3.64225616 11.7866344,4.05715812 L6.55759159,9.50590771 L4.17095654,7.28764233 Z\' id=\'path-1\'%3E%3C/path%3E%3C/defs%3E%3Cg id=\'TD-with-Freddy-4-Email\' stroke=\'none\' stroke-width=\'1\' fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg id=\'ticket-detail--open-copy-2\' transform=\'translate(-1054.000000, -997.000000)\'%3E%3Cg id=\'Group-92\' transform=\'translate(880.000000, 828.000000)\'%3E%3Cg id=\'Group-26\'%3E%3Cg id=\'Group-7\' transform=\'translate(0.000000, 54.000000)\'%3E%3Cg id=\'Group-2\' transform=\'translate(16.000000, 104.000000)\'%3E%3Cg id=\'Icon/new/Check\' transform=\'translate(156.000000, 8.000000)\'%3E%3Cmask id=\'mask-2\' fill=\'white\'%3E%3Cuse xlink:href=\'%23path-1\'%3E%3C/use%3E%3C/mask%3E%3Cuse id=\'save\' fill=\'%23000000\' fill-rule=\'nonzero\' xlink:href=\'%23path-1\'%3E%3C/use%3E%3Cg id=\'Color/Blue-(Hype)\' mask=\'url(%23mask-2)\' fill=\'%232C5CC5\' fill-rule=\'evenodd\'%3E%3Crect id=\'Color---Jade\' x=\'0\' y=\'0\' width=\'15.8024691\' height=\'15.8024691\'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")}"; },
        enumerable: true,
        configurable: true
    });
    return SelectOption;
}());
var Tag = /** @class */ (function () {
    function Tag(hostRef) {
        registerInstance(this, hostRef);
        this.fwClosed = createEvent(this, "fwClosed", 7);
    }
    Tag.prototype.removeTag = function () {
        var _a = this, value = _a.value, text = _a.text;
        this.fwClosed.emit({ value: value, text: text });
    };
    Tag.prototype.render = function () {
        var _this = this;
        return (h("div", { class: "tag" }, this.text, h("span", { role: "button", class: "remove-btn", onClick: function () { return _this.removeTag(); } }, "\u00D7")));
    };
    Object.defineProperty(Tag.prototype, "host", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tag, "style", {
        get: function () { return ":host{--color-milk:#fff;--color-elephant-900:#12344d;--color-elephant-800:#264966;--color-elephant-700:#345c7c;--color-elephant-600:#447093;--color-smoke-700:#475867;--color-smoke-300:#92a2b1;--color-smoke-100:#cfd7df;--color-smoke-50:#ebeff3;--color-smoke-25:#f3f5f7;--color-jungle-800:#00795b;--color-jungle-500:#00a886;--color-jungle-100:#b4e5da;--color-jungle-50:#e0f5f1;--color-azure-800:#2c5cc5;--color-azure-100:#bbdcfe;--color-azure-50:#e5f2fd;--color-persimmon-900:#c82124;--color-persimmon-800:#d72d30;--color-persimmon-100:#ffd0d6;--color-persimmon-50:#ffecf0;--color-casablanca-700:#e86f25;--color-casablanca-100:#fedcb3;--color-casablanca-50:#fef1e1;--border-color:var(--color-smoke-100);--border-success-color:var(--color-jungle-100);--border-info-color:var(--color-azure-100);--border-danger-color:var(--color-persimmon-100);--border-warning-color:var(--color-casablanca-100);--bg-dark:var(--color-elephant-900);--bg-success:var(--color-jungle-50);--bg-info:var(--color-azure-50);--bg-danger:var(--color-persimmon-50);--bg-warning:var(--color-casablanca-50);--radius:4px;--radius-small:2px;--font-stack:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif;--font-weight-400:400;--font-weight-300:300;--font-weight-500:500;--font-weight-600:600;--font-weight-700:700;--font-size-10:10px;--font-size-12:12px;--font-size-14:14px;--font-size-16:16px;--font-size-18:18px;--font-size-20:20px;--font-size-24:24px;--text-default:var(--color-elephant-900);--text-secondary:var(--color-smoke-700);--text-disabled:var(--color-smoke-300);--text-success:var(--color-jungle-800);--text-info:var(--color-azure-800);--text-danger:var(--color-persimmon-800);--text-warning:var(--color-casablanca-700);--text-link:var(--color-azure-800);--icon-primary:var(--color-smoke-700);--icon-primary-hover:var(--color-smoke-100);font-family:var(--font-stack);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.tag{line-height:1.4;border-radius:4px;background-color:var(--color-smoke-50);border:none;font-size:var(--font-size-12);color:var(--color-elephant-900);margin:2px;display:inline-block;width:auto;font-weight:500;word-break:break-all;padding:3px 0 4px 8px}.tag .remove-btn{opacity:1;color:var(--color-elephant-800);padding:3px 8px 5px;font-size:var(--font-size-16);border-radius:4px;line-height:normal;position:relative;right:0;margin-left:4px;height:100%}.tag .remove-btn:hover{background-color:var(--color-smoke-100);cursor:pointer}"; },
        enumerable: true,
        configurable: true
    });
    return Tag;
}());
export { SelectOption as fw_select_option, Tag as fw_tag };
