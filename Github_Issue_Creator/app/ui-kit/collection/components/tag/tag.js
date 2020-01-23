import { h } from "@stencil/core";
export class Tag {
    removeTag() {
        const { value, text } = this;
        this.fwClosed.emit({ value, text });
    }
    render() {
        return (h("div", { class: "tag" },
            this.text,
            h("span", { role: "button", class: "remove-btn", onClick: () => this.removeTag() }, "\u00D7")));
    }
    static get is() { return "fw-tag"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["tag.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["tag.css"]
    }; }
    static get properties() { return {
        "text": {
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
                "text": "The display text for the tag"
            },
            "attribute": "text",
            "reflect": true
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
                "text": "The value of the tag"
            },
            "attribute": "value",
            "reflect": true
        }
    }; }
    static get events() { return [{
            "method": "fwClosed",
            "name": "fwClosed",
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
    static get elementRef() { return "host"; }
}
