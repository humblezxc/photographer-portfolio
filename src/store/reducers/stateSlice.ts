import {createSlice, PayloadAction} from "@reduxjs/toolkit";
const initialState = {
    isModalClosed: true
}
export const stateSlice = createSlice({
    name: 'state',
    initialState,
    reducers: {
        openModal: ((state, action: PayloadAction<boolean>) => {state.isModalClosed = action.payload})
    }
})

export const {openModal} = stateSlice.actions
export default stateSlice.reducer
