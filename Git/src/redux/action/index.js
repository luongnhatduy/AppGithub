import{DATA_REPOS,PAGE} from './actionTypes'
export const Datarepos = inputdt => {

  return {
    type:DATA_REPOS,
    taskdatarepos:  inputdt
  };
};
export const Page = inputpage => {
  
  return {
    type:PAGE,
    taskpage: inputpage
  };
};



