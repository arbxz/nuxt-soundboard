<template>
  <div
    class="min-h-screen background-custom bg-gradient-to-t from-stone-950 to-stone-900 flex flex-col px-4 py-6 shadow-inner shadow-black font-mono"
  >
    <AppNavigation />

    <div
      class="flex-1 flex flex-col lg:flex-row items-start justify-start gap-4 lg:gap-8 p-4"
    >
      <div
        class="lg:sticky top-8 flex-1 p-4 border-4 bg-stone-900 border-indigo-500 min-w-[250px] w-full min-h-16 border-dashed rounded-xl"
      >
        <div
          class="rounded-xl mb-4 overflow-hidden"
          style="
            width: 100%;
            height: 0;
            padding-bottom: 77%;
            position: relative;
          "
        >
          <iframe
            src="https://giphy.com/embed/4oMoIbIQrvCjm"
            width="100%"
            height="100%"
            style="position: absolute"
            frameBorder="0"
            class="giphy-embed pointer-events-none"
            allowFullScreen
          ></iframe>
        </div>

        <div class="flex gap-4 items-center justify-between text-white mb-6">
          Favorited
          <Icon name="solar:heart-broken" class="text-xl" />
        </div>

        <div class="flex flex-col gap-4 items-center">
          <SmallPlayCard
            v-for="favoriteSound in favoriteSounds"
            :key="favoriteSound.url"
            :sound="favoriteSound"
          />
        </div>
      </div>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-8 w-full"
      >
        <SoundButton v-for="sound in sounds" :key="sound.url" :sound="sound" />
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<script lang="ts">
import '~/assets/css/main.css'

useHead({
  templateParams: {
    blogCategory: 'soundboard',
  },
  title: 'arbxz',
  titleTemplate: '%s %separator %blogCategory %separator %siteName',
})

export default {
  data() {
    return {
      sounds: [] as ISoundCard[],
      favoriteSounds: [] as ISoundCard[],
    }
  },
  async created() {
    const response = await fetch('/data.json')
    const data: ISoundCard[] = await response.json()
    this.sounds = data
    this.favoriteSounds = data.filter((sound: ISoundCard) => sound.favorite)
  },
}
</script>
