import { h } from "@stencil/core";
export class Toggle {
    constructor() {
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
    }
    watchHandler(newValue) {
        this.fwChange.emit({ state: newValue });
    }
    toggle() {
        this.state = !this.state;
        this.fwChange.emit({ state: this.state });
    }
    render() {
        return (h("div", { class: {
                'toggle-switch': true,
                [this.size]: true,
            }, onClick: () => this.toggle() },
            h("input", { name: this.name, type: "checkbox", disabled: this.disabled, checked: this.state, class: "checkboxClass" }),
            h("span", { class: {
                    'slider': true,
                    [this.size]: true,
                } })));
    }
    static get is() { return "fw-toggle"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["toggle.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["toggle.css"]
    }; }
    static get properties() { return {
        "state": {
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
                "text": ""
            },
            "attribute": "state",
            "reflect": false,
            "defaultValue": "false"
        },
        "size": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'small' | 'medium' | 'large'",
                "resolved": "\"large\" | \"medium\" | \"small\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The type of control to display. The default type is text."
            },
            "attribute": "size",
            "reflect": false,
            "defaultValue": "'medium'"
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
                "text": "Is it disabled"
            },
            "attribute": "disabled",
            "reflect": false,
            "defaultValue": "false"
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
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get watchers() { return [{
            "propName": "state",
            "methodName": "watchHandler"
        }]; }
}
