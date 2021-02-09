<template>
  <div class="z-20 w-full h-screen bg-gray-500 fixed top-0 opacity-50"></div>
  <div class="absolute inset-0">
    <div class="flex flex-wrap h-full">
      <div class="z-30 m-auto bg-white rounded-md p-2 shadow w-1/3">
        <h1 class="text-3xl text-center font-bold text-green-500">
          <slot name="title"></slot>
        </h1>
        <div>
          <slot name="body"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
