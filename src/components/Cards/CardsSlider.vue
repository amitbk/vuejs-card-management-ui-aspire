<template>
    <div>
        <!-- Nav tabs -->
        <ul class="nav nav-tabs border-0 text-secondary px-2">
            <li class="nav-item me-3">
                <a class="nav-link p-1 text-grey nav__bg active" data-bs-toggle="tab" href="#home">My debit cards</a>
            </li>
            <li class="nav-item me-3">
                <a class="nav-link p-1 text-grey nav__bg" data-bs-toggle="tab" href="#menu1">All company cards</a>
            </li>
        </ul>

        <!-- Tab panes -->
        <div class="tab-content my-3">
            <div class="tab-pane container active p-0 w-100" id="home">

                <VueSlickCarousel :arrows="false" :dots="true" @afterChange="afterChange">
                    <div class="px-2" v-for="i in 5" :key="i">
                        <div class="bg-green border rounded p-2 px-3">
                            <div class="d-flex justify-content-end">
                                <img src="@/assets/logo2.svg" alt="">
                            </div>

                            <div class="pt-4">
                                <h4>Mark Henry</h4>
                            </div>


                            <div class="f-20 d-flex justify-content-between">
                                <span>* * * *</span>
                                <span>* * * *</span>
                                <span>* * * *</span>
                                <span>4152</span>
                            </div>


                            <div class="d-flex justify-content-between my-2">
                                <div>
                                    Thru: 12/20
                                </div>
                                <div>
                                    CVV: ***
                                </div>
                                <div class="mt-3">
                                    <img src="@/assets/visa.svg" alt="">
                                </div>
                            </div>                        
                        </div>
                    </div>                        
                </VueSlickCarousel>
                
            </div>
            <div class="tab-pane container fade p-5 text-center" id="menu1">
                <div class="my-2">
                    No content.
                </div>
            </div>  
        </div>


        
    </div>
</template>

<script>

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    name: "CardsWrapper",
    components: {
        VueSlickCarousel 
    },
    methods: {
        onInitCarousel() {
            console.log('our carousel is ready')
        },
        afterChange(i) {
            console.log("64:: ",i)
        }
    }
}
</script>

<style scoped>

.nav__bg.active {
    background: transparent!important;
    border: none;
    border-color: transparent!important;;
    border-bottom: #0cc9ef solid 3px !important;
    color: #fff!important;
}
</style>