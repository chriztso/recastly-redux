import Redux from 'redux';

var currentVideoReducer = (state, action) => {
  switch(action.type){
    case 'CHANGE_VIDEO':
    return action.video;
    default: 
     return null
  }
  //TODO: define a reducer for the currentVideo field of our state.
};

export default currentVideoReducer;
