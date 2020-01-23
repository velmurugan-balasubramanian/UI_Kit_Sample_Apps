import { Host, h } from "@stencil/core";
export class Textarea {
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
            h("div", { class: "textarea-container" },
                this.label !== '' ? h("label", { class: {
                        'required': this.required,
                    } }, this.label) : '',
                h("div", { class: {
                        'textarea-container-inner': true,
                        [this.state]: true,
                    } },
                    h("textarea", { ref: input => this.nativeInput = input, disabled: this.disabled, name: this.name, placeholder: this.placeholder || '', minLength: this.minlength, maxLength: this.maxlength, readOnly: this.readonly, required: this.required, value: value, onInput: e => this.onInput(e), onBlur: this.onBlur, onFocus: this.onFocus, rows: this.rows, cols: this.cols, wrap: this.wrap })),
                this.stateText !== '' ?
                    h("span", { class: "help-block" }, this.stateText) : '')));
    }
    static get is() { return "fw-textarea"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["textarea.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["textarea.css"]
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
        "cols": {
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
                "text": "Number of columns"
            },
            "attribute": "cols",
            "reflect": false
        },
        "rows": {
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
                "text": "Number of rows"
            },
            "attribute": "rows",
            "reflect": false
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
        "wrap": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'soft' | 'hard'",
                "resolved": "\"hard\" | \"soft\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "How the text in the textarea is to be wrapped"
            },
            "attribute": "wrap",
            "reflect": false,
            "defaultValue": "'soft'"
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
