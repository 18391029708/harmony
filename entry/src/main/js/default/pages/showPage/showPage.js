import router from '@system.router';
export default {
    change: function(e) {
        console.log("Tab index: " + e.index);
//        router.push({
//            uri:'pages/secondPage/secondPage'
//        })
    },
    detial:function(e){
router.push({
                uri:'pages/secondPage/secondPage'
            })
    }
}