export const fetchNotifications = createAsyncThunk(
  'notifications/fetchNotifications',
  async () => {
    const response = await api.fetchNotifications();
    return response.data.map(notification => ({
      id: notification.id,
      type: notification.type,
      isRead: notification.isRead,
      value: notification.value,
    })).filter(notification => !notification.isRead);
  }
);