<template>
    <!-- The Modal -->
    <div class="modal text-dark" id="myModal">
        <div class="modal-dialog modal-sm">
            <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header">
                <h6 class="modal-title">Add new card</h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
                <div class="mb-3 mt-3">
                    <label for="card_name" class="form-label">Card name:</label>
                    <input type="text" class="form-control" id="card_name" placeholder="Enter card name" v-model="card.name">
                </div>
            </div>

            <!-- Modal footer -->
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-success" data-bs-dismiss="modal" @click="addCard">Add</button>
            </div>

            </div>
        </div>
    </div>
</template>
<script>
import { cardMixin } from "../../mixins/card"
import { mapActions } from "vuex";
export default {
    mixins: [cardMixin],
    methods: {
        
        ...mapActions({
            addCard: "addCard",
        }),
    }
}
</script>
<style>
.modal-backdrop.show {
    z-index: -1!important;
}
</style>