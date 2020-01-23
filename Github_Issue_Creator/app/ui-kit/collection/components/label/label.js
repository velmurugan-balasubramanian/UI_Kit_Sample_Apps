import { h } from "@stencil/core";
export class Label {
    constructor() {
        /**
         * The type of the label
         */
        this.color = 'normal';
        /**
         * The text in the label
         */
        this.value = '';
    }
    render() {
        return h("span", { class: 'label label--' + this.color.toLowerCase() }, this.value);
    }
    static get is() { return "fw-label"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["label.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["label.css"]
    }; }
    static get properties() { return {
        "color": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'blue' | 'red' | 'green' | 'yellow' | 'grey' | 'normal'",
                "resolved": "\"blue\" | \"green\" | \"grey\" | \"normal\" | \"red\" | \"yellow\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The type of the label"
            },
            "attribute": "color",
            "reflect": false,
            "defaultValue": "'normal'"
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
                "text": "The text in the label"
            },
            "attribute": "value",
            "reflect": false,
            "defaultValue": "''"
        }
    }; }
}
