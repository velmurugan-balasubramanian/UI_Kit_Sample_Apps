import { Host, h } from "@stencil/core";
export class Button {
    constructor() {
        /**
         *  The native button type:
         *  values: `button`, `reset`, `submit`
         */
        this.type = 'button';
        /**
         * The theme of the button,
         * Values are : `primary`, `secondary`, `danger`
         */
        this.color = 'primary';
        /**
         * Sets the button as disabled when set to true.
         */
        this.disabled = false;
        /**
         * Sets the button size to block when set to true.
         */
        this.expand = false;
        /**
         * The size of the button,
         * Values are : `normal`, `mini`
         */
        this.size = 'normal';
    }
    onFocus() {
        this.fwFocus.emit();
    }
    onBlur() {
        this.fwBlur.emit();
    }
    handleClick() {
        this.fwClick.emit();
    }
    render() {
        return (h(Host, { onClick: () => this.handleClick(), onFocus: () => this.onFocus(), onBlur: () => this.onBlur() },
            h("button", { type: this.type, class: `
            fw-btn fw-btn--${this.color.toLowerCase()}
            fw-btn--${this.size.toLowerCase()}
            ${this.expand ? 'fw-btn--block' : ''}
            `, disabled: this.disabled },
                h("slot", null))));
    }
    static get is() { return "fw-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["button.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["button.css"]
    }; }
    static get properties() { return {
        "type": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'button' | 'reset' | 'submit'",
                "resolved": "\"button\" | \"reset\" | \"submit\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The native button type:\nvalues: `button`, `reset`, `submit`"
            },
            "attribute": "type",
            "reflect": false,
            "defaultValue": "'button'"
        },
        "color": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'primary' | 'secondary' | 'danger' | 'link' | 'text'",
                "resolved": "\"danger\" | \"link\" | \"primary\" | \"secondary\" | \"text\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The theme of the button,\nValues are : `primary`, `secondary`, `danger`"
            },
            "attribute": "color",
            "reflect": false,
            "defaultValue": "'primary'"
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
                "text": "Sets the button as disabled when set to true."
            },
            "attribute": "disabled",
            "reflect": true,
            "defaultValue": "false"
        },
        "expand": {
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
                "text": "Sets the button size to block when set to true."
            },
            "attribute": "expand",
            "reflect": false,
            "defaultValue": "false"
        },
        "size": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'normal' | 'mini' | 'small'",
                "resolved": "\"mini\" | \"normal\" | \"small\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The size of the button,\nValues are : `normal`, `mini`"
            },
            "attribute": "size",
            "reflect": false,
            "defaultValue": "'normal'"
        }
    }; }
    static get events() { return [{
            "method": "fwClick",
            "name": "fwClick",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the button is clicked."
            },
            "complexType": {
                "original": "void",
                "resolved": "void",
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
}
