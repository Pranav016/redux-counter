import {createStore} from 'redux'

export const ACTIONS = {
    'INC': 'increment',
    'DEC': 'decrement'
}

const counterReducer =(state={counter:0}, action)=>{
    if (action.type === ACTIONS.INC) {
        return {
            counter: state.counter + 1
        }
    }
    else if (action.type === ACTIONS.DEC){
        return {
            counter: state.counter -1
        }
    }
    return state
}

export const store = createStore(counterReducer)
