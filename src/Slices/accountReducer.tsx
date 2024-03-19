import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    bal: 0,
    loan: 0,
    reason: ''
}

const accountReducer = createSlice({
    name: 'account',
    initialState,
    reducers: {
        depositAmount(state, action) {
            state.bal += action.payload;
        },
        withdrawAmount(state, action) {
            state.bal -= action.payload;
        }
    }
})

export const { depositAmount, withdrawAmount } = accountReducer.actions;

export default accountReducer.reducer;

/*
export default function accountReducer(state = initialAccountState, action: any) {
    switch (action.type) {
        case 'deposit': return { ...state, bal: state.bal + action.bal };
        case 'withdraw': return { ...state, bal: state.bal - action.bal };
        case 'loan': return { ...state, bal: state.bal + action.loan, loan: action.loan, reason: action.reason };

        default: return state;

    }
}

export function depositAmount(amount: number) {
    return { type: 'deposit', bal: amount }
}

export function withdrawAmount(amount: number) {
    return { type: 'withdraw', bal: amount }
}

export function requestLoan(amount: number, purpose: string) {
    return { type: 'loan', loan: amount, reason: purpose }
}
*/