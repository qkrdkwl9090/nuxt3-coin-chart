<template>
  <div class="main__container overflow-x-hidden shrink-0">
    <Header />
    <main><slot /></main>
  </div>
</template>

<style lang="scss" scoped>
main {
  min-height: 100vh;
  min-height: 100dvh;
}
</style>
