import { h } from "@stencil/core";
export class Spinner {
    constructor() {
        /**
         * The size of the spinner - Options ['small' , 'default', 'medium', 'large']
         */
        this.size = 'default';
        /**
         * The color of the spinner
         */
        this.color = '';
        this.sizeMap = {
            small: 12,
            default: 16,
            medium: 24,
            large: 32,
        };
    }
    getSize() {
        return this.sizeMap[this.size] || 16;
    }
    render() {
        const diameter = this.getSize();
        return h("svg", { class: `spinner ${this.size}`, style: {
                'width': `${diameter}px`,
                'height': `${diameter}px`,
                '--spinner-color': `${this.color}`,
            }, viewBox: `0 0 50 50` },
            h("circle", { class: "path", cx: "25", cy: "25", r: "20", fill: "none", "stroke-width": "5" }));
    }
    static get is() { return "fw-spinner"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["spinner.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["spinner.css"]
    }; }
    static get properties() { return {
        "size": {
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
                "text": "The size of the spinner - Options ['small' , 'default', 'medium', 'large']"
            },
            "attribute": "size",
            "reflect": false,
            "defaultValue": "'default'"
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
                "text": "The color of the spinner"
            },
            "attribute": "color",
            "reflect": false,
            "defaultValue": "''"
        }
    }; }
}
