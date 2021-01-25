<template>
  <nav class="h-12 bg-blue-500 text-white font-bold py-2 text-lg flex justify-items-start px-4">
      <router-link class="mr-2" v-for="page in pageList" :key="page" :to="{name: page.name}">{{page.title}}</router-link>
  </nav>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const pageList = ref([
      {name: 'HomePage', title: 'Home'},
      {name: 'Calender', title: 'Calender'},
      {name: 'MarkDown', title: 'MarkDown'},
    ])
    return {pageList}
  }
}
</script>

<style>

</style>