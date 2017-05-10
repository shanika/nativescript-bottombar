
import {
    BottomBarBase, BottomBarItemInterface, hideProperty, itemsProperty,
    selectedIndexProperty, TITLE_STATE, titleStateProperty
} from "./nativescript-bottombar.common";
import {Color} from "tns-core-modules/color";
import {fromResource} from "tns-core-modules/image-source";

declare let com, android: any;

let BitmapDrawable = android.graphics.drawable.BitmapDrawable;
let AHBottomNavigation = com.aurelhubert.ahbottomnavigation.AHBottomNavigation;
let AHBottomNavigationItem = com.aurelhubert.ahbottomnavigation.AHBottomNavigationItem;
let AHNotification = com.aurelhubert.ahbottomnavigation.notification.AHNotification;

export class BottomBar extends BottomBarBase {

    get android(): any {
        return this.nativeView;
    }

    public createNativeView() {

        let nativeView = new AHBottomNavigation(this._context);


        nativeView.setDefaultBackgroundColor(new Color('#333').android);
        nativeView.setColored(true);

        return nativeView;
    }

    [itemsProperty.setNative](value : BottomBarItemInterface[]) {
        let items : BottomBarItem[] = <BottomBarItem[]>value;
        items.forEach( (item, idx, aar) => {

            let icon1 = new BitmapDrawable(fromResource(item.icon).android);
            let item1 = new AHBottomNavigationItem(item.title, icon1, new Color(item.color).android);
            this.nativeView.addItem(item1);
            if(item.notification) {
                this.nativeView.setNotification(item.notification, idx)
            }

        });
    }

    [selectedIndexProperty.setNative](selectedIndex : number) {
        this.nativeView.setCurrentItem(selectedIndex);
    }

    [titleStateProperty.setNative](titleState : TITLE_STATE) {

        switch (titleState) {
            case TITLE_STATE.ALWAYS_SHOW:
                this.nativeView.setTitleState(AHBottomNavigation.TitleState.ALWAYS_SHOW);
                break;
            case TITLE_STATE.SHOW_WHEN_ACTIVE:
                this.nativeView.setTitleState(AHBottomNavigation.TitleState.SHOW_WHEN_ACTIVE);
                break;
            case TITLE_STATE.ALWAYS_HIDE:
                this.nativeView.setTitleState(AHBottomNavigation.TitleState.ALWAYS_HIDE);
                break;
        }
    }

    [hideProperty.setNative](hide : boolean) {
        if (hide) {
            this.nativeView.hideBottomNavigation();
        } else {
            this.nativeView.restoreBottomNavigation();
        }
    }

}

export class BottomBarItem implements BottomBarItemInterface {

    private _title: string;
    private _icon: string;
    private _color: string;
    private _index: number;
    private _notification?: string;
    private _parent?: WeakRef<any>;

    constructor(title: string, icon: string, color: string, index: number, notification?: string, parent?: WeakRef<any>) {
        this._title = title;
        this._icon = icon;
        this._color = color;
        this._index = index;
        if (notification) {
            this._notification = notification;
        }
        if (parent) {
            this._parent = parent;
        }
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get icon(): string {
        return this._icon;
    }

    set icon(value: string) {
        this._icon = value;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    get index(): number {
        return this._index;
    }

    set index(value: number) {
        this._index = value;
    }

    get notification(): string {
        return this._notification;
    }

    set notification(value: string) {
        this._notification = value;
    }

    get parent(): WeakRef<any> {
        return this._parent;
    }

    set parent(value: WeakRef<any>) {
        this._parent = value;
    }
}