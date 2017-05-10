import { View } from "tns-core-modules/ui/core/view";
import { Property } from "tns-core-modules/ui/core/properties";

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


export declare const enum TITLE_STATE {
    SHOW_WHEN_ACTIVE = 0,
    ALWAYS_SHOW = 1,
    ALWAYS_HIDE = 2,
}
export interface BottomBarItemInterface {
    title: string;
    icon: string;
    color: string;
    index: number;
    notification?: string;
    parent?: WeakRef<any>;
}
export declare class BottomBarBase extends View {
    items: BottomBarItemInterface[];
    selected: number;
    titleState: TITLE_STATE;
    hide: boolean;
}
export declare const itemsProperty: Property<BottomBarBase, BottomBarItemInterface[]>;
export declare const selectedIndexProperty: Property<BottomBarBase, number>;
export declare const titleStateProperty: Property<BottomBarBase, TITLE_STATE>;
export declare const hideProperty: Property<BottomBarBase, boolean>;

