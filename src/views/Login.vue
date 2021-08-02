<template>
  <div class="container mt-3">
    <form @submit.prevent="handleForm" action="">
      <div class="mb-3">
        <input
          type="email"
          required
          v-model="user.email"
          placeholder="email"
          class="form-control"
          id="email"
        />
      </div>
      <div class="mb-3">
        <input
          type="password"
          required
          v-model="user.password"
          placeholder="password"
          class="form-control"
          id="password"
        />
      </div>
      <button type="submit" :disabled="!isFormValid" class="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    };
  },
  computed: {
    isFormValid() {
      return this.isValid('password') && this.isValid('email');
    }
  },
  methods: {
    isValid(prop) {
      switch (prop) {
        case 'email':
          return this.user.email !== '';
        case 'password':
          return this.user.password.length >= 6;
        default:
          return false;
      }
    },
    handleForm() {
      if (
        this.user.email == 'sandro1211@gmail.com' &&
        this.user.password == '1234567'
      ) {
        alert('logged in');
        this.$router.push('/Home');
      }
    }
  }
};
</script>
