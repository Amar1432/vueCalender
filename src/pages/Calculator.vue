<template>
  <div class="text-center">
    <AppTitleBar>Calculator</AppTitleBar>
  </div>
  <div class="flex w-full justify-center">
    <div class="border p-5 bg-gray-300 rounded-md">
      <div class="w-full h-14 mb-8">
        <h1
          class="text-3xl my-4 px-2 border-2 text-right bg-gray-50 overflow-x-scroll"
        >
          {{ expression }}
        </h1>
      </div>
      <div class="grid grid-cols-4 gap-2">
        <button class="calcButton" @click="buttonPressed('1')">1</button>
        <button class="calcButton" @click="buttonPressed('2')">2</button>
        <button class="calcButton" @click="buttonPressed('3')">3</button>
        <button class="calcButton" @click="buttonPressed('+')">+</button>
        <button class="calcButton" @click="buttonPressed('4')">4</button>
        <button class="calcButton" @click="buttonPressed('5')">5</button>
        <button class="calcButton" @click="buttonPressed('6')">6</button>
        <button class="calcButton" @click="buttonPressed('-')">-</button>
        <button class="calcButton" @click="buttonPressed('7')">7</button>
        <button class="calcButton" @click="buttonPressed('8')">8</button>
        <button class="calcButton" @click="buttonPressed('9')">9</button>
        <button class="calcButton" @click="buttonPressed('*')">*</button>
        <button class="calcButton" @click="buttonPressed('c')">C</button>
        <button class="calcButton" @click="buttonPressed('0')">0</button>
        <button class="calcButton" @click="buttonPressed('=')">=</button>
        <button class="calcButton" @click="buttonPressed('/')">/</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue"
import AppTitleBar from "../components/AppTitleBar.vue"
import useWindowEvent from "../hooks/useWindowEvent.js"
export default {
  components: { AppTitleBar },
  setup() {
    const expression = ref("0")
    const operatorList = ["+", "-", "*", "/"]
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

    const buttonPressed = value => {
      if (operatorList.includes(value)) {
        performOperation(value)
      } else if (value === "=" || value === "Enter") {
        calculate()
      } else if (numbers.includes(value)) {
        expression.value = expression.value.replace(/^0+/, "") + value
      } else if (value === "c") {
        clear()
      }
    }

    const performOperation = value => {
      if (
        operatorList.includes(
          expression.value.charAt(expression.value.length - 1)
        )
      ) {
        expression.value = expression.value.slice(0, -1) + value
      } else {
        calculate()
        expression.value = expression.value + value
      }
    }

    const calculate = () => {
      try {
        expression.value = eval(expression.value).toString()
      } catch (error) {
        expression.value = expression.value.slice(0, -1)
        expression.value = eval(expression.value).toString()
      }
    }

    const clear = () => (expression.value = "0")

    const handleKeydown = e => buttonPressed(e.key)

    useWindowEvent("keydown", handleKeydown)

    return { expression, buttonPressed }
  }
}
</script>
