import{DATA_REPOS,PAGE,USER,STAR,PAGE_REPO,DATA_DETAIL_REPOS} from './actionTypes'
export const Datarepos = inputdt => {

  return {
    type:DATA_REPOS,
    taskdatarepos:  inputdt
  };
};

export const Datadetailrepos = inputdtrp => {

  return {
    type:DATA_DETAIL_REPOS,
    taskdatadetailrepos:  inputdtrp
  };
};

export const Page = inputpage => {
  return {
    type:PAGE,
    taskpage: inputpage
  };
};

export const Page_repo = inputpagerepo => {
  return {
    type:PAGE_REPO,
    taskpagerepo: inputpagerepo
  };
};

export const User = inputuser => {
  return {
    type:USER,
    taskuser: inputuser
  };
};

export const Star = inputstar => {
  return {
    type:STAR,
    taskstar: inputstar
  };
};


