<template>
    <!-- <router-link :to="to"> -->
        <div class="card-option__wrapper px-2">
            <!-- <i class="card-option__icon fas fa-home mb-1"></i>  -->
            <img :src="getIcon" alt="" class="mb-1" style="color: red">
            <div class="card-option__label">
                {{ title }}
            </div>
        </div>
    <!-- </router-link> -->
</template>

<script>
export default {
    name: "CardMenu",
    props: {
        title: String,
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
    .card-option__wrapper {
        color: #325baf;
    }
    .card-option__label {
        font-size: 11px;
        font-weight: bold;
        line-height: 1.2;
    }
    .card-option__icon {
        font-size: 15px;
        border-radius: 100px;
        background: #325baf;
        padding: 7px;
        color: #b3cdf7;
    }
    a {
        text-decoration: none;
    }

    /* active link */
    .router-link-exact-active .card-option__label, .router-link-exact-active .card-option__icon  {
        color: #000;
    }
</style>