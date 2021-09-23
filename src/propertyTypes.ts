export interface ItemProps {
    id: number,
    from: string,
    content: string,
    updatedDate: Date
    viewed: boolean
}
export interface NotificationItemProps {
    items: ItemProps[]
    menuItems: MenuProps[]
    enableFloatMenu: boolean
    onSelectNotification?: Function
}

export interface NotificationProps {
    title: string,
    items: ItemProps[]
    enableFloatMenu: boolean
    updateViewedNotification?: Function
    removeNotification?: Function
    onSelectNotification?: Function
}

export interface MenuProps {
    text: string,
    action: Function
}

export interface FloatMenuProps {
    notificationId?: number,
    items: MenuProps[],
    viewed?: boolean,
    rootClassName?: string
}