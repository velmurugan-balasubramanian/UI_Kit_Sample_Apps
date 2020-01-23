import { Host, h } from "@stencil/core";
export class Radio {
    constructor() {
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
    }
    componentDidLoad() {
        this.radio.checked = this.checked;
        this.radio.disabled = this.disabled;
    }
    checkChanged(isChecked) {
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
    }
    disabledChanged(isDisabled) {
        this.radio.disabled = isDisabled;
    }
    onFocus() {
        this.fwFocus.emit();
    }
    onBlur() {
        this.fwBlur.emit();
    }
    toggle() {
        if (!this.disabled) {
            this.checked = !this.checked;
        }
    }
    render() {
        return (h(Host, { class: "radio-container", onClick: () => this.toggle(), role: "radio", tabIndex: "0", "aria-disabled": this.disabled ? 'true' : 'false', "aria-checked": `${this.checked}`, onFocus: () => this.onFocus(), onBlur: () => this.onBlur() },
            h("input", { type: "radio", ref: el => this.radio = el }),
            h("label", null,
                h("span", { class: "text" },
                    h("slot", null)),
                h("br", null),
                this.label !== ''
                    ? h("span", { class: "label-field" }, this.label)
                    : '')));
    }
    static get is() { return "fw-radio"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["radio.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["radio.css"]
    }; }
    static get properties() { return {
        "checked": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Property to maintain checked state"
            },
            "attribute": "checked",
            "reflect": false,
            "defaultValue": "false"
        },
        "disabled": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Disables the radio button"
            },
            "attribute": "disabled",
            "reflect": false,
            "defaultValue": "false"
        },
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
                "text": "Label for radio button"
            },
            "attribute": "label",
            "reflect": false,
            "defaultValue": "''"
        },
        "value": {
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
                "text": "Value of the radio button for within a form"
            },
            "attribute": "value",
            "reflect": false,
            "defaultValue": "''"
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
                "text": "Value of the name for within a form"
            },
            "attribute": "name",
            "reflect": false,
            "defaultValue": "''"
        }
    }; }
    static get events() { return [{
            "method": "fwSelect",
            "name": "fwSelect",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the radio button value has changed."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "fwDeselect",
            "name": "fwDeselect",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the radio button value has changed."
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
                "text": "Emitted when the radio button has focus."
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
                "text": "Emitted when the checbox loses focus."
            },
            "complexType": {
                "original": "void",
                "resolved": "void",
                "references": {}
            }
        }]; }
    static get watchers() { return [{
            "propName": "checked",
            "methodName": "checkChanged"
        }, {
            "propName": "disabled",
            "methodName": "disabledChanged"
        }]; }
}
