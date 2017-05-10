import { BottomBarBase, BottomBarItemInterface } from "./nativescript-bottombar.common";
export declare class BottomBar extends BottomBarBase {
    readonly android: any;
    createNativeView(): any;
}
export declare class BottomBarItem implements BottomBarItemInterface {
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
