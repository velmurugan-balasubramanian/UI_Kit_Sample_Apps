import { Host, h } from "@stencil/core";
export class Select {
    constructor() {
        /**
         * If the dropdown is shown or not
         */
        this.isExpanded = false;
        this.options = [];
        this.filteredOptions = [];
        this.hasFocus = false;
        /**
         * Label for the control
         */
        this.label = '';
        /**
         * The name of the control, which is submitted with the form data.
         */
        this.name = '';
        /**
         * The type of control to display. The default type is text.
         */
        this.type = 'text';
        /**
         * The state of the control. Color changes accordingly
         */
        this.state = 'normal';
        /**
         * This text will be displayed below the input box indicating the state/hint
         */
        this.stateText = '';
        /**
         * If `true`, the user cannot modify the value.
         */
        this.readonly = false;
        /**
         * If `true`, the user must fill in a value before submitting a form.
         */
        this.required = false;
        /**
         * If `true`, the user must select some value. The default wont be shown
         */
        this.forceSelect = true;
        /**
         * Indicates that this control is disabled
         */
        this.disabled = false;
        /**
         * Set to true for multipleselect mode
         */
        this.multiple = false;
        this.innerOnFocus = (e) => {
            this.hasFocus = true;
            this.fwFocus.emit(e);
        };
        this.innerOnClick = () => {
            this.filteredOptions = this.options;
            this.selectList.style.display = 'block';
            this.selectList.style.width = String(this.select.clientWidth) + 'px';
            this.isExpanded = true;
        };
        this.innerOnBlur = (e) => {
            this.selectList.style.display = 'none';
            this.isExpanded = false;
            this.fwBlur.emit(e);
        };
    }
    keyChanged(newValue, oldValue) {
        if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
            this.options = this.options.map(option => {
                option.selected = Array.isArray(this.value)
                    ? this.value.includes(option.value)
                    : this.value === option.value;
                return option;
            });
            this.fwChange.emit({ value: this.value });
        }
    }
    fwSelectedHandler(selectedItem) {
        this.options = this.options.map(option => {
            if (selectedItem.detail.value === option.value) {
                option.selected = selectedItem.detail.selected;
            }
            else if (!this.multiple) {
                option.selected = false;
            }
            return option;
        });
        this.selectList.style.display = 'none';
        selectedItem.stopPropagation();
    }
    optionsChangedHandler() {
        const selectedOptions = this.options.filter(option => option.selected);
        if (selectedOptions.length > 0) {
            this.value = this.multiple ? selectedOptions.map(option => option.value) : selectedOptions[0].value || '';
            this.selectInput.value = this.multiple ? '' : selectedOptions[0].text || '';
        }
    }
    fwCloseHandler(ev) {
        this.options = this.options.map(option => {
            if (option.value === ev.detail.value) {
                option.selected = false;
            }
            return option;
        });
    }
    onKeyDonw(ev) {
        switch (ev.key) {
            case 'ArrowDown':
                this.innerOnClick();
                break;
            case 'Escape':
                this.innerOnBlur(ev);
                break;
        }
    }
    onInput() {
        const value = this.selectInput.value.toLowerCase();
        this.filteredOptions = value !== ''
            ? this.options.filter(option => option.text.toLowerCase().startsWith(value))
            : this.options;
    }
    renderTags() {
        if (this.multiple) {
            return this.options
                .filter(option => option.selected)
                .map(option => h("fw-tag", { text: option.text, value: option.value }));
        }
    }
    renderDropdown() {
        return this.filteredOptions.map(option => (h("fw-select-option", { value: option.value, selected: option.selected }, option.text)));
    }
    componentWillLoad() {
        // this.value = this.value || (this. multiple ? [] : undefined);
        const selectOptions = Array.from(this.host.querySelectorAll('fw-select-option'));
        const options = selectOptions.map(option => {
            return {
                text: option.textContent,
                value: option.value,
                selected: option.selected,
            };
        });
        this.options = options;
        this.filteredOptions = this.options;
        this.host.innerHTML = '';
    }
    async getSelectedItem() {
        return this.options.filter(option => option.selected);
    }
    render() {
        return (h(Host, { "aria-disabled": this.disabled, class: {
                'has-focus': this.hasFocus,
            } },
            this.label !== '' ? h("label", { class: { 'required': this.required } },
                " ",
                this.label,
                " ") : '',
            h("div", { class: "select-container" },
                h("div", { class: "input-container", ref: select => this.select = select, onClick: () => this.innerOnClick() },
                    h("div", { class: {
                            'input-container-inner': true,
                            [this.state]: true,
                        } },
                        this.renderTags(),
                        h("input", { ref: selectInput => this.selectInput = selectInput, class: {
                                'multiple-select': this.multiple,
                            }, autoComplete: "off", disabled: this.disabled, name: this.name, placeholder: this.placeholder || '', readOnly: this.readonly, required: this.required, type: this.type, value: "", onInput: () => this.onInput(), onFocus: e => this.innerOnFocus(e), onBlur: e => this.innerOnBlur(e) }),
                        h("span", { class: { 'dropdown-status-icon': true, 'expanded': this.isExpanded } }))),
                h("ul", { tabindex: "0", ref: ul => this.selectList = ul }, this.renderDropdown()),
                this.stateText !== '' ?
                    h("span", { class: "help-block" }, this.stateText) : '')));
    }
    static get is() { return "fw-select"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["select.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["select.css"]
    }; }
    static get properties() { return {
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
                "text": "Label for the control"
            },
            "attribute": "label",
            "reflect": false,
            "defaultValue": "''"
        },
        "value": {
            "type": "any",
            "mutable": true,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The value of the input. Similar to an input value"
            },
            "attribute": "value",
            "reflect": false
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
        "type": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'text' | 'number'",
                "resolved": "\"number\" | \"text\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The type of control to display. The default type is text."
            },
            "attribute": "type",
            "reflect": false,
            "defaultValue": "'text'"
        },
        "placeholder": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string | null",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Instructional text that shows before the selection is made"
            },
            "attribute": "placeholder",
            "reflect": false
        },
        "state": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'normal' | 'warning' | 'error'",
                "resolved": "\"error\" | \"normal\" | \"warning\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The state of the control. Color changes accordingly"
            },
            "attribute": "state",
            "reflect": false,
            "defaultValue": "'normal'"
        },
        "stateText": {
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
                "text": "This text will be displayed below the input box indicating the state/hint"
            },
            "attribute": "state-text",
            "reflect": false,
            "defaultValue": "''"
        },
        "readonly": {
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
                "text": "If `true`, the user cannot modify the value."
            },
            "attribute": "readonly",
            "reflect": false,
            "defaultValue": "false"
        },
        "required": {
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
                "text": "If `true`, the user must fill in a value before submitting a form."
            },
            "attribute": "required",
            "reflect": false,
            "defaultValue": "false"
        },
        "forceSelect": {
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
                "text": "If `true`, the user must select some value. The default wont be shown"
            },
            "attribute": "force-select",
            "reflect": false,
            "defaultValue": "true"
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
                "text": "Indicates that this control is disabled"
            },
            "attribute": "disabled",
            "reflect": false,
            "defaultValue": "false"
        },
        "multiple": {
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
                "text": "Set to true for multipleselect mode"
            },
            "attribute": "multiple",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "isExpanded": {},
        "options": {},
        "filteredOptions": {},
        "hasFocus": {}
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
        }, {
            "method": "fwFocus",
            "name": "fwFocus",
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
        }, {
            "method": "fwBlur",
            "name": "fwBlur",
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
    static get methods() { return {
        "getSelectedItem": {
            "complexType": {
                "signature": "() => Promise<any>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<any>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "host"; }
    static get watchers() { return [{
            "propName": "value",
            "methodName": "keyChanged"
        }, {
            "propName": "options",
            "methodName": "optionsChangedHandler"
        }]; }
    static get listeners() { return [{
            "name": "fwSelected",
            "method": "fwSelectedHandler",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "fwClosed",
            "method": "fwCloseHandler",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "keydown",
            "method": "onKeyDonw",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
