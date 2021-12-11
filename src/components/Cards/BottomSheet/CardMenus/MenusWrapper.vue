<template>
    <div class="d-flex text-center px-2 py-4">
        <card-menu @click.native="changeFreezedStatusOfActiveCard" icon="freeze" :title="isFreezed ? 'Unfreeze card' :'Freeze card' "/>
        <card-menu icon="spend_limit" title="Set spend limit"/>
        <card-menu icon="gpay" title="Add to GPay"/>
        <card-menu icon="replace_card" title="Replace Card"/>
        <card-menu @click.native="onRemoveClick" icon="cancel_card" title="Cancel Card"/>
        
    </div>
</template>

<script>
import CardMenu from "./_Menu.vue"
import { mapActions, mapGetters  } from "vuex";

export default {
    name: "MenusWrapper",
    components: {
        CardMenu
    },
    computed: {
        ...mapGetters([
            'isFreezed',
        ])
    },
    methods: {
        ...mapActions({
            removeSelectedCard: "removeSelectedCard",
            changeFreezedStatusOfActiveCard: "changeFreezedStatusOfActiveCard"
        }),

        onRemoveClick() {
            this.$swal.fire({
                title: 'Do you want to remove the card?',
                showCancelButton: true,
                confirmButtonText: 'Yes',
            }).then((result) => {
                if (result.isConfirmed) {
                    this.removeSelectedCard();
                }
            })
        }
    }
}
</script>