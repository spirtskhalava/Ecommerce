let id = 1;

export default {
    namespaced: true,
    state: {
        notifications: [{
            id: 1,
            title: 'test',
            type: 'default',
            content: 'welcome<h1>console.log("hello");</h1>',
            image: ''
        }]

    },

    mutations: {

        add(state, notification) {

            state.notifications.unshift(notification);

        },
        dismiss(state, notificationId) {
            state.notifications = state.notifications.filter(item => item.id !== notificationId);
        }

    },
    getters: {
        List(state) {
            return state.notifications;
        }
    },
    actions: {
        add(context, notification) {
            const notificationId = ++id;
            context.commit('add', {...notification, id: notificationId });
            setTimeout(() => {
                context.commit('dismiss', notificationId);
            }, 5000);

        }

    }


};