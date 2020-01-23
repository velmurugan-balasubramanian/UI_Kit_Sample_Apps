import { getAssetPath, h } from "@stencil/core";
export class Icon {
    constructor() {
        /**
         * The size of the icon in pixels
         */
        this.size = 12;
        /**
         * The color of the icon in CSS standard color
         */
        this.color = '';
        this.svgHTML = '';
    }
    async getSVGHTML(iconName) {
        const response = await fetch(getAssetPath(`assets/icons/${iconName}.svg`));
        const data = await response.text();
        return data;
    }
    setSVGState(iconName) {
        this.getSVGHTML(iconName).then(res => {
            this.svgHTML = res;
        }).catch();
    }
    componentWillLoad() {
        this.setSVGState(this.name);
    }
    render() {
        return (h("div", { class: "icon", style: {
                '--icon-color': `${this.color}`,
                'height': `${this.size}px`,
                'width': `${this.size}px`,
            }, innerHTML: this.svgHTML }));
    }
    static get is() { return "fw-icon"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["icon.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["icon.css"]
    }; }
    static get assetsDirs() { return ["assets"]; }
    static get properties() { return {
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
                "text": "The name of the icon"
            },
            "attribute": "name",
            "reflect": false
        },
        "size": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The size of the icon in pixels"
            },
            "attribute": "size",
            "reflect": false,
            "defaultValue": "12"
        },
        "color": {
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
                "text": "The color of the icon in CSS standard color"
            },
            "attribute": "color",
            "reflect": false,
            "defaultValue": "''"
        }
    }; }
    static get states() { return {
        "svgHTML": {}
    }; }
    static get watchers() { return [{
            "propName": "name",
            "methodName": "setSVGState"
        }]; }
}
