<template>

  <div class="main">

    <div class="welcome-card__wrapper bg-main w-100 text-white py-4 fw-bold pb-5" ref="part1">
          <welcome/>
          <cards-slider/>
    </div>


    <div class="bottom-sheet__wrapper bg-white w-100 border__top-rounded" :style="{marginTop: (part1Height+10)+'px' }">
        <div class="border__top-rounded bg-grey" >
          <card-menu-wrapper/>
        </div>

        <div class="bg-white mb-5 p-3" >
          <card-details-wrapper/>
        </div>
    </div>
  

  </div>

</template>

<script>
// @ is an alias to /src
import Welcome from '../components/Welcome.vue';
import CardsSlider from '../components/Cards/CardsSlider.vue';
import CardMenuWrapper from '../components/Cards/BottomSheet/CardMenus/MenusWrapper.vue';
import CardDetailsWrapper from '../components/Cards/BottomSheet/CardDetails/DetailsWrapper.vue';

export default {
  name: 'Home',
  components: {
    Welcome,
    CardsSlider,
    CardMenuWrapper,
    CardDetailsWrapper
  },

  data() {
    return {
      part1Height: 0,
    }
  },
  mounted() {
    this.part1Height = this.$refs.part1.clientHeight;
  }

}
</script>

<style scoped>
.main {
  position: relative;
}

.welcome-card__wrapper {
  position: fixed;
  width: 400px!important;
}

.bottom-sheet__wrapper {
  position: absolute;
} 
.bg-one {
  background: #ccc;
}

.border__top-rounded {
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}

.bg-main {
  background: #0C365A;
}
.bg-grey {
  background: #edf3ff;
}


.f-20 {
  font-size: 20px;
}
</style>
