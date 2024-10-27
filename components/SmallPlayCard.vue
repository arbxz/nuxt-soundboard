<template>
  <button
    class="flex gap-4 items-center justify-between w-full text-white py-2 border-b-2 hover:border-b-indigo-500 transition-all duration-300"
    @click="playSound(sound.url)"
  >
    <div
      class="flex-1 text-white text-left whitespace-nowrap break-words overflow-hidden overflow-ellipsis"
    >
      {{ sound.name }}
    </div>
    <Icon name="solar:play-broken" class="text-xl w-6" />
  </button>
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
