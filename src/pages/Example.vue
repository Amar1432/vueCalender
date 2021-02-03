<template>
    <div>
    <div class="flex justify-center items-center w-full h-screen">
        <div class="h-16 w-16 bg-red-600" v-if="div"></div>
        <div class="h-16 w-16 bg-blue-600" v-else></div>
    </div>
    <button @click="toggleDiv" class="my-10 border rounded">Click Me</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            div: true,
        }
    },
    methods: {
        toggleDiv() {
            this.div = !this.div
        }
    }
}
</script>
