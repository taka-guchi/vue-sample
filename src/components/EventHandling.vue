<template>
  <p>{{ message }}</p>
  <button v-on:click='reverseMessage'>Reverse Message</button>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Vue.js!'
    }
  },
  methods: {
    reverseMessage() {
      this.message = this.message
        .split('')
        .reverse()
        .join('')
    }
  }
}
</script>

