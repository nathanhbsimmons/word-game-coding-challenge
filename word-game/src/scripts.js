
import fire from './firebase/firebase';

const gameRef = fire.database().ref("/games");
const dbUser = fire.database().ref('/users');

export const createUser=(user)=>{
    dbUser.update({"username": user})
}

export const createGame=(user)=>{
    
    let currentGame = {
        creator: {uid: user.uid, displayName: user.displayName},
        // state: STATE.OPEN
    }
    gameRef.push().set(currentGame)
}

export const checkLetters = (word, props) => {
    let validWord = true

    for(let i=0; i <= word.length - 1; i++){  
        if(props.letters.toString().split(word[i]).length - 1 === 0){
            validWord = false
        }
    }
    return validWord
}

