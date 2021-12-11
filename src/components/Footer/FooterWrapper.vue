<template>
  <div class="footer__wrapper fixed-bottom p-1 border-top text-center bg-white">
      <div class="d-flex justify-content-around">

        <footer-menu icon="f_logo" to="/" title="Home"/>
        <footer-menu icon="f_cards" to="/cards" title="Cards"/>
        <footer-menu icon="f_payments" to="/payments" title="Payments"/>
        <footer-menu icon="f_credits" to="/credit" title="Credit"/>
        <footer-menu icon="f_profile" to="/profile" title="Profile"/>

      </div>

    </div>
</template>

<script>
import FooterMenu from "./_FooterMenu.vue"
export default {
  name: 'FooterWrapper',
  components: {
    FooterMenu
  },
}
</script>

<style scoped>
  .footer__wrapper {
    width: 400px;
    margin: 0 auto;
  }
</style>
