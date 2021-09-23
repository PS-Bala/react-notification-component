import React from 'react'
import "./Notification.scss"
import NotificationItem from './../notification-item/NotificationItem';
import { MenuProps, NotificationProps } from '../../propertyTypes';
import FloatMenu from './../float-menu/FloatMenu';

function Notification(props: NotificationProps) {
    const { title, items, enableFloatMenu, updateViewedNotification = () => { }, removeNotification = () => { }, onSelectNotification = () => {} } = props;

    const menuItems: MenuProps[] = [
        {
            text: "Mark all as Read",
            action: updateViewedNotification
        },
        {
            text: "Remove all notifications",
            action: removeNotification
        }
    ];
    const individualMenuItems: MenuProps[] = [
        {
            text: "Mark as Read",
            action: updateViewedNotification
        },
        {
            text: "Remove this notification",
            action: removeNotification

        }
    ];

    return (
        <div className="notification-container">
            <div className="title">{title}
                {enableFloatMenu && <FloatMenu rootClassName='title-menu' items={menuItems}></FloatMenu>}
            </div>
            {/* <div className="see-all">{locale.seeAll}</div> */}
            <div className="notification-list">
                <NotificationItem items={items} menuItems={individualMenuItems} onSelectNotification={onSelectNotification} enableFloatMenu={enableFloatMenu}></NotificationItem>
            </div>
        </div>
    )
}

export default Notification
