import UserActionTypes from './user-action-types';

 export const SetCurrentUser =user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload:user
})

export const emailSiginStart=(EmailAndPassword)=>({
    type:UserActionTypes.EMAIL_SIGN_IN_START,
    payload:EmailAndPassword
});

export const emailSiginSuccess=(user)=>({
    type:UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
    payload:user
})

export const emailSiginFailure=(error)=>({
    type:UserActionTypes.EMAIL_SIGN_IN_FAILURE,
    payload:error
})

export const googleSiginStart=()=>({
    type:UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const googleSiginSuccess=(user)=>({
    type:UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
    payload:user
})

export const googleSiginFailure=(error)=>({
    type:UserActionTypes.GOOGLE_SIGN_IN_FAILURE,
    payload:error
})