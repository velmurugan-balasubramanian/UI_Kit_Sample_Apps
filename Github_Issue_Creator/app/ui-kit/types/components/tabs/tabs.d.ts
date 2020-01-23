export declare class Tabs {
    el: HTMLElement;
    /**
     * Child Elements/Tab Items
     */
    tabs: HTMLFwTabElement[];
    /**
     * Active tab indec
     */
    activeTabIndex: number;
    /**
     * Active class for tab container
     */
    activeChildClass: string;
    /**
     * Event listener to Add active class to current Tab
     */
    toggelLink(event: Event, index: number): void;
    /**
     * Event listener to Change active class for tab container
     */
    addClassToTabContainer(event: Event): void;
    render(): any;
}
