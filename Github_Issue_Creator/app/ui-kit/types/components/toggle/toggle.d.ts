import { EventEmitter } from '../../stencil.core';
export declare class Toggle {
    state: boolean;
    /**
     * The type of control to display. The default type is text.
     */
    size: 'small' | 'medium' | 'large';
    /**
     * The name of the control, which is submitted with the form data.
     */
    name: string;
    /**
     * Is it disabled
     */
    disabled: boolean;
    fwChange: EventEmitter;
    watchHandler(newValue: boolean): void;
    private toggle;
    render(): any;
}
