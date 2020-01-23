import { r as registerInstance, d as getAssetPath, h } from './core-f05d0500.js';

const Icon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * The size of the icon in pixels
         */
        this.size = 12;
        /**
         * The color of the icon in CSS standard color
         */
        this.color = '';
        this.svgHTML = '';
    }
    async getSVGHTML(iconName) {
        const response = await fetch(getAssetPath(`assets/icons/${iconName}.svg`));
        const data = await response.text();
        return data;
    }
    setSVGState(iconName) {
        this.getSVGHTML(iconName).then(res => {
            this.svgHTML = res;
        }).catch();
    }
    componentWillLoad() {
        this.setSVGState(this.name);
    }
    render() {
        return (h("div", { class: "icon", style: {
                '--icon-color': `${this.color}`,
                'height': `${this.size}px`,
                'width': `${this.size}px`,
            }, innerHTML: this.svgHTML }));
    }
    static get assetsDirs() { return ["assets"]; }
    static get watchers() { return {
        "name": ["setSVGState"]
    }; }
    static get style() { return ".icon{display:inline-block;color:var(--icon-color,var(--color-elephant-900))}.icon svg{width:100%;height:100%}"; }
};

export { Icon as fw_icon };
