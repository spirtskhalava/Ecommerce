<template>
<div>
    <Notification v-for="item in notifications" :key="item.title"   :notification="item"/>
</div>
</template>
<script>
import Notification from '@/components/FormControls/Notification.vue';
import {mapGetters} from 'vuex';
export default{
  
    components:{
        Notification
    },
    computed:{
      ...mapGetters({
  notifications:'Notification/List'   
  }),
    }
    
};
</script>