export default function (next,store) {
    if(!store.state.isLoggedIn) {
        next("/")
        store.commit('setLoginModal',true)
    } else {
        next()
    }
    // console.log('from middleware');
}