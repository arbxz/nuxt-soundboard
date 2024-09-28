<template>
  <div
    class="min-h-screen bg-stone-900 flex flex-col px-4 py-6 shadow-inner shadow-black font-mono"
  >
    <AppNavigation />
    <div class="flex flex-row items-start justify-start gap-4 lg:gap-8 p-4">
      <div
        class="sticky top-8 flex-1 p-4 border-4 border-lime-500 w-full min-h-16 border-dashed rounded-xl"
      >
        <div class="flex gap-4 items-center justify-between text-white mb-6">
          Favorited
          <Icon name="solar:heart-broken" class="text-xl" />
        </div>
        <div class="flex flex-col gap-4 items-center">
          <SmallPlayCard />
          <SmallPlayCard />
          <SmallPlayCard />
          <SmallPlayCard />
        </div>
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-8"
      >
        <!-- <SoundCard /> -->
        <SoundButton />
        <SoundButton />
        <SoundButton />
        <SoundButton />
        <SoundButton />
        <SoundButton />
        <SoundButton />
        <SoundButton />
        <SoundButton />
        <SoundButton />
        <SoundButton />
        <SoundButton />
        <SoundButton />
        <SoundButton />
      </div>
    </div>

    <AppFooter />
  </div>
</template>
