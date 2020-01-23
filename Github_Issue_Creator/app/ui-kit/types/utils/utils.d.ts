export declare function format(first: string, middle: string, last: string): string;
export declare const watchForOptions: <T extends HTMLElement>(containerEl: HTMLElement, tagName: string, onChange: (el: T) => void) => MutationObserver;
export declare const findCheckedOption: (el: any, tagName: string) => HTMLElement;
