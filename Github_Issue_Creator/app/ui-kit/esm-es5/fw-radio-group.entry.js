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
import { r as registerInstance, c as createEvent, h, g as getElement, H as Host } from './core-f05d0500.js';
// This is a sample funtion for boilerplate code
/* tslint:enable */
var watchForOptions = function (containerEl, tagName, onChange) {
    var mutation = new MutationObserver(function (mutationList) {
        onChange(getSelectedOption(mutationList, tagName));
    });
    mutation.observe(containerEl, {
        childList: true,
        subtree: true,
    });
    return mutation;
};
var getSelectedOption = function (mutationList, tagName) {
    var newOption;
    mutationList.forEach(function (mut) {
        // tslint:disable-next-line: prefer-for-of
        for (var i = 0; i < mut.addedNodes.length; i++) {
            newOption = findCheckedOption(mut.addedNodes[i], tagName) || newOption;
        }
    });
    return newOption;
};
var findCheckedOption = function (el, tagName) {
    if (el.nodeType !== 1) {
        return undefined;
    }
    var options = (el.tagName === tagName.toUpperCase())
        ? [el]
        : Array.from(el.querySelectorAll(tagName));
    return options.find(function (o) { return o.checked === true; });
};
var RadioGroup = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        /**
         * If `true`, the radios can be deselected.
         */
        this.allowEmpty = false;
        /**
         * The name of the control, which is submitted with the form data.
         */
        this.name = '';
        this.onSelect = function (ev) {
            var selectedRadio = ev.target;
            if (selectedRadio) {
                _this.value = selectedRadio.value;
            }
        };
        this.onDeselect = function (ev) { return __awaiter(_this, void 0, void 0, function () {
            var selectedRadio;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        selectedRadio = ev.target;
                        if (this.allowEmpty && selectedRadio.value === this.value) {
                            this.value = undefined;
                        }
                        return [4 /*yield*/, this.updateRadios()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.fwChange = createEvent(this, "fwChange", 7);
    }
    class_1.prototype.valueChanged = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.updateRadios()];
                    case 1:
                        _a.sent();
                        this.fwChange.emit({ value: value });
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.connectedCallback = function () {
        return __awaiter(this, void 0, void 0, function () {
            var el, radio;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        el = this.el;
                        if (!(this.value === undefined)) return [3 /*break*/, 2];
                        radio = findCheckedOption(el, 'fw-radio');
                        if (!(radio !== undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, radio.componentOnReady()];
                    case 1:
                        _a.sent();
                        if (this.value === undefined) {
                            this.value = radio.value;
                        }
                        _a.label = 2;
                    case 2:
                        this.mutationO = watchForOptions(el, 'fw-radio', function (newOption) { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(newOption !== undefined)) return [3 /*break*/, 1];
                                        newOption.componentOnReady().then(function () {
                                            _this.value = newOption.value;
                                        }).catch();
                                        return [3 /*break*/, 3];
                                    case 1: return [4 /*yield*/, this.updateRadios()];
                                    case 2:
                                        _a.sent();
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [4 /*yield*/, this.updateRadios()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.disconnectedCallback = function () {
        if (this.mutationO) {
            this.mutationO.disconnect();
            this.mutationO = undefined;
        }
    };
    class_1.prototype.updateRadios = function () {
        return __awaiter(this, void 0, void 0, function () {
            var radios, value, hasChecked, _i, radios_1, radio;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRadios()];
                    case 1:
                        radios = _a.sent();
                        value = this.value;
                        hasChecked = false;
                        // Walk the DOM in reverse order, since the last selected one wins!
                        for (_i = 0, radios_1 = radios; _i < radios_1.length; _i++) {
                            radio = radios_1[_i];
                            if (!hasChecked && radio.value === value) {
                                // correct value for this radio
                                // but this radio isn't checked yet
                                // and we haven't found a checked yet
                                hasChecked = true;
                                radio.checked = true;
                            }
                            else {
                                // this radio doesn't have the correct value
                                // or the radio group has been already checked
                                radio.checked = false;
                            }
                        }
                        // Reset value if
                        if (!hasChecked) {
                            this.value = undefined;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.getRadios = function () {
        return Promise.all(Array
            .from(this.el.querySelectorAll('fw-radio'))
            .map(function (r) { return r.componentOnReady(); }));
    };
    class_1.prototype.render = function () {
        return (h(Host, { role: "radiogroup", onFwSelect: this.onSelect, onFwDeselect: this.onDeselect }));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "value": ["valueChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { RadioGroup as fw_radio_group };
