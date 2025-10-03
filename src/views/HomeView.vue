<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<!-- 

Здесь будут страницы: главная, спасибо, товара(бани) 
у них одна шапка и навигация по блокам
-->

<template>
  <main>
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/thankyou">Thankyou</RouterLink>
        <RouterLink to="/product/1">Товар1</RouterLink>
      </nav>
    </header>
    <RouterView />
  </main>
</template>
