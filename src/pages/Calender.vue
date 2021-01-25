<template>
  <div class="text-center">
    <AppTitleBar>Calender</AppTitleBar>
  </div>
  <section class="w-3/4 mx-auto">
    <div class="flex justify-between text-2xl p-4">
      <h1 class="font-bold">{{ months[currentMonth] }}</h1>
      <h1 class="font-bold">{{ currentYear }}</h1>
    </div>
  </section>
  <section class="mx-auto w-3/4 text-center">
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
  <section class="w-3/4 mx-auto text-center">
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
</template>

<script>
import useCalenderFeature from "../composables/Calender"
import AppTitleBar from "../components/AppTitleBar.vue"
export default {
  components: { AppTitleBar },
  setup() {
    const {
      days,
      months,
      currentDate,
      currentMonth,
      currentYear,
      isToday,
      countDays,
      startDay,
      next,
      prev
    } = useCalenderFeature()

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
