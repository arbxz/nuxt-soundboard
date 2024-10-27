<template>
  <div
    class="relative rounded-md py-4 shadow flex flex-col gap-4 justify-center items-center"
  >
    <button class="group relative cursor-pointer">
      <div
        class="transition-all duration-200 absolute left-1/2 top-[42px] -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] rounded-full bg-lime-500 overflow-hidden group-active:top-1/2 group-hover:shadow-inner"
      />
      <div class="w-[100px] h-[100px] rounded-full bg-lime-600 shadow" />
    </button>
    <div class="flex items-center justify-center gap-4 w-full">
      <div
        class="bg-yellow-400 shadow-md shadow-yellow-200 rounded-full w-4 h-4"
      />
      <div class="text-lg">title</div>
    </div>
    <div class="text-sm text-stone-500">Reference : The boys</div>
  </div>
</template>
