export declare class Spinner {
    /**
     * The size of the spinner - Options ['small' , 'default', 'medium', 'large']
     */
    size: string;
    /**
     * The color of the spinner
     */
    color: string;
    sizeMap: {
        small: number;
        default: number;
        medium: number;
        large: number;
    };
    getSize(): any;
    render(): any;
}
