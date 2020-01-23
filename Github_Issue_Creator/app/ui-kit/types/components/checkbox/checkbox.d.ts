import { EventEmitter } from '../../stencil.core';
export declare class Checkbox {
    /**
     * Property to maintain checked state
     */
    checked: boolean;
    /**
     * Disables the checkbox
     */
    disabled: boolean;
    /**
     * Label for checkbox
     */
    label: string;
    /**
     * Value of the checkbox for within a form
     */
    value: string;
    /**
     * Emitted when the checkbox value has changed.
     */
    fwChange: EventEmitter;
    /**
     * Emitted when the checkbox has focus.
     */
    fwFocus: EventEmitter<void>;
    /**
     * Emitted when the checbox loses focus.
     */
    fwBlur: EventEmitter<void>;
    private checkbox;
    componentDidLoad(): void;
    checkChanged(isChecked: boolean): void;
    disabledChanged(isDisabled: boolean): void;
    private onFocus;
    private onBlur;
    private toggle;
    render(): any;
}
