import { createStore } from "redux";
function demoReducer(state, action){
    if(action.type == 'add_item'){
        return [...state ,{name : action.itemName, quantity : action.quantity}]
    }
    return state;
}

const initialState = [{name : 'apple'}, {name : 'rice'}];
const store = createStore(demoReducer, initialState);
console.log(store.getState());

// the only way to Update the Store is by dispatching an action 
store.dispatch({
    type : 'add_item',
    itemName : 'Banana',
    quantity : 1,
});

store.dispatch({
    type : 'add_item',
    itemName : 'Mango',
    quantity : 2,
});

// It is Problematic when we change one line by line ode in every dispatch mthod 
console.log(store.getState());
