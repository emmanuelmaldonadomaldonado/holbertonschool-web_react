import { createSlice } from '@reduxjs/toolkit';

const notificationsSlice = createSlice({
    name: 'notifications',
    initialState: {
        items: [], // Aquí se almacenarán las notificaciones
        // displayDrawer: false, // Eliminado
    },
    reducers: {
        // showDrawer: (state) => { state.displayDrawer = true; }, // Eliminado
        // hideDrawer: (state) => { state.displayDrawer = false; }, // Eliminado
        setNotifications: (state, action) => {
            state.items = action.payload;
        },
    },
});

export const { setNotifications } = notificationsSlice.actions;
export default notificationsSlice.reducer;