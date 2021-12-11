import { mapState } from "vuex";
export const cardMixin = {
    computed: {
        ...mapState({
            cards: state => state.cards,
            card: state => state.card,
            selectedCard: state => state.selectedCard,
        })
    }
};