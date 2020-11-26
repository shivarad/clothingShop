import {takeLatest,put,call,all} from 'redux-saga/effects';
import UserActionTypes from './user-action-types';
import {auth,googleProvider,createUserProfileDocument,getCurrentUser} from '../../firbase/firebase.uttils';
import {signinSuccess,signinFailure,signOutFailure,signOutSuccess,signUpFailure,signUpSuccess} from './user-actions';

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
    try {
      const userRef = yield call(
        createUserProfileDocument,
        userAuth,
        additionalData
      );
      const userSnapshot = yield userRef.get();
      yield put(signinSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch (error) {
      yield put(signinFailure(error));
    }
  }

export function* signinWithGoogle(){
    try{
        const {user}=yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    }
    catch(error){
        put(signinFailure(error))
    }
}

export function* signinWithEmail({payload:{email,password}}){
    try{
        const {user}=yield auth.signInWithEmailAndPassword(email,password);
        yield getSnapshotFromUserAuth(user);
    }
    catch(error){
        put(signinFailure(error))
    }
}

export function* isUserAuthenticated(){
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
      } catch (error) {
        yield put(signinFailure(error));
      }
}

export function* signOut() {
    try {
      yield auth.signOut();
      yield put(signOutSuccess());
    } catch (error) {
      yield put(signOutFailure(error));
    }
  }

  export function* signUp({ payload: { email, password, displayName } }) {
    try {
      const { user } = yield auth.createUserWithEmailAndPassword(email, password);
      yield put(signUpSuccess({ user, additionalData: { displayName } }));
    } catch (error) {
      yield put(signUpFailure(error));
    }
  }
  
  export function* signInAfterSignUp({ payload: { user, additionalData } }) {
    yield getSnapshotFromUserAuth(user, additionalData);
  }
  
export function* onGoogleSignInStart(){
    yield takeLatest (UserActionTypes.GOOGLE_SIGN_IN_START,signinWithGoogle);
}

export function* onEmailSigninStart(){
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START,signinWithEmail);
}


export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
  }
export function* onCheckUserSession(){
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION,isUserAuthenticated);
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* userSagas(){
    yield all([call(onGoogleSignInStart),
            call(onEmailSigninStart),
            call(isUserAuthenticated),
            call(onSignOutStart),
            call(onSignUpStart),
            call(onSignUpSuccess)
        ])
}