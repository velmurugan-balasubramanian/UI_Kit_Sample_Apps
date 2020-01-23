import { EventEmitter } from '../../stencil.core';
export declare class Textarea {
    private nativeInput?;
    hasFocus: boolean;
    /**
     * The type of control to display. The default type is text.
     */
    label: string;
    /**
     * The value of the input.
     */
    value?: string | null;
    /**
     * Number of columns
     */
    cols?: number;
    /**
     * Number of rows
     */
    rows?: number;
    /**
     * Max length of value
     */
    maxlength?: number;
    /**
     * Min length of value
     */
    minlength?: number;
    /**
     * The name of the control, which is submitted with the form data.
     */
    name: string;
    /**
     * Instructional text that shows before the input has a value.
     */
    placeholder?: string | null;
    /**
     * The state of the control. Color changes accordingly
     */
    state: 'normal' | 'warning' | 'error';
    /**
     * How the text in the textarea is to be wrapped
     */
    wrap: 'soft' | 'hard';
    /**
     * This text will be displayed below the input box indicating the state/hint
     */
    stateText: string;
    /**
     * If `true`, the user cannot modify the value.
     */
    readonly: boolean;
    /**
     * If `true`, the user must fill in a value before submitting a form.
     */
    required: boolean;
    /**
     * Indicates that this control is disabled
     */
    disabled: boolean;
    fwChange: EventEmitter;
    fwFocus: EventEmitter<void>;
    fwBlur: EventEmitter<void>;
    fwInput: EventEmitter<KeyboardEvent>;
    watchHandler(newValue: string): void;
    private onInput;
    private onFocus;
    private onBlur;
    private getValue;
    private hasValue;
    /**
     * Sets focus on the specified `fw-input`. Use this method instead of the global
     * `input.focus()`.
     */
    setFocus(): Promise<void>;
    render(): any;
}
