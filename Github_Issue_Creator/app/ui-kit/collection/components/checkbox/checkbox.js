import { Host, h } from "@stencil/core";
export class Checkbox {
    constructor() {
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
    }
    componentDidLoad() {
        this.checkbox.checked = this.checked;
        this.checkbox.disabled = this.disabled;
    }
    checkChanged(isChecked) {
        if (!this.disabled) {
            this.checkbox.checked = isChecked;
            this.fwChange.emit({
                value: this.value,
                checked: isChecked,
            });
        }
    }
    disabledChanged(isDisabled) {
        this.checkbox.disabled = isDisabled;
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
        return (h(Host, { class: "checkbox-container", onClick: () => this.toggle(), role: "checkbox", tabIndex: "0", "aria-disabled": this.disabled ? 'true' : 'false', "aria-checked": `${this.checked}`, onFocus: () => this.onFocus(), onBlur: () => this.onBlur() },
            h("input", { type: "checkbox", ref: el => this.checkbox = el }),
            h("label", null,
                h("span", { class: "text" },
                    h("slot", null)),
                h("br", null),
                this.label !== ''
                    ? h("span", { class: "label-field" }, this.label)
                    : '')));
    }
    static get is() { return "fw-checkbox"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["checkbox.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["checkbox.css"]
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
                "text": "Disables the checkbox"
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
                "text": "Label for checkbox"
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
                "text": "Value of the checkbox for within a form"
            },
            "attribute": "value",
            "reflect": false,
            "defaultValue": "''"
        }
    }; }
    static get events() { return [{
            "method": "fwChange",
            "name": "fwChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the checkbox value has changed."
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
                "text": "Emitted when the checkbox has focus."
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
