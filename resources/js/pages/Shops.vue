<template>
    <div class="mt-4">
        <!-- <div>
            <button @click="toggleOptions">Sort By</button>
            <div v-if="isOptionsVisible">
                I am visible
            </div>
        </div> -->
        <shops-list></shops-list>
    </div>
</template>

<script>
import ShopsList from '../components/shops/ShopsList'

export default {
    components: {
        ShopsList
    },
    data() {
        return {
            isOptionsVisible: false
        }
    },
    methods: {
        toggleOptions() {
            this.isOptionsVisible = !this.isOptionsVisible
        }
    }
}
</script>
