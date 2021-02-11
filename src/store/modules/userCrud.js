import firebase from '../../utils/firebase'
export default {
    state() {
        return {
            testField: 'I am not changed',
            inputUserData: {
                name: "",
                email: "",
                avatar: "",
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
              }
        }
    },
    mutations: {
        setTestField(state,test) {
            console.log('I am working fine without explict mention');
            state.testField = test
        },
        setInputFieldEmpty(state) {
            state.inputUserData.name = ''
            state.inputUserData.email = ''
            state.inputUserData.avatar = ''
        }
    }
}