import firebase from 'firebase'

class Fire{
    constructor(){
        this.init()
        this.checkAuth()
    }

    init=()=>{
        if (!firebase.apps.length){
            firebase.initializeApp({
                apiKey: "AIzaSyAHIYSZ_03GLx0zJzps5xQbzXlPv_Gq_b8",
                authDomain: "chatapp-885e5.firebaseapp.com",
                databaseURL: "https://chatapp-885e5.firebaseio.com",
                projectId: "chatapp-885e5",
                storageBucket: "chatapp-885e5.appspot.com",
                messagingSenderId: "321800927242",
                appId: "1:321800927242:web:617c16915aaace327287f3"
            })
        }
    }

    checkAuth=()=>{
        firebase.auth().onAuthStateChanged(user =>{
            if(!user){
                firebase.auth().signInAnonymously();
            }
        })
    }

    send = messages =>{
        messages.forEach(item => {
            const message = {
                text: item.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: item.user,
            }
            this.db.push(message)
        });
    }

    parse = message =>{
        const {user, timestamp, text} = message.val()
        const {key: _id} = message
        const createdAt = new Date(timestamp)

        return {
            _id,
            createdAt,
            text,
            user,

        }
    }

    get = callback =>{
        this.db.on('child_added',snapshot => callback(this.parse(snapshot)))
    }

    off (){
        this.db.off()
    }

    get db(){
        return firebase.database().ref('messages')
    }

    get uid(){
        return (firebase.auth().currentUser || {}).uid
    }
}

export default new Fire();