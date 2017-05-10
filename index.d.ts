export declare const enum TITLE_STATE {
    SHOW_WHEN_ACTIVE = 0,
    ALWAYS_SHOW = 1,
    ALWAYS_HIDE = 2,
}

export declare class BottomBarBase {
    items: BottomBarItem[];
    selected: number;
    titleState: TITLE_STATE;
    hide: boolean;
}

export declare class BottomBarItem {
    private _title;
    private _icon;
    private _color;
    private _index;
    private _notification?;
    private _parent?;
    constructor(title: string, icon: string, color: string, index: number, notification?: string, parent?: WeakRef<any>);
    title: string;
    icon: string;
    color: string;
    index: number;
    notification: string;
    parent: WeakRef<any>;
}