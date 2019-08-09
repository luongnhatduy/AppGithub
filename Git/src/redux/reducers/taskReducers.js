import {
 DATA_REPOS,PAGE
} from '../action/actionTypes';

const initialState = {
  task: [],
};

export const taskReducers = (state = initialState, action) => {
  switch (action.type) {
    case DATA_REPOS:
      //console.log(state.taskdatarepos,'reducrer')
      return {
        ...state,
        taskdatarepos: action.taskdatarepos,
      };
      case PAGE:
      
      return {
        ...state,
        taskpage: action.taskpage ,
      };
    default:
      return state;
  }
};
