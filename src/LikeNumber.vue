<template>
  <div>
    <p>いいね {{ number }}</p>
    <button @click="increment">増やす</button>
  </div>
</template>

<script>
export default {
  name: "LikeNumber",
  data() {
    return {
      number: 5,
    };
  },
  methods: {
    increment() {
      this.number += 1;
    },
    decrement() {
      this.number -= 1;
    },
  },
};
</script>
