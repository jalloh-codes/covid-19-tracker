const usReducer = []
const statesInformationReducer = []
const stateCurrentReducer = []
const usDailyReducer = []

export function usData(state = usReducer, action){
    switch(action.type){
        case 'GET_US':
            return action.data
        default:
            return state;
    }
}
export function statesInformation(state = statesInformationReducer, action){
    switch(action.type){
        case 'GET_STATE':
            return action.data
        default:
            return state;
    }
}

export function statesCurrent(state = stateCurrentReducer, action){
    switch(action.type){
        case 'STATES_CURRENT':
            return action.data
        default:
            return state;
    }
}

export function usDaily(state = usDailyReducer, action){
    switch(action.type){
        case 'US_DAILY':
            return action.data
        default:
            return state;
    }
}

