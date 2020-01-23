import { Host, h } from "@stencil/core";
import { findCheckedOption, watchForOptions } from '../../utils/utils';
export class RadioGroup {
    constructor() {
        /**
         * If `true`, the radios can be deselected.
         */
        this.allowEmpty = false;
        /**
         * The name of the control, which is submitted with the form data.
         */
        this.name = '';
        this.onSelect = (ev) => {
            const selectedRadio = ev.target;
            if (selectedRadio) {
                this.value = selectedRadio.value;
            }
        };
        this.onDeselect = async (ev) => {
            const selectedRadio = ev.target;
            if (this.allowEmpty && selectedRadio.value === this.value) {
                this.value = undefined;
            }
            await this.updateRadios();
        };
    }
    async valueChanged(value) {
        await this.updateRadios();
        this.fwChange.emit({ value });
    }
    async connectedCallback() {
        const el = this.el;
        if (this.value === undefined) {
            const radio = findCheckedOption(el, 'fw-radio');
            if (radio !== undefined) {
                await radio.componentOnReady();
                if (this.value === undefined) {
                    this.value = radio.value;
                }
            }
        }
        this.mutationO = watchForOptions(el, 'fw-radio', async (newOption) => {
            if (newOption !== undefined) {
                newOption.componentOnReady().then(() => {
                    this.value = newOption.value;
                }).catch();
            }
            else {
                await this.updateRadios();
            }
        });
        await this.updateRadios();
    }
    disconnectedCallback() {
        if (this.mutationO) {
            this.mutationO.disconnect();
            this.mutationO = undefined;
        }
    }
    async updateRadios() {
        /**
         * Make sure we get all radios first
         * so values are up to date prior
         * to caching the radio group value
         */
        const radios = await this.getRadios();
        const { value } = this;
        let hasChecked = false;
        // Walk the DOM in reverse order, since the last selected one wins!
        for (const radio of radios) {
            if (!hasChecked && radio.value === value) {
                // correct value for this radio
                // but this radio isn't checked yet
                // and we haven't found a checked yet
                hasChecked = true;
                radio.checked = true;
            }
            else {
                // this radio doesn't have the correct value
                // or the radio group has been already checked
                radio.checked = false;
            }
        }
        // Reset value if
        if (!hasChecked) {
            this.value = undefined;
        }
    }
    getRadios() {
        return Promise.all(Array
            .from(this.el.querySelectorAll('fw-radio'))
            .map(r => r.componentOnReady()));
    }
    render() {
        return (h(Host, { role: "radiogroup", onFwSelect: this.onSelect, onFwDeselect: this.onDeselect }));
    }
    static get is() { return "fw-radio-group"; }
    static get properties() { return {
        "allowEmpty": {
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
                "text": "If `true`, the radios can be deselected."
            },
            "attribute": "allow-empty",
            "reflect": false,
            "defaultValue": "false"
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
        "value": {
            "type": "any",
            "mutable": true,
            "complexType": {
                "original": "any | null",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "the value of the radio group."
            },
            "attribute": "value",
            "reflect": false
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
                "text": "Emitted when the value has changed."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "value",
            "methodName": "valueChanged"
        }]; }
}
