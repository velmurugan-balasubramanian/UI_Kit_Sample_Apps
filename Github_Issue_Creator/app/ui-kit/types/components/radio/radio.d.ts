import { EventEmitter } from '../../stencil.core';
export declare class Radio {
    /**
     * Property to maintain checked state
     */
    checked: boolean;
    /**
     * Disables the radio button
     */
    disabled: boolean;
    /**
     * Label for radio button
     */
    label: string;
    /**
     * Value of the radio button for within a form
     */
    value: string;
    /**
     * Value of the name for within a form
     */
    name: string;
    /**
     * Emitted when the radio button value has changed.
     */
    fwSelect: EventEmitter;
    /**
     * Emitted when the radio button value has changed.
     */
    fwDeselect: EventEmitter;
    /**
     * Emitted when the radio button has focus.
     */
    fwFocus: EventEmitter<void>;
    /**
     * Emitted when the checbox loses focus.
     */
    fwBlur: EventEmitter<void>;
    private radio;
    componentDidLoad(): void;
    checkChanged(isChecked: boolean): void;
    disabledChanged(isDisabled: boolean): void;
    private onFocus;
    private onBlur;
    private toggle;
    render(): any;
}
