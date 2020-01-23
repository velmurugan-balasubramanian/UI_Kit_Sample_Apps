import { EventEmitter } from '../../stencil.core';
export declare class Select {
    host: HTMLElement;
    private select?;
    private selectInput?;
    private selectList?;
    /**
     * If the dropdown is shown or not
     */
    isExpanded: boolean;
    options: any[];
    filteredOptions: any[];
    hasFocus: boolean;
    /**
     * Label for the control
     */
    label: string;
    /**
     * The value of the input. Similar to an input value
     */
    value: any;
    /**
     * The name of the control, which is submitted with the form data.
     */
    name: string;
    /**
     * The type of control to display. The default type is text.
     */
    type: 'text' | 'number';
    /**
     * Instructional text that shows before the selection is made
     */
    placeholder?: string | null;
    /**
     * The state of the control. Color changes accordingly
     */
    state: 'normal' | 'warning' | 'error';
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
     * If `true`, the user must select some value. The default wont be shown
     */
    forceSelect: boolean;
    /**
     * Indicates that this control is disabled
     */
    disabled: boolean;
    /**
     * Set to true for multipleselect mode
     */
    multiple: boolean;
    fwChange: EventEmitter;
    fwFocus: EventEmitter;
    fwBlur: EventEmitter;
    private innerOnFocus;
    private innerOnClick;
    private innerOnBlur;
    keyChanged(newValue: any, oldValue: any): void;
    fwSelectedHandler(selectedItem: any): void;
    optionsChangedHandler(): void;
    fwCloseHandler(ev: any): void;
    onKeyDonw(ev: any): void;
    onInput(): void;
    renderTags(): any[];
    renderDropdown(): any[];
    componentWillLoad(): void;
    getSelectedItem(): Promise<any>;
    render(): any;
}
