export default function (next,store) {
    if(!store.state.isLoggedIn) {
        next("/")
    } else {
        next()
    }
    // console.log('from middleware');
}