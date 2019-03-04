import firebase from '@firebase/app';
import '@firebase/database';
import '@firebase/auth';

import {
    POSTING_UPDATE,
    POSTING_CREATE,
    GETLIST_SUCCESS,
    GETLIST_SUCCESS2
} from './types'

export const postingUpdate = (prop, value) => {
    return {
        type: POSTING_UPDATE,
        payload: { prop, value }
    };
};

export const postingCreate = (data) => {
    
    return (dispatch) => {
        firebase.database().ref(`/users/timeline`)
        .push(data)
        .then(() => {
            dispatch({ type: POSTING_CREATE });
        });
    };
}

export const postingCreate2 = (data) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/profile`)
        .push(data)
        .then(() => {
            dispatch({ type: POSTING_CREATE });
        });
    };
}

export const getAllPost = () => {
    return (dispatch) => {
        firebase.database().ref('/users/timeline')
        .on('value', snapshot => {
            dispatch({ 
                type: GETLIST_SUCCESS, 
                payload: snapshot.val()
            });
        });
        
    };
};

export const getAllPostMine = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/profile`)
        .on('value', snapshot => {
            dispatch({ 
                type: GETLIST_SUCCESS2, 
                payload: snapshot.val()
            });
        });
        
    };
};

// export const postingCreate2 = (data) => {
//     const { currentUser } = firebase.auth();
//     return (dispatch) => {
//         firebase.database().ref(`/users/${currentUser.uid}/profile`)
//         .push(data)
//         .then(() => {
//             dispatch({ type: POSTING_CREATE });
//         });
//     };
// }

export const employeeSave2 = (caption , link , uid , email) => {
    return(dispatch) => {
        const { currentUser } = firebase.auth();
        firebase.database().ref(`/users/${currentUser.uid}/profile/${uid}`)
        .set({ caption , link , email})
        .then(() => {
            dispatch({ type: POSTING_UPDATE })
        })
    }
}

// export const employeeSave = (caption , link , uid , email) => {
//     return(dispatch) => {
        
//         firebase.database().ref(`/users/timeline/${uid}`)
//         .set({ caption , link , email})
//         .then(() => {
//             dispatch({ type: POSTING_UPDATE })
//         })
//     }
// }

export const employeeSave = (caption , link , uid , email) => {
    return(dispatch) => {
        firebase.database().ref(`/users/timeline/${uid}`)
        .set({ caption , link , email})
        .then(() => {
            dispatch({ type: POSTING_UPDATE })
        })
    }
}

export const employeeDelete2 = (uid) => {
    return (dispatch) => {
        const { currentUser } = firebase.auth();
        firebase.database().ref(`/users/${currentUser.uid}/profile/${uid}`)
        .remove()
        .then(() => {
            dispatch({ type: POSTING_UPDATE });
        });
    };
};

export const employeeDelete = (uid) => {
    return (dispatch) => {
        firebase.database().ref(`/users/timeline/${uid}`)
        .remove()
        .then(() => {
            dispatch({ type: POSTING_UPDATE });
        });
    };
};

