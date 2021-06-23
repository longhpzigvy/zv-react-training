import { createSlice } from '@reduxjs/toolkit'

export const StatusFilters = {
    All: 'all',
    Active: 'active',
    Completed: 'completed'
}

const initialState = {
    status: StatusFilters.All
}

const filtersSlice = createSlice({

    name: 'filters',
    initialState,
    reducers: {
        statusFiltersChanged(state, active) {
            return { ...state, status: active.payload }
        }
    }
})

export const { statusFiltersChanged}= filtersSlice.actions
export default filtersSlice.reducer