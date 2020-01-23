import { EventEmitter } from '../../stencil.core';
export declare class Tag {
    host: HTMLElement;
    /**
     * The display text for the tag
     */
    text: string;
    /**
     * The value of the tag
     */
    value: string;
    fwClosed: EventEmitter;
    removeTag(): void;
    render(): any;
}
