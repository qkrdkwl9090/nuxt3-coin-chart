<script setup lang="ts">
const currentScroll = ref(0);
const isScrollTop = computed(() => currentScroll.value < 82);
const scrollEvent = useThrottle(() => {
  currentScroll.value = window.scrollY;
}, 300);
onMounted(() => {
  window.addEventListener("scroll", scrollEvent);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", scrollEvent);
});
</script>
<template>
  <header
    class="w-screen | shrink-0 fixed z-10 bg-white duration-300 transition-[opacity] border-b-2"
    :class="isScrollTop ? 'opacity-100' : 'opacity-0'"
  >
    <section class="py-4 flex items-center justify-between px-6 xl:px-8">
      <div class="flex items-center">
        <NuxtLink
          id="logo"
          class="font-bold text-xl flex items-center mr-20"
          to="/"
        >
          <picture>
            <source srcset="/logo.webp" type="image/webp" />
            <img src="/logo.png" alt="logo" class="w-[50px]" />
          </picture>
          Coin Info
        </NuxtLink>
        <nav>
          <ul class="flex gap-10">
            <li><NuxtLink to="/">가상자산</NuxtLink></li>
            <li><NuxtLink to="/">거래소</NuxtLink></li>
            <li><NuxtLink to="/">커뮤니티</NuxtLink></li>
            <li><NuxtLink to="/">서비스</NuxtLink></li>
          </ul>
        </nav>
      </div>
    </section>
  </header>
</template>
