<template>
    <div class="d-flex justify-content-around text-center px-2 py-4">
        <card-menu icon="freeze" title="Freeze Card"/>
        <card-menu icon="spend_limit" title="Set spend limit"/>
        <card-menu icon="gpay" title="Add to GPay"/>
        <card-menu icon="replace_card" title="Replace Card"/>
        <card-menu icon="cancel_card" title="Cancel Card"/>
        
    </div>
</template>

<script>
import CardMenu from "./_Menu.vue"
export default {
    name: "MenusWrapper",
    components: {
        CardMenu
    }
}
</script>