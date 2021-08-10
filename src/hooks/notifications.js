import { useStore } from "vuex";
export default function usenotifications() {

    const store = useStore();

    const addSuccessNotification = notification => store.dispatch('Notifications/add', {...notification, type: 'success' });
    const addErrorNotification = notification => store.dispatch('Notifications/add', {...notification, type: 'error' });

    return {
        addErrorNotification,
        addSuccessNotification
    };

}