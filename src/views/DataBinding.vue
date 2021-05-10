<template>
  <div>
    <div>
      <input type="text" v-model="data" placeholder="Input text here" />
      <h1>{{ data }}</h1>
    </div>
    <div class="wrapper">
      <div class="box" :style="{ 'background-color': color }"></div>
      <br />
      <button @click="changeColor('red')">Red</button>
      <button @click="changeColor('yellow')">Yellow</button>
      <button @click="changeColor('blue')">Blue</button>
      <button @click="changeColor('green')">Green</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Data Binding",

  data() {
    return {
      data: "",
      color: "red",
    };
  },

  methods: {
    changeColor(color) {
      this.color = color;
    },
  },
};
</script>