<template>
  <div
    class="w-full border-2 border-indigo-400 group relative flex md:flex-col p-6 gap-4 justify-center items-center bg-stone-950 bg-opacity-70 hover:translate-y-2 rounded-xl shadow-md transition-all duration-300"
  >
    <button class="relative cursor-pointer" @click="playSound(sound.url)">
      <div
        class="transition-all duration-200 absolute bg-stone-900 left-1/2 top-[35px] lg:top-[65px] -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] lg:w-[150px] lg:h-[150px] group-active:shadow-inner group-active:top-1/2 rounded-full overflow-hidden z-20"
      >
        <Icon
          name="solar:play-broken"
          class="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-indigo-400 group-hover:text-indigo-200 group-hover:animate-pulse transition-colors duration-200 text-4xl"
        />
        <Icon
          name="solar:play-broken"
          class="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-indigo-500 text-4xl scale-[1.15] group-hover:scale-125 transition-all duration-300 animate-pulse opacity-5"
        />
      </div>
      <div
        class="shadow-md shadow-indigo-700 relative transition-all duration-200 w-[80px] h-[80px] lg:w-[150px] lg:h-[150px] bg-indigo-600 rounded-full z-10"
      />
    </button>

    <div
      class="flex flex-col items-center justify-center gap-2 w-full overflow-hidden"
    >
      <!-- Carousel -->
      <div
        class="carousel flex justify-start mx-auto max-w-64 text-2xl font-bold text-white break-words overflow-ellipsis overflow-hidden"
      >
        <!-- Groups -->
        <div class="flex scroll-animation whitespace-nowrap pr-4">
          <div>
            {{ sound.name }}
          </div>
        </div>
        <div aria-hidden class="flex scroll-animation whitespace-nowrap">
          <div>{{ sound.name }}</div>
        </div>
      </div>
    </div>

    <div
      class="absolute -bottom-4 -right-2 text-xs text-stone-800 bg font-thin uppercase bg-white px-6 py-2 rounded-full border-white border-2"
    >
      {{ sound.reference }}
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    sound: {
      type: Object,
      required: true
    }
  },
  methods: {
    playSound(url: string) {
      const audio = new Audio(url)
      audio.play()
    }
  }
}
</script>
