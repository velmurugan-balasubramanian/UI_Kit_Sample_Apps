export class Tab {
    static get is() { return "fw-tab"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["tab.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["tab.css"]
    }; }
    static get properties() { return {
        "title": {
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
                "text": "The Title"
            },
            "attribute": "title",
            "reflect": false
        },
        "message": {
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
                "text": "The Message"
            },
            "attribute": "message",
            "reflect": false
        }
    }; }
}
