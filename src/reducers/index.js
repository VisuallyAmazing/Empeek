import { combineReducers } from 'redux';
import { showItems as showItemsReducer } from './showItems';
import { showComments as commentsReducer} from './showComments';
import { commentIndex as indexReducer } from './commentIndex';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    showItems : showItemsReducer,
    form:formReducer,
    comments:commentsReducer,
    index: indexReducer

});

export default rootReducer;
