<template>
    <div id="accordion f-12">

      

      <div class="card mb-2">
        <div class="card-header bg-white">
          <a class="f-12 fw-bold collapsed btn" data-bs-toggle="collapse" href="#collapseTwo">
            <img src="@/assets/card_details.svg" alt="Card details">
            <span class="text-blue-2">
              Card details
            </span>
          </a>
        </div>
        <div id="collapseTwo" class="collapse" data-bs-parent="#accordion">
          <div class="card-body">
            Lorem ipsum..
          </div>
        </div>
      </div>

      

      <transactions-list/>

</div>
</template>

<script>
import TransactionsList from "./Transactions/TransactionsList.vue";

export default {
  components: {
    TransactionsList
  },
  mounted() {
  //   $('.panel-collapse').on('show.bs.collapse', function () {
  //   $(this).siblings('.panel-heading').addClass('active');
  // });

  // $('.panel-collapse').on('hide.bs.collapse', function () {
  //   $(this).siblings('.panel-heading').removeClass('active');
  // });

    // console.log(document);
    // var myCollapsible = document.getElementById('card-header1')
    // myCollapsible.addEventListener('show.bs.collapse', function () {
    // // do something...
    // console.log("hello...")
    // })


    // this.$root.$on(
    //   'bv::collapse::state',
    //   // id of the collapse component
    //   // collapse is the state
    //   // true => open, false => close
    //    (id, collapsed) => {
    //      console.log("asaasas");
    //     if (id === "my-collapse") {
    //       this.collapsed = collapsed;

    //       console.log("ass");
    //     }
    //   });// $on
    



  }
}


</script>

<style scoped>
/* .card-header  a:before {
   font-family: 'Glyphicons Halflings';
   content: "?";
   float: right;
   transition: all 0.5s;
}
#collapseOne.collapse.show .card-header1.a:before {
  
	-webkit-transform: rotate(180deg);
	-moz-transform: rotate(180deg);
	transform: rotate(180deg);


}  */
</style>