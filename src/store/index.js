import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { getRandomNumber } from "../utils"
export default new Vuex.Store({
  state: {
    card: {name: '', number: ''},
    selectedCard: 0,
    cards: [
      {id: Date.now(), name: "Amit Kadam", number: "1234567890123456", expiry: "09/12", cvv: "456"},
      {id: Date.now()+1, name: "Rahul Kadam", number: "1234567890123456", expiry: "10/12", cvv: "123"},
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
      card.number = getRandomNumber(16);
      card.cvv = getRandomNumber(3);
      
      let month = ( Math.floor(Math.random() * 14)+1 ).toString().padStart(2, "0");
      let date = ( Math.floor(Math.random() * 31)+1).toString().padStart(2, "0");
      card.expiry = date+"/"+month;

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
