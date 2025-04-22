import {createSlice, PayloadAction} from "@reduxjs/toolkit";
const initialState = {
    isModalOpen: false
}
export const stateSlice = createSlice({
    name: 'state',
    initialState,
    reducers: {
        openModal: ((state, action: PayloadAction<boolean>) => {state.isModalOpen = action.payload})
    }
})

export const {openModal} = stateSlice.actions
export default stateSlice.reducer
