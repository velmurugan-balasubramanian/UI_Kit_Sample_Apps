import { Host, h } from "@stencil/core";
export class Input {
    constructor() {
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
            } },
            h("div", { class: "input-container" },
                this.label !== '' ? h("label", { class: {
                        'required': this.required,
                    } }, this.label) : '',
                h("div", { class: {
                        'input-container-inner': true,
                        [this.state]: true,
                        'left-icon': this.iconLeft !== undefined,
                        'right-icon': this.iconRight !== undefined,
                    } },
                    h("input", { ref: input => this.nativeInput = input, autoComplete: this.autocomplete, disabled: this.disabled, name: this.name, placeholder: this.placeholder || '', minLength: this.minlength, maxLength: this.maxlength, readOnly: this.readonly, required: this.required, type: this.type, value: value, onInput: e => this.onInput(e), onBlur: this.onBlur, onFocus: this.onFocus }),
                    this.iconLeft !== undefined ? h("fw-icon", { class: "icon left", name: this.iconLeft }) : '',
                    this.iconRight !== undefined ? h("fw-icon", { class: "icon right", name: this.iconRight }) : '',
                    this.clearInput && this.value.length > 0 ?
                        h("div", { class: "clear-button", onClick: e => this.clearTextInput(e) },
                            h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 32 32", class: "clear-button-img" },
                                h("path", { d: "M17.992 16l8.796-8.796a1.409 1.409 0 0 0-1.992-1.992L16 14.008 7.204 5.212a1.409 1.409 0 0 0-1.992 1.992L14.008 16l-8.796 8.796a1.409 1.409 0 0 0 1.992 1.992L16 17.992l8.796 8.796a1.409 1.409 0 0 0 1.992-1.992L17.992 16z" }))) : ''),
                this.stateText !== '' ?
                    h("span", { class: "help-block" }, this.stateText) : '')));
    }
    static get is() { return "fw-input"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["input.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["input.css"]
    }; }
    static get properties() { return {
        "label": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The type of control to display. The default type is text."
            },
            "attribute": "label",
            "reflect": false,
            "defaultValue": "''"
        },
        "value": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "string | null",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "The value of the input."
            },
            "attribute": "value",
            "reflect": false,
            "defaultValue": "''"
        },
        "type": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'text'",
                "resolved": "\"text\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The type of control to display. The default type is text."
            },
            "attribute": "type",
            "reflect": false,
            "defaultValue": "'text'"
        },
        "autocomplete": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'on' | 'off'",
                "resolved": "\"off\" | \"on\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Indicates whether the value of the control can be automatically completed by the browser."
            },
            "attribute": "autocomplete",
            "reflect": false,
            "defaultValue": "'off'"
        },
        "clearInput": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input."
            },
            "attribute": "clear-input",
            "reflect": false,
            "defaultValue": "false"
        },
        "maxlength": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Max length of value"
            },
            "attribute": "maxlength",
            "reflect": false
        },
        "minlength": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Min length of value"
            },
            "attribute": "minlength",
            "reflect": false
        },
        "name": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The name of the control, which is submitted with the form data."
            },
            "attribute": "name",
            "reflect": false,
            "defaultValue": "''"
        },
        "placeholder": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string | null",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Instructional text that shows before the input has a value."
            },
            "attribute": "placeholder",
            "reflect": false
        },
        "state": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'normal' | 'warning' | 'error'",
                "resolved": "\"error\" | \"normal\" | \"warning\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The state of the control. Color changes accordingly"
            },
            "attribute": "state",
            "reflect": false,
            "defaultValue": "'normal'"
        },
        "stateText": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "This text will be displayed below the input box indicating the state/hint"
            },
            "attribute": "state-text",
            "reflect": false,
            "defaultValue": "''"
        },
        "readonly": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "If `true`, the user cannot modify the value."
            },
            "attribute": "readonly",
            "reflect": false,
            "defaultValue": "false"
        },
        "required": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "If `true`, the user must fill in a value before submitting a form."
            },
            "attribute": "required",
            "reflect": false,
            "defaultValue": "false"
        },
        "disabled": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Indicates that this control is disabled"
            },
            "attribute": "disabled",
            "reflect": false,
            "defaultValue": "false"
        },
        "iconLeft": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Name of the icon for left side"
            },
            "attribute": "icon-left",
            "reflect": false,
            "defaultValue": "undefined"
        },
        "iconRight": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Name of the icon for right side"
            },
            "attribute": "icon-right",
            "reflect": false,
            "defaultValue": "undefined"
        }
    }; }
    static get states() { return {
        "hasFocus": {}
    }; }
    static get events() { return [{
            "method": "fwChange",
            "name": "fwChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "fwFocus",
            "name": "fwFocus",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "void",
                "resolved": "void",
                "references": {}
            }
        }, {
            "method": "fwBlur",
            "name": "fwBlur",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "void",
                "resolved": "void",
                "references": {}
            }
        }, {
            "method": "fwInput",
            "name": "fwInput",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "KeyboardEvent",
                "resolved": "KeyboardEvent",
                "references": {
                    "KeyboardEvent": {
                        "location": "global"
                    }
                }
            }
        }]; }
    static get methods() { return {
        "setFocus": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "Sets focus on the specified `fw-input`. Use this method instead of the global\n`input.focus()`.",
                "tags": []
            }
        }
    }; }
    static get watchers() { return [{
            "propName": "value",
            "methodName": "watchHandler"
        }]; }
}
