<template>
  <div class="container">
    <form @submit.prevent="">
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Password" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Todos',
  data() {
    return {
      todo: '',
    };
  },
};
</script>

<style>
.container {
  max-width: 1190px;
  width: 100%;
  margin: 0 auto;
}
</style>
