export const showItems = (state = [],action) => {
    switch(action.type){
        case 'ADD_ITEM':
            if(!state.includes(action.payload)){
                return state.concat([action.payload])
            }
            else {
                return;
            }
        case 'DELETE_ITEM':
            return state.filter(el => el !== action.payload)
        default:
            return state;
    }
}