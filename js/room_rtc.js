const App_ID = "86c94f96c02046b4b0a169dbeaa24e06"

let uid = sessionStorage.getItem('uid')
if(!uid){
    uid = String(Math.floor(Math.random() * 10000))
    sessionStorage.setItem('uid', uid)
}

let token = null;
let client;

//room.html?room=234

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)

let roomId = urlParams.get('room')


if(!roomId){
    roomId = 'main'
}


let localTracks = []

let remoteUsers = {}