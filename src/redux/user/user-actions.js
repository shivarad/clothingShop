import UserActionTypes from './user-action-types';

 const SetCurrentUser =user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload:user
})

export default SetCurrentUser;