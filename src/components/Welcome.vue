<template>
    <div>
        <div class="d-flex px-3 justify-content-between">
            <div class="pt-3">
              Account Balance
            </div>
            <div class="py-2">
              <img src="../assets/logo.svg" alt="">
            </div>
          </div>

          <div class="d-flex px-3 justify-content-center align-items-center mb-2">
            <span class="badge bg-green p-2 px-3">$$</span>
            <span class="f-20 px-1">3000</span>
            <div class="ms-auto text-info" data-bs-toggle="modal" data-bs-target="#myModal">
              <i class="fas fa-plus-circle"></i>
              New Card
            </div>
          </div>
          <card-create-modal/>
    </div>
</template>

<script>
import CardCreateModal from "./Cards/CardCreateModal.vue"
export default {
  components: {
    CardCreateModal
  }
}
</script>