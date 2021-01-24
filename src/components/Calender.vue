<template>
  <div
    class="container mx-auto bg-pink-400 p-5 font-bold rounded text-white inline-block"
  >
    <h1 class="inline-block text-4xl">Calender</h1>
  </div>
  <section class="w-3/4 mx-auto">
    <div class="flex justify-between text-2xl p-4">
      <h1 class="font-bold">{{ months[currentMonth] }}</h1>
      <h1 class="font-bold">{{ currentYear }}</h1>
    </div>
  </section>
  <section class="mx-auto w-3/4">
    <div class="flex place-content-center mt-5">
      <h2
        v-for="day in days"
        :key="day"
        class="px-3 inline-block w-1/7 font-bold text-lg"
      >
        {{ day }}
      </h2>
    </div>
  </section>
  <section class="w-3/4 mx-auto">
    <div class="flex flex-wrap">
      <p
        v-for="i in startDay"
        :key="i"
        class="inline-block w-1/7 font-bold"
      ></p>
      <p
        v-for="date in countDays"
        :key="date"
        class="inline-block w-1/7 font-bold my-3"
        :class="{ 'text-yellow-500': isToday(date) }"
      >
        {{ date }}
      </p>
    </div>
  </section>
  <section class="w-3/4 mx-auto mt-5">
    <div class="flex justify-between">
      <button
        class="bg-pink-500 text-lg font-extrabold px-5 py-2 text-white rounded hover:bg-pink-700"
        @click="prev"
      >
        Prev
      </button>
      <button
        class="bg-pink-500 text-lg font-extrabold px-5 py-2 text-white rounded hover:bg-pink-700"
        @click="next"
      >
        Next
      </button>
    </div>
  </section>

  {{}}
</template>

<script>
import { computed, ref } from "vue"
export default {
  setup() {
    const days = ref(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"])
    const months = ref([
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ])

    const currentDate = ref(new Date().getDate())
    const currentMonth = ref(new Date().getMonth())
    const currentYear = ref(new Date().getFullYear())
    const isToday = date => {
      return (
        new Date().toDateString() ==
        new Date(currentYear.value, currentMonth.value, date).toDateString()
      )
    }
    const countDays = computed(() => {
      return new Date(currentYear.value, currentMonth.value + 1, 0).getDate()
    })
    const startDay = computed(() => {
      return new Date(currentYear.value, currentMonth.value, 1).getDay()
    })
    const next = () => {
      if (currentMonth.value == 11) {
        currentMonth.value = 0
        currentYear.value++
      } else {
        currentMonth.value++
      }
    }
    const prev = () => {
      if (currentMonth.value == 0) {
        currentMonth.value = 11
        currentYear.value--
      } else {
        currentMonth.value--
      }
    }
    return {
      days,
      months,
      currentDate,
      currentMonth,
      currentYear,
      countDays,
      startDay,
      prev,
      next,
      isToday
    }
  }
}
</script>

<style></style>
