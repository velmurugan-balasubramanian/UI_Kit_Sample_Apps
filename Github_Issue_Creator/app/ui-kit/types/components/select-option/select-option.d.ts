import { EventEmitter } from '../../stencil.core';
export declare class SelectOption {
    /**
     * The Key associated with this select option
     */
    value: string;
    /**
     * Flag to indicate if the option is selected or not. A tick is shown
     */
    selected: boolean;
    fwSelected: EventEmitter;
    private onOptionSelected;
    render(): any;
}
