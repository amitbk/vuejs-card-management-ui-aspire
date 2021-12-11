<template>
  <div id="app">
    <div>
      <router-view/>
    </div>

    <footer-wrapper/>
  </div>
</template>

<script>

import FooterWrapper from "../src/components/Footer/FooterWrapper.vue";

export default {

  components: {
    FooterWrapper
  }
}
</script>
<style>

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 12px;

  width: 400px!important;
  margin: 0 auto;
}
body {
  background: #e0f3eb!important;
}
.f-12 {
  font-size: 12px!important;
}
.f-20 {
  font-size: 20px!important;
}

/* background */

.bg-green {
  background: #01d167;
}

/* text colors */

.text-green {
  color: #01d167;
}
.text-grey {
  color: #778fa3 !important;
}
.text-blue-1 {
  color: #0c365a;
}
.text-blue-2 {
  color: #355eb0;
}


</style>
