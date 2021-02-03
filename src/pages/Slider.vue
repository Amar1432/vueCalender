<template>
  <div class="flex flex-wrap w-full relative">
    <!-- <AppTitleBar>Carousel</AppTitleBar> -->
    <div v-for="(color, index) in sliders" :key="color" class="w-full absolute">
      <transition name="fade">
        <div
          v-if="currentSlide == index"
          :class="[color]"
          style="height:400px"
        ></div>
      </transition>
    </div>
    <div class="w-full" style="height: 390px">
      <div class="absolute bottom-0 w-full flex justify-center">
        <div
          v-for="(color, index) in sliders"
          :key="index"
          class="w-4 h-4 rounded-full bg-white mx-0.5 cursor-pointer shadow-md"
          :class="{ 'bg-gray-400': currentSlide == index }"
          @click="changeSlide(index)"
        ></div>
      </div>
    </div>
  </div>
  <!-- <section class="flex justify-between bottom-0 w-2/4 mx-auto my-4">
    <button class="btn">Prev</button>
    <button class="btn">Next</button>
  </section> -->
</template>

<script>
import { onMounted, onUnmounted, ref } from "vue"
import AppTitleBar from "../components/AppTitleBar.vue"
import useIntervalMethod from "../composables/Interval.js"
export default {
  components: { AppTitleBar },
  setup() {
    const currentSlide = ref(0)
    const sliders = ref(["bg-yellow-400", "bg-pink-400", "bg-green-400"])
    const { runInterval, timerId } = useIntervalMethod()
    const task = () => {
      console.log("slide changed")
      currentSlide.value > 1 ? (currentSlide.value = 0) : currentSlide.value++
    }
    onUnmounted(() => {
      clearInterval(timerId.value)
    })
    onMounted(() => {
      runInterval(task, 3000)
    })
    const changeSlide = index => {
      clearInterval(timerId.value)
      currentSlide.value = index
      runInterval(task, 3000)
    }
    return { currentSlide, sliders, changeSlide }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
