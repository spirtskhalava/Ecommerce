<template>
  <div class="container mt-3">
    <form>
      <div class="mb-3">
        <input
          type="text"
          required
          placeholder="Firstname"
          class="form-control"
        />
      </div>
      <div class="mb-3">
        <input
          type="text"
          required
          placeholder="Lastname"
          class="form-control"
        />
      </div>
      <div class="mb-3">
        <input
          type="email"
          required
          placeholder="email"
          class="form-control"
        />
      </div>
      <div class="mb-3">
        <input
          type="password"
          required
          placeholder="password"
          class="form-control"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>