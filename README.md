# React Notification Component

> The Notification component is used to manage notifications. You can mark any notification as `read`, `unread` or `remove`. It can bind data from data-sources such as JSON object array and web services.

[![NPM](https://img.shields.io/npm/v/bk-react-notification.svg)](https://www.npmjs.com/package/bk-react-notification) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install bk-react-notification
```

## Notification sample

Following example describes about, `how to render a notification component and its functionalities`.

### Source

```jsx
import React from 'react';
import Notification from 'bk-react-notification';

export default function App() {
  const [notificationList, setNotificationList] = React.useState([]);

  const removeNotification = id => {
    // You may use Web API to remove notification from data-base.
    let updatedDataList = [];
    if (id) {
      updatedDataList = notificationList.filter(item => item.id !== id);
    }
    setNotificationList(updatedDataList);
  };

  const updateViewedNotification = id => {
    // You may use Web API to update notification in data-base.
    let updatedDataList = [];
    if (id) {
      updatedDataList = notificationList.map(item => {
        if (item.id === id) {
          item.viewed = !item.viewed;
        }
        return item;
      });
    } else {
      updatedDataList = notificationList.map(item => {
        item.viewed = true;
        return item;
      });
    }
    setNotificationList(updatedDataList);
  };

  React.useEffect(() => {
    // you can use fetch API instead of below direct assignment
    let dataList = [
      {
        id: 1,
        from: 'Karthik Muthusamy',
        content: "approved your goal 'ReactJS certification'.",
        updatedDate: new Date(2021, 7, 18),
        viewed: false,
      },
      {
        id: 2,
        from: 'Ram Kumar',
        content: "updated the rating for your goal 'ReactJS certification'.",
        updatedDate: new Date(2021, 8, 18),
        viewed: false,
      },
    ];
    setNotificationList(dataList);
  }, []);

  return (
    <div>
      <Notification
        title="Notifications"
        items={notificationList}
        updateViewedNotification={updateViewedNotification}
        removeNotification={removeNotification}
      />
    </div>
  );
}
```

### Demo

![Notification Component](https://i.ibb.co/hRHsxX1/Notification-Component.png)

![Notification Menu Details](https://i.ibb.co/mt421PQ/Notification-Menu.png)

## Support

For support and queries, you can contact **bk.techee@gmail.com**

## License

MIT © [PS-Bala](https://github.com/PS-Bala)
