import { h } from "@stencil/core";
export class Tabs {
    constructor() {
        /**
         * Child Elements/Tab Items
         */
        this.tabs = Array.from(this.el.querySelectorAll('fw-tab'));
        /**
         * Active tab indec
         */
        this.activeTabIndex = 0;
        /**
         * Active class for tab container
         */
        this.activeChildClass = '';
    }
    /**
     * Event listener to Add active class to current Tab
     */
    toggelLink(event, index) {
        event.stopPropagation();
        this.activeTabIndex = index;
    }
    /**
     * Event listener to Change active class for tab container
     */
    addClassToTabContainer(event) {
        event.stopPropagation();
        this.activeChildClass = 'in active';
    }
    render() {
        return (h("div", { class: "tabs" },
            h("ul", { role: "tablist", class: "tabs__items" }, this.tabs.map((tab, index) => h("li", { onClick: event => this.toggelLink(event, index), class: "tabs__item contacts-tab_item text--xsmall text--uppercase ember-view" },
                h("a", { href: '#tab-' + index, class: 'tabs__item__nav ' + (index === this.activeTabIndex ? 'active' : '') },
                    h("span", { class: "tab-title--tab-icon" },
                        h("span", { class: "tab-title" }, tab.getAttribute('title'))),
                    " ")))),
            h("div", { class: "tabs__content" }, this.tabs.map((tab, index) => h("div", { onClick: event => this.toggelLink(event, index), innerHTML: tab.innerHTML, role: "tabpanel", id: 'tab-' + index, class: 'tabs__content__pane tabs__content__pane--fade ' + (index === this.activeTabIndex ? 'in active' : '') + this.activeChildClass })))));
    }
    static get is() { return "fw-tabs"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["tabs.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["tabs.css"]
    }; }
    static get states() { return {
        "tabs": {},
        "activeTabIndex": {},
        "activeChildClass": {}
    }; }
    static get elementRef() { return "el"; }
    static get listeners() { return [{
            "name": "click",
            "method": "toggelLink",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "click",
            "method": "addClassToTabContainer",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
