import { h } from "@stencil/core";
export class SelectOption {
    constructor() {
        /**
         * Flag to indicate if the option is selected or not. A tick is shown
         */
        this.selected = false;
    }
    onOptionSelected() {
        this.selected = !this.selected;
        const { value, selected } = this;
        this.fwSelected.emit({ value, selected });
    }
    render() {
        return (h("li", { class: { 'select-option': true, 'selected': this.selected }, onMouseDown: () => this.onOptionSelected() },
            h("slot", null)));
    }
    static get is() { return "fw-select-option"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["select-option.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["select-option.css"]
    }; }
    static get properties() { return {
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
                "text": "The Key associated with this select option"
            },
            "attribute": "value",
            "reflect": true
        },
        "selected": {
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
                "text": "Flag to indicate if the option is selected or not. A tick is shown"
            },
            "attribute": "selected",
            "reflect": true,
            "defaultValue": "false"
        }
    }; }
    static get events() { return [{
            "method": "fwSelected",
            "name": "fwSelected",
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
        }]; }
}
