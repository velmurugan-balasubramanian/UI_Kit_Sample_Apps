import { EventEmitter } from '../../stencil.core';
export declare class Button {
    /**
     *  The native button type:
     *  values: `button`, `reset`, `submit`
     */
    type: 'button' | 'reset' | 'submit';
    /**
     * The theme of the button,
     * Values are : `primary`, `secondary`, `danger`
     */
    color: 'primary' | 'secondary' | 'danger' | 'link' | 'text';
    /**
     * Sets the button as disabled when set to true.
     */
    disabled: boolean;
    /**
     * Sets the button size to block when set to true.
     */
    expand: boolean;
    /**
     * The size of the button,
     * Values are : `normal`, `mini`
     */
    size: 'normal' | 'mini' | 'small';
    /**
     * Emitted when the button is clicked.
     */
    fwClick: EventEmitter<void>;
    /**
     * Emitted when the checkbox has focus.
     */
    fwFocus: EventEmitter<void>;
    /**
     * Emitted when the checbox loses focus.
     */
    fwBlur: EventEmitter<void>;
    private onFocus;
    private onBlur;
    private handleClick;
    render(): any;
}
