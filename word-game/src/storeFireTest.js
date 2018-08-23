
// import { createStore, combineReducers, compose } from 'redux'
// import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
// import state from "./state";
// import reducers from "./reducers";
// import firebase from 'firebase';
// import fire from './firebase/firebase'

// const firebaseConfig = {}

// // react-redux-firebase config
// const rrfConfig = {
//   userProfile: 'users',
//   // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
// }

// // Initialize firebase instance
// fire(firebaseConfig)

// const rootReducer = combineReducers({
//     firebase: firebaseReducer,
//       reducers
//     // firestore: firestoreReducer // <- needed if using firestore
//   })
// // Initialize other services on firebase instance
// // firebase.firestore() // <- needed if using firestore
// // firebase.functions() // <- needed if using httpsCallable
// // var store = createStore(reducers,state,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// // Add reactReduxFirebase enhancer when making store creator
// const createStoreWithFirebase = compose(
//   reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
//   // reduxFirestore(firebase) // <- needed if using firestore
// )(createStore(rootReducer,state,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

// // Add firebase to reducers




// export default createStoreWithFirebase;