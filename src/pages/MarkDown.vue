<template>
  <div class="flex w-full flex-wrap text-center">
    <AppTitleBar>MarkDown Application</AppTitleBar>
    <section class="flex w-11/12 h-screen m-auto">
      <article class="w-1/2 border">
        <textarea
          class="w-full h-full"
          :input="inputText"
          @input="update"
        ></textarea>
      </article>
      <article class="w-1/2 border" v-html="markedText"></article>
    </section>
  </div>
</template>

<script>
import { computed, ref } from "vue"
import marked from "marked"
import useDebounceMethod from "../composables/Debounce"
import AppTitleBar from "../components/AppTitleBar.vue"
export default {
  components: { AppTitleBar },
  setup() {
    const inputText = ref("")
    const { debounce } = useDebounceMethod()
    const markedText = computed(() => {
      return marked(inputText.value)
    })
    const update = e => {
      const task = () => {
        inputText.value = e.target.value
      }
      debounce(task, 500)
    }

    return { inputText, markedText, update }
  }
}
</script>

<style></style>
