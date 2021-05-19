import router from './router'
import store from './store/index'
router.beforeEach((to, from, next) => {
    const toPath = to.path.length
    const fromPath = from.path.length
    if (to.path == "/home") {
        store.dispatch("setTransionName", 'slide-right');
        // this.direction = "slide-right";
    } else if (from.path == "/home") {
        store.dispatch("setTransionName", 'slide-left');
        // this.direction = "slide-left"; 
    }else{
        store.dispatch("setTransionName", toPath < fromPath ? "slide-right" : "slide-left");
        // this.direction = toDepth < fromDepth ? "slide-right" : "slide-left";
    }
    next()
})
router.afterEach((to,from) => {
    
})