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
}

export interface NotificationProps {
    title: string,
    items: ItemProps[]
    updateViewedNotification?: Function
    removeNotification?: Function
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