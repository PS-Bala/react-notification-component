import React from 'react';
import './App.scss';
import Notification from './components/notification/Notification';
import { ItemProps } from './propertyTypes';

function App() {
  const [notificationList, setNotificationList] = React.useState<ItemProps[]>([]);

  const dataList: ItemProps[] = React.useMemo(() =>
    [{
      id: 1,
      from: "Karthik Muthusamy",
      content: "approved your goal 'ReactJS certification'.",
      updatedDate: new Date(2021, 7, 18),
      viewed: false
    },
    {
      id: 2,
      from: "Ram Kumar",
      content: "updated the rating for your goal 'ReactJS certification'.",
      updatedDate: new Date(2021, 8, 18),
      viewed: false
    }
    ], []);

  const removeNotification = (id: number) => {
    let updatedDataList: ItemProps[] = [];
    if (id) {
      updatedDataList = notificationList.filter(item => item.id !== id)
    }
    setNotificationList(updatedDataList);
  }

  const updateViewedNotification = (id: number) => {
    let updatedDataList: ItemProps[] = [];
    if (id) {
      updatedDataList = notificationList.map(item => {
        if (item.id === id) {
          item.viewed = !item.viewed;
        }
        return item
      })
    } else {
      updatedDataList = notificationList.map(item => {
        item.viewed = true;
        return item
      })
    }
    setNotificationList(updatedDataList);
  }

  React.useEffect(() => {
    setNotificationList(dataList)
  }, [dataList])

  return (
    <div className="App">
      <div className="sample">icon
      </div>
      <Notification title="Notifications" items={notificationList} updateViewedNotification={updateViewedNotification} removeNotification={removeNotification}></Notification>
    </div>
  );
}

export default App;
