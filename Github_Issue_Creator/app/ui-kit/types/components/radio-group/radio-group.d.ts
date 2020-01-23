import { EventEmitter } from '../../stencil.core';
export declare class RadioGroup {
    private mutationO?;
    el: HTMLElement;
    /**
     * If `true`, the radios can be deselected.
     */
    allowEmpty: boolean;
    /**
     * The name of the control, which is submitted with the form data.
     */
    name: string;
    /**
     * the value of the radio group.
     */
    value?: any | null;
    valueChanged(value: any | undefined): Promise<void>;
    /**
     * Emitted when the value has changed.
     */
    fwChange: EventEmitter;
    connectedCallback(): Promise<void>;
    disconnectedCallback(): void;
    private updateRadios;
    private getRadios;
    private onSelect;
    private onDeselect;
    render(): any;
}
