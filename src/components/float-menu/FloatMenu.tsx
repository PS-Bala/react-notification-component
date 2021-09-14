import React from 'react'
import { FloatMenuProps } from '../../propertyTypes'
import "./FloatMenu.scss"

function FloatMenu(props: FloatMenuProps) {
    const [openPopup, setOpenPopup] = React.useState(false);
    const { notificationId, items, viewed, rootClassName } = props;
    return (
        <div tabIndex={0} className={`float-menu ${rootClassName}`} onBlur={() => setOpenPopup(false)}>
            <div className={`icon ${openPopup ? "open" : ""}`}
                onClick={() => setOpenPopup(!openPopup)}
            >
                <div className="inner-icon">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div >
            </div >
            <div className={`menu-list ${openPopup ? "show" : "hide"}`}>
                {items.map(item => (
                    <div key={item.text} className="item" onClick={() => {
                        item.action(notificationId)
                        setOpenPopup(false)
                    }}>
                        {item.text.includes('Read') ? (viewed ? item.text.replace('Read', 'Unread') : item.text) : item.text}
                    </div>
                ))}
            </div>
        </div >
    )
}

export default FloatMenu
