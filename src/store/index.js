import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    card: {name: '', number: ''},
    selectedCard: 0,
    cards: [
      {id: Date.now(), name: "Amit Kadam", number: "1010"},
      {id: Date.now()+1, name: "Prajakta Kadam", number: "1010"},
    ]
  },
  mutations: {
    ADD_NEW_CARD(state, card) {
      state.cards.push(card)
    },
    UPDATE_CARD(state, card) {
      const index = state.cards.findIndex(ad => ad.id === card.id);
      state.cards.splice(index, 1, card);
    },
    CLEAR_CARD(state, index) {
      state.card = {name: '', number: ''};
    },
    REMOVE_SELECTED_CARD(state) {
      state.cards.splice(state.selectedCard, 1);
    },
    CHANGE_SELECTED_CARD(state, index) {
      state.selectedCard = index;
    },
  },

  getters: {
    isFreezed: (state, getters) => {
      return !!state.cards[state.selectedCard].freezed;
    }
  },


  actions: {
    addCard(context) {
      let card = context.state.card;
      card.id = Date.now();
      card.number = "0000 0000 000 0101";
      card.cvv = "456";
      card.expiry = "10/11";
      card.freezed = false;
      context.commit("ADD_NEW_CARD", card)
      context.commit("CLEAR_CARD");
    },
    updateCard(context, card) {
      context.commit("UPDATE_CARD", card)
    },
    changeFreezedStatusOfActiveCard(context) {
      let card = context.state.cards[context.state.selectedCard];
      card.freezed = !card.freezed;
      console.log(card);
      context.commit("UPDATE_CARD", card)
    },
    removeSelectedCard(context) {
      context.commit("REMOVE_SELECTED_CARD")
      
      let changeTo = 0;
      context.commit("CHANGE_SELECTED_CARD", changeTo)
      this.$refs.carousel.goTo(changeTo)
    },
    changeSelectedCard(context, index) {
      context.commit("CHANGE_SELECTED_CARD", index)
    }
  },
  modules: {
  }
})
