import { r as registerInstance, h, g as getElement } from './core-f05d0500.js';
var Tabs = /** @class */ (function () {
    function Tabs(hostRef) {
        registerInstance(this, hostRef);
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
    Tabs.prototype.toggelLink = function (event, index) {
        event.stopPropagation();
        this.activeTabIndex = index;
    };
    /**
     * Event listener to Change active class for tab container
     */
    Tabs.prototype.addClassToTabContainer = function (event) {
        event.stopPropagation();
        this.activeChildClass = 'in active';
    };
    Tabs.prototype.render = function () {
        var _this = this;
        return (h("div", { class: "tabs" }, h("ul", { role: "tablist", class: "tabs__items" }, this.tabs.map(function (tab, index) { return h("li", { onClick: function (event) { return _this.toggelLink(event, index); }, class: "tabs__item contacts-tab_item text--xsmall text--uppercase ember-view" }, h("a", { href: '#tab-' + index, class: 'tabs__item__nav ' + (index === _this.activeTabIndex ? 'active' : '') }, h("span", { class: "tab-title--tab-icon" }, h("span", { class: "tab-title" }, tab.getAttribute('title'))), " ")); })), h("div", { class: "tabs__content" }, this.tabs.map(function (tab, index) { return h("div", { onClick: function (event) { return _this.toggelLink(event, index); }, innerHTML: tab.innerHTML, role: "tabpanel", id: 'tab-' + index, class: 'tabs__content__pane tabs__content__pane--fade ' + (index === _this.activeTabIndex ? 'in active' : '') + _this.activeChildClass }); }))));
    };
    Object.defineProperty(Tabs.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tabs, "style", {
        get: function () { return ".tabs__items{height:40px;list-style:none;width:100%;margin:0;padding:0}.tabs__item{float:left;position:relative}.tabs__item a{text-decoration:none;color:#475867}.tabs__item__nav{margin:0 12px;line-height:40px;color:#475867;position:relative;overflow:hidden;display:block;padding:0 6px;font-size:14px;-webkit-font-smoothing:antialiased;font-weight:500}.tabs__item__nav:hover:after{opacity:.3;background:#6f7c87}.tabs__item__nav.active{color:#2c5cc5;font-weight:500}.tabs__item__nav.active .app-icon{fill:#2c5cc5}.tabs__item__nav.active:after{opacity:1;background:#2c5cc5}.tabs__item__nav.disabled{cursor:not-allowed}.tabs__item__nav:after{position:absolute;bottom:0;left:0;width:100%;height:3px;background:#2c5cc5;content:\"\";-webkit-transition:height transform .5s;transition:height transform .5s;opacity:0;border-radius:3px 3px 0 0}.tabs__content{clear:both;float:none}.tabs__content__pane{display:none;padding-top:5px}.tabs__content__pane.active{display:block}.tabs__content__pane--fade{opacity:0;-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.tabs__content__pane--fade.in{opacity:1}"; },
        enumerable: true,
        configurable: true
    });
    return Tabs;
}());
export { Tabs as fw_tabs };
