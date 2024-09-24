import { createSlice, PayloadAction } from "@reduxjs/toolkit";  


interface NavState {
    origin: any;  
    destination: any;  
    travelTimeInformation: any;  
}

const initialState: NavState = {
    origin: null,
    destination: null,
    travelTimeInformation: null
};

export const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers: {
        setOrigin: (state, action: PayloadAction<any>) => {
            state.origin = action.payload;
        },
        setDestination: (state, action: PayloadAction<any>) => {
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state, action: PayloadAction<any>) => {
            state.travelTimeInformation = action.payload;
        },
    },
});

export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions;

// Selectors
export const selectOrigin = (state: { nav: NavState }) => state.nav.origin;
export const selectDestination = (state: { nav: NavState }) => state.nav.destination;
export const selectTravelTimeInformation = (state: { nav: NavState }) => state.nav.travelTimeInformation;

// The reducer
export default navSlice.reducer;
