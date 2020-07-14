import axios from '../axios/axios'

//current US data
const _getUSData = (data) =>({
    type: 'GET_US',
    data
})



export const getUSData = () =>{
   return (dispatch) =>{
    return axios.get('/us')
        .then(res => {
            dispatch(_getUSData(res.data[0]))
        })
    }
}

//states informations
const _getState = (data) =>({
    type: 'GET_STATE',
    data
})

export const getStatesInformation = () =>{
    return(dispatch) =>{
        return axios.get('/states/info')
            .then(res =>{
                dispatch(_getState(res.data))
            })
            
    }
}

//current states data
const _getStatesCurrent = (data) =>({
    type: 'STATES_CURRENT',
    data
})

export const getStatesCurrent = () =>{
    return(dispatch) =>{
        return axios.get('/states')
            .then(res =>{
                dispatch(_getStatesCurrent(res.data))
            })
            
    }
}


//daily states data from the start
const _usDaily = (data) =>({
    type: 'US_DAILY',
    data
})

export const getUSDaily = () =>{
    return(dispatch) =>{
        return axios.get('/us/daily')
            .then(res =>{
                dispatch(_usDaily(res.data))
            })
            
    }
}

