export const StatusFilters = {
    All: 'all',
    Active: 'active',
    Completed: 'completed'
}

const initialState = {
    status: StatusFilters.All,
}


export default function filtersReducer(state = initialState, action) {
    switch (action.type) {
        case 'filters/statusFiltersChanged': {
            return { ...state, status: action.payload }
        }
        case 'filters/searchFilterChanged': {
            return { ...state, name: action.payload }
        }
        default:
            return state
    }
}

export const statusFiltersChanged = payload => {
    return { type: 'filters/statusFiltersChanged', payload }
}

export const searchFilterChanged = payload => {
    return { type: 'filters/searchFilterChanged', payload }
}