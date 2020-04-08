<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <input type="file" @change="change" />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  components: {},
  methods: {
    change(e) {
      console.log(e);
      var file = e.target.files[0];
      this.file = file;
      const formData = new FormData();
      formData.append("filea", file);
      axios.post("http://localhost:3000/upload", formData).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
