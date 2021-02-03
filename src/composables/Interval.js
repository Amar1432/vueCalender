import { ref } from "vue"

const useIntervalMethod = () => {
  const timerId = ref("")

  const runInterval = (func, timer = 1000) => {
    timerId.value = setInterval(func, timer)
  }
  return { runInterval,timerId }
}
export default useIntervalMethod
