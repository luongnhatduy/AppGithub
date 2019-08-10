import {
 DATA_REPOS,PAGE,USER,STAR,PAGE_REPO,DATA_DETAIL_REPOS
} from '../action/actionTypes';

const initialState = {
  task: [],
};

export const taskReducers = (state = initialState, action) => {
  switch (action.type) {
    case DATA_REPOS:
      return {
        ...state,
        taskdatarepos: action.taskdatarepos,
      };
    case DATA_DETAIL_REPOS:
      return {
        ...state,
        taskdatadetailrepos: action.taskdatadetailrepos,
      };  
    case PAGE:
      return {
        ...state,
        taskpage: action.taskpage ,
      };
    case USER:
      return {
        ...state,
        taskuser: action.taskuser ,
      };  
    case STAR:
      return {
        ...state,
        taskstar: action.taskstar,
      };        
      case PAGE_REPO:
        return {
          ...state,
          taskpagerepo: action.taskpagerepo,
        };         
    default:
      return state;
  }
};
