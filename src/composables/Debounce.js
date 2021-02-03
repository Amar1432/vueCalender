import { ref } from "vue"

const useDebounceMethod = () => {
  const timerId = ref("")
  
  const debounce = (func, timer = 1000) => {
    clearTimeout(timerId.value)
    timerId.value = setTimeout(func, timer)
  }
  return { debounce }
}
export default useDebounceMethod
