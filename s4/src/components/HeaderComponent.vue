<template>
  <header class="header center">
    <a href="#" class="header__link-logo">
      <img
        :src="require('@/assets/img/logo.svg')"
        alt="logo"
        class="header__logo"
      />
    </a>
    <nav class="header__nav">
      <a href="/" class="header__nav-link">Home</a>
      <a href="/projects" class="header__nav-link">Project</a>
      <a href="/blog" class="header__nav-link">Blog</a>
      <a href="/news" class="header__nav-link">News</a>
    </nav>
  </header>
</template>


<style lang="scss" scoped></style>
