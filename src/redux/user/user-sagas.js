import {takeLatest,call,all, put} from 'redux-saga/effects';
import UserActionTypes from './user-action-types';
import {auth,googleProvider,createUserProfileDocument} from '../../firbase/firebase.uttils';
import {googleSiginFailure,googleSiginSuccess} from './user-actions';

export function* signinWithGoogle(){
    try{
        const {user}=yield auth.signInWithPopup(googleProvider);
        const userRef=yield call(createUserProfileDocument,user);
        const userSnapshot=userRef.get();
        yield put(googleSiginSuccess({id:userSnapshot.id,...userSnapshot.data()}));
    }
    catch(error){
        put(googleSiginFailure(error))
    }
}

export function* onGoogleSignInStart(){
    yield takeLatest (UserActionTypes.onGoogleSignInStart)
}


export function* userSagas(){
    yield all([call(onGoogleSignInStart)])
}