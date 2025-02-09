// Remove displayDrawer from the initial state
const initialState = {
  notifications: [],
  // displayDrawer: false, // Remove this line
};

// Remove showDrawer & hideDrawer reducers
const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    // showDrawer: (state) => { state.displayDrawer = true; },
    // hideDrawer: (state) => { state.displayDrawer = false; },
    // ... other reducers
  },
  // ... other slice configurations
});

// Update exports to exclude visibility-related actions
export const { /* other actions */ } = notificationsSlice.actions;