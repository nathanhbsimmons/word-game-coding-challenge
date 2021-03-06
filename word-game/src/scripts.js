
import fire from './firebase/firebase';

export const gameRef = fire.database().ref("/games");
export const dbUser = fire.database().ref('/games/game/users');
export const dbUserWords = fire.database().ref('/games/game/user');
export const dbLetters = fire.database().ref('/games/game/letters'); 
export const dbWordsUsed = fire.database().ref('/words').child('used');


export const createUser=(user)=>{
    dbUser.update({"username": user})
}

export const createGame=(user)=>{
    
    let currentGame = {
        game: {user: {user: user, words: ""}},
    }
    gameRef.set(currentGame)
    dbWordsUsed.set('')
}

export const updateDB=(word)=>{
    dbWordsUsed.push(word)
    dbUserWords.child('words').push(word)
}

export const checkForWinner=()=>{
    
    let userWordsArr
    let fakeUserWordsArr1 = ["dog", "cat"]
    let fakeUserWordsArr2 = ["run", "hide", "seek"]

    dbUserWords.child('words').once('value', snap =>{
        let user
        userWordsArr = Object.values(snap.val())
        console.log(userWordsArr)
      if(userWordsArr.length > fakeUserWordsArr1.length && userWordsArr.length > fakeUserWordsArr2.length){
            return dbUserWords.child('user').once('value', snap =>{
                user = Object.values(snap.val())
                console.log(user.toString())
                return user.toString()
            })
        } else {
            return
        }
    })

}


export const generateLetters=()=>{
    let vowelArr = [];
    let consArr = [];
    let anyArr = []

    const possibleVowels = "AEIOU";
    const possibleCons = "BCDFGHJKLMNPQRSTVWXYZ";
    const possibleAll = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < 2; i++) {
      vowelArr.push(possibleVowels.charAt(Math.floor(Math.random() * possibleVowels.length)));
    }
    for (let i = 0; i < 2; i++) {
      consArr.push(possibleCons.charAt(Math.floor(Math.random() * possibleCons.length)));
    }
    for (let i = 0; i < 5; i++) {
      anyArr.push(possibleAll.charAt(Math.floor(Math.random() * possibleAll.length)));
    }
    dbLetters.set(consArr.concat(anyArr, vowelArr))
    return consArr.concat(anyArr, vowelArr)
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

