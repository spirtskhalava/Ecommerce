<template>
    <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <img src="" class="rounded mr-2" alt="...">
    <strong class="mr-auto">{{notification.title}}</strong>
    <small>11 mins ago</small>
    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="toast-body" v-html="notification.content">
  </div>
</div>
</template>
<script>
export default{
 props: {
    notification: {
      type: Object,
      required: true
    }
  }
};
</script>