<template>
  <div class="wrapper">
    <div class="box" :style="{ 'background-color': color }"></div>
    <h3>{{ generateMessage }}</h3>
  </div>
</template>

<script>
export default {
  name: "Box",

  props: {
    color: String,
  },

  computed: {
    generateMessage() {
      return "This is a " + this.color + " box!";
    },
  },
};
</script>