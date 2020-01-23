'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-6fd1ea16.js');

// This is a sample funtion for boilerplate code
/* tslint:enable */
const watchForOptions = (containerEl, tagName, onChange) => {
    const mutation = new MutationObserver(mutationList => {
        onChange(getSelectedOption(mutationList, tagName));
    });
    mutation.observe(containerEl, {
        childList: true,
        subtree: true,
    });
    return mutation;
};
const getSelectedOption = (mutationList, tagName) => {
    let newOption;
    mutationList.forEach(mut => {
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < mut.addedNodes.length; i++) {
            newOption = findCheckedOption(mut.addedNodes[i], tagName) || newOption;
        }
    });
    return newOption;
};
const findCheckedOption = (el, tagName) => {
    if (el.nodeType !== 1) {
        return undefined;
    }
    const options = (el.tagName === tagName.toUpperCase())
        ? [el]
        : Array.from(el.querySelectorAll(tagName));
    return options.find((o) => o.checked === true);
};

const RadioGroup = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
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
        this.fwChange = core.createEvent(this, "fwChange", 7);
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
        return (core.h(core.Host, { role: "radiogroup", onFwSelect: this.onSelect, onFwDeselect: this.onDeselect }));
    }
    get el() { return core.getElement(this); }
    static get watchers() { return {
        "value": ["valueChanged"]
    }; }
};

exports.fw_radio_group = RadioGroup;
