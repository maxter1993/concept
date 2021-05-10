<template>
  <div>
    <div v-for="(color, index) in colors" :key="index">
      <Box :color="color" />
    </div>

    <HelloWorld msg="Welcome to the Component Page" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld";
import Box from "@/components/Box";

export default {
  name: "Component",

  components: {
    HelloWorld,
    Box,
  },

  data() {
    return {
      colors: ["red", "green", "blue", "yellow", "grey"],
    };
  },
};
</script>