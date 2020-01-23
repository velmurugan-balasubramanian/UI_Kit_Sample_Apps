export declare class Icon {
    /**
     * The name of the icon
     */
    name: string;
    /**
     * The size of the icon in pixels
     */
    size: number;
    /**
     * The color of the icon in CSS standard color
     */
    color: string;
    svgHTML: string;
    private getSVGHTML;
    private setSVGState;
    componentWillLoad(): void;
    render(): any;
}
