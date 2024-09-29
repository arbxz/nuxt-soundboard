<template>
  <div
    class="border-2 border-lime-400 group relative flex md:flex-col p-6 gap-4 justify-center items-center bg-stone-950 hover:translate-y-2 rounded-xl shadow-md transition-all duration-300"
  >
    <button class="relative cursor-pointer" @click="playSound(sound.url)">
      <div
        class="bg-gradient-to-br from-stone-950 to-stone-900 transition-all duration-200 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] group-active:scale-125 rounded-lg overflow-hidden z-20"
      >
        <Icon
          name="solar:play-broken"
          class="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lime-400 group-hover:text-lime-300 transition-colors duration-200 text-4xl"
        />
        <Icon
          name="solar:play-broken"
          class="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lime-500 text-4xl scale-[1.15] animate-pulse opacity-5"
        />
      </div>
      <div
        class="relative transition-all duration-200 bg-gradient-to-br from-stone-800 to-stone-950 w-[150px] h-[150px] group-active:scale-75 rounded-xl z-10"
      />
    </button>
    <div class="flex flex-col items-center justify-center gap-2 w-full">
      <div class="text-2xl font-bold text-white transition-all duration-300">
        {{ sound.name }}
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
      required: true,
    },
  },
  methods: {
    playSound(url: string) {
      const audio = new Audio(url)
      audio.play()
    },
  },
}
</script>
