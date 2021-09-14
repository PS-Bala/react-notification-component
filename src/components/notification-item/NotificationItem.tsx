import React from 'react'
import { NotificationItemProps } from '../../propertyTypes'
import FloatMenu from '../float-menu/FloatMenu';
import "./NotificationItem.scss"


function NotificationItem(props: NotificationItemProps) {
    const { items, menuItems } = props;
    let sortedItems = items.sort((item1, item2) => (item2.updatedDate.getTime() - item1.updatedDate.getTime()));
    return (
        <>
            {sortedItems.map(((item, index) => (
                <div key={item.id + item.content} className="notification-item">
                    <div className="from">{item.from}&nbsp;</div>
                    {item.content}
                    <div className={`duration ${item.viewed ? "viewed" : "not-viewed"}`}>on {item.updatedDate.toDateString()}</div>
                    {!item.viewed && <div className="not-viewed-circle"></div>}
                    <FloatMenu notificationId={item.id} items={menuItems} viewed={item.viewed} rootClassName={`item-menu ${(index === sortedItems.length - 1) ? "last" : ""}`}></FloatMenu>
                </div>
            )))}
        </>
    )
}

export default NotificationItem