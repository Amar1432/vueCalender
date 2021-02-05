import { onMounted, onUnmounted } from "vue"

const useWindowEvent = (eventName, handleEvent) => {
  onMounted(() => window.addEventListener(eventName, handleEvent))
  onUnmounted(() => window.removeEventListener(eventName, handleEvent))
}

export default useWindowEvent
