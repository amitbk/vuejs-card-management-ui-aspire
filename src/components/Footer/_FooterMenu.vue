<template>
    <router-link :to="to">
        <div class="footer__wrapper px-2">
            <img :src="getIcon" alt="" class="mb-1" :fill="'#FFF'">
            <div class="footer__label">
                {{ title }}
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    name: "FooterMenu",
    props: {
        title: String,
        to: String,
        icon: String
    },
    computed: {
        getIcon: function() {
            return require("@/assets/"+this.icon+".svg");
        },
    }
}
</script>

<style scoped>
    .footer__wrapper {
        color: #ccc;
    }
    .footer__label {
        font-size: 8px;
    }
    .footer__icon {
        font-size: 18px;
    }
    a {
        text-decoration: none;
    }

    /* active link */
    .router-link-exact-active .footer__label, .router-link-exact-active .footer__icon  {
        color: #000;
    }
</style>