import router from '@system.router';
export default {
    data: {
        title: 'World'
    },
    thirdPage: function() {
        router.push({
            uri:'pages/showPage/showPage'
        });
    },
}