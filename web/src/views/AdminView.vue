<script setup>
import axios from 'axios'
import { onMounted, ref, watch } from 'vue'

const url = 'http://localhost:5000/'
const product = ref()

const testProduct = {
  test: 'test1',
  username: 'Arsen',
}

const getProduct = async () => {
  try {
    const response = axios.get(`${url}`)
    product.value = response.data
  } catch (error) {
    console.error(error)
  }
}
const postProduct = async () => {
  try {
    const response = axios.post(`${url}`, testProduct)
    product.value = response.data
    console.log(response.data);
  } catch (error) {
    console.error(error)
  }
}
const deleteProduct = async () => {}

watch(product.value, (newProduct)=>{
  product.value = newProduct
})

// onMounted(async () => {
//   await postProduct()
// })
</script>

<!-- 
здесь будут: 
1. сайдбар, в котором можно будет переключаться по страницам редактирования блоков/товаров/страницы спасибо и прочее 
2. шапка из которой можно попасть на основную страницу или выйти с аккаунта админа
3. список блоков/товаров
4. страница редактирования блоков/товаров 
 -->

<template>
  <div>
    adminPage
    <button @click="postProduct">submit</button>
    {{ product }}
  </div>
</template>

<style lang="scss" scoped></style>
