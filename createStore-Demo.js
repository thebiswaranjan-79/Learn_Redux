import { createStore } from "redux";
function demoReducer(state, action){
    if(action.type == 'add_item'){
        return [...state ,{name : action.itemName, quantity : action.itemQuantity}]
    }
    return state;
}

// These function's are called as Action Creators
const add_item = (name, quantity) => ({
    type : 'add_item',
    itemName : name, 
    itemQuantity : ((quantity) ? quantity : 1)
});

const initialState = [{name : 'apple', quantity:6}, {name : 'rice'}];
const store = createStore(demoReducer, initialState);
store.subscribe(()=> console.log("State might Change"));  

console.log(store.getState());

// the only way to Update the Store is by dispatching an action 
store.dispatch(add_item('Banana'));

store.dispatch(add_item('Mango', 4));

// It is Problematic when we change one line by line ode in every dispatch mthod 
console.log(store.getState());
