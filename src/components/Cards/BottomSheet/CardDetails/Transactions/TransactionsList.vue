<template>
    <div class="card mb-2">
        <div class="card-header bg-white" id="card-header1">
          <a class="f-12 fw-bold btn" data-bs-toggle="collapse" href="#collapseOne">
            <img src="@/assets/recent_transactions.svg" alt="Recent transactions">
            <span class="text-blue-2">
                Recent transactions
            </span>
          </a>
        </div>
        <div id="collapseOne" class="collapse show" data-bs-parent="#accordion">
          <div class="card-body">
              
              <transaction type="flight"/>
              <transaction type="entertainment"/>
              <transaction type="shop"/>
              
          </div>
          <div class="card-body text-green text-center border-top fw-bold">
              View all card transactions              
          </div>
        </div>
      </div>
      
</template>

<script>
import Transaction from "./Transaction.vue"
export default {
    name: "TransactionList",
    components: {
        Transaction
    }
}
</script>