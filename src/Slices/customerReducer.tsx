import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    fullName: '',
    gender: ''
}

const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        addCustomer: {
            prepare(name, gender) {
                return { payload: { name, gender } }
            },
            reducer(state, action) {

            }
        }
    }
})

export const { addCustomer } = customerSlice.actions;

export default customerSlice.reducer;

/*
export default function customerReducer(state = initialCustomerState, action: any) {
    switch (action.type) {
        case 'add': return { ...state, fullName: action.name, gender: action.gender };
        case 'update': return { ...state, fullName: action.name };
        default: return state;
    }
}

export function addCustomer(fullname: string, genz: string) {
    return { type: 'add', name: fullname, gender: genz }
}

export function updateCustomer(fullname: string) {
    return { type: 'add', name: fullname }
}
*/