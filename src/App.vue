<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Viteky',
  meta: [
    {
      name: 'viewport',
      content:
        'width=device-width,initial-scale=1,user-scalable=0,viewport-fit=cover',
    },
    { name: 'description', content: 'Kongying Tavern Vite Template' },
    { name: 'renderer', content: 'webkit' },
    { name: 'force-renderer', content: 'webkit' },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'lack-translucent',
    },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'applicable-device', content: 'pc,mobile' },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'google', content: 'notranslate' },
    { name: 'origin', content: 'origin' },
    // Open Graph Protocol
    { property: 'og:title', content: 'Viteky' },
    { property: 'og:type', content: 'article' },
    { property: 'og:site_name', content: 'Viteky' },
    { property: 'og:title', content: 'Viteky' },
    { property: 'og:image:alt', content: '"kongying-tavern/viteky' },
    { property: 'of:description', content: '✨Kongying Tavern Vite Template.' },
    {
      property: 'og:image',
      content:
        'https://opengraph.githubassets.com/108a11baa31c16c6cfec3ac9407bfc469153657f19e689d9d0c83cf1defc5090/kongying-tavern/viteky',
    },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '600' },
    { name: 'twitter:title', content: 'Viteky' },
    {
      name: 'twitter:description',
      content: '✨Kongying Tavern Vite Template.',
    },
    { nmae: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image:alt', content: '✨Kongying Tavern Vite Template.' },
    { name: 'article:author', content: 'jiazeng' },
    {
      name: 'twitter:image:src',
      content:
        'https://opengraph.githubassets.com/108a11baa31c16c6cfec3ac9407bfc469153657f19e689d9d0c83cf1defc5090/kongying-tavern/viteky',
    },
  ],
})
</script>

<template>
  <router-view />
</template>
