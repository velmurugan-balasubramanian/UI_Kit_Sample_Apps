import { r as registerInstance, h } from './core-f05d0500.js';
var Spinner = /** @class */ (function () {
    function Spinner(hostRef) {
        registerInstance(this, hostRef);
        /**
         * The size of the spinner - Options ['small' , 'default', 'medium', 'large']
         */
        this.size = 'default';
        /**
         * The color of the spinner
         */
        this.color = '';
        this.sizeMap = {
            small: 12,
            default: 16,
            medium: 24,
            large: 32,
        };
    }
    Spinner.prototype.getSize = function () {
        return this.sizeMap[this.size] || 16;
    };
    Spinner.prototype.render = function () {
        var diameter = this.getSize();
        return h("svg", { class: "spinner " + this.size, style: {
                'width': diameter + "px",
                'height': diameter + "px",
                '--spinner-color': "" + this.color,
            }, viewBox: "0 0 50 50" }, h("circle", { class: "path", cx: "25", cy: "25", r: "20", fill: "none", "stroke-width": "5" }));
    };
    Object.defineProperty(Spinner, "style", {
        get: function () { return ":host{--color-milk:#fff;--color-elephant-900:#12344d;--color-elephant-800:#264966;--color-elephant-700:#345c7c;--color-elephant-600:#447093;--color-smoke-700:#475867;--color-smoke-300:#92a2b1;--color-smoke-100:#cfd7df;--color-smoke-50:#ebeff3;--color-smoke-25:#f3f5f7;--color-jungle-800:#00795b;--color-jungle-500:#00a886;--color-jungle-100:#b4e5da;--color-jungle-50:#e0f5f1;--color-azure-800:#2c5cc5;--color-azure-100:#bbdcfe;--color-azure-50:#e5f2fd;--color-persimmon-900:#c82124;--color-persimmon-800:#d72d30;--color-persimmon-100:#ffd0d6;--color-persimmon-50:#ffecf0;--color-casablanca-700:#e86f25;--color-casablanca-100:#fedcb3;--color-casablanca-50:#fef1e1;--border-color:var(--color-smoke-100);--border-success-color:var(--color-jungle-100);--border-info-color:var(--color-azure-100);--border-danger-color:var(--color-persimmon-100);--border-warning-color:var(--color-casablanca-100);--bg-dark:var(--color-elephant-900);--bg-success:var(--color-jungle-50);--bg-info:var(--color-azure-50);--bg-danger:var(--color-persimmon-50);--bg-warning:var(--color-casablanca-50);--radius:4px;--radius-small:2px;--font-stack:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif;--font-weight-400:400;--font-weight-300:300;--font-weight-500:500;--font-weight-600:600;--font-weight-700:700;--font-size-10:10px;--font-size-12:12px;--font-size-14:14px;--font-size-16:16px;--font-size-18:18px;--font-size-20:20px;--font-size-24:24px;--text-default:var(--color-elephant-900);--text-secondary:var(--color-smoke-700);--text-disabled:var(--color-smoke-300);--text-success:var(--color-jungle-800);--text-info:var(--color-azure-800);--text-danger:var(--color-persimmon-800);--text-warning:var(--color-casablanca-700);--text-link:var(--color-azure-800);--icon-primary:var(--color-smoke-700);--icon-primary-hover:var(--color-smoke-100);font-family:var(--font-stack);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.spinner{-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;z-index:2}.spinner .path{stroke:var(--spinner-color,var(--color-azure-800));stroke-linecap:round;-webkit-animation:dash 1s ease-in-out infinite;animation:dash 1s ease-in-out infinite}\@-webkit-keyframes rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\@keyframes rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\@-webkit-keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}to{stroke-dasharray:90,150;stroke-dashoffset:-124}}\@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}to{stroke-dasharray:90,150;stroke-dashoffset:-124}}"; },
        enumerable: true,
        configurable: true
    });
    return Spinner;
}());
export { Spinner as fw_spinner };
