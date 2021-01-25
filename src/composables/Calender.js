import { ref, computed } from "vue"

const useCalenderFeature = () => {
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
    isToday,
    countDays,
    startDay,
    next,
    prev
  }
}

export default useCalenderFeature
