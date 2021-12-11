<template>
    <div>
        <div class="d-flex f-11">
            <div class="p-2">
                <div class="transaction__icon d-flex justify-content-center align-items-center p-2 rounded-circle " :style="{ background: getBgColor }">
                    <img :src="getIcon" alt="">
                    <!-- <img src="../../../../../assets/icons/flights.svg" alt=""> -->
                </div>
            </div>
            <div class="p-2 flex-fill">
                <div class="d-flex">
                    <div class="fw-bold">Hamleys</div>
                    <div class="ms-auto fw-bold text-green">+1540</div>
                </div>
                <div class="text-secondary">20 May, 2020</div>
                <div class="fw-bold py-1 text-blue-2"><i class="fas fa-store bg-primary rounded-circle p-1 text-white"></i> Refund on credit card</div>
            </div>
        </div>

        
    </div>
</template>

<script>
export default {
    props: {
        type: {
            required: true,
            type: String
        }
    },
    data() {
        return {
            icons: {
                shop: { bgcolor: "#009DFF1A", icon: "file-storage"},
                flight: { bgcolor: "#00D6B51A", icon: `flights` },
                entertainment: { bgcolor: "#F251951A", icon: "megaphone"},
            }
        }
    },
    computed: {
        getIcon: function() {
            return require("@/assets/"+this.icons[this.type].icon+".svg");
        },
        getBgColor: function() {
            return this.icons[this.type].bgcolor
        },
    }
    
}
</script>

<style scoped>
.transaction__icon {
    width: 37px;
    height: 37px;
}
</style>