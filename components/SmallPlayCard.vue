<template>
  <button
    class="flex gap-4 items-center justify-between w-full text-white py-2 rounded-md px-4 hover:bg-lime-500 transition-all duration-300"
    @click="playSound(sound.url)"
  >
    <div class="text-white">{{ sound.name }}</div>
    <Icon name="solar:play-broken" class="text-xl" />
  </button>
</template>

<script>
export default {
  props: {
    sound: {
      type: Object,
      required: true,
    },
  },
  methods: {
    playSound(url) {
      const audio = new Audio(url)
      audio.play()
    },
  },
}
</script>
