<script setup>
import BookCard from '@/components/BookCard.vue'
import { ref, onMounted } from 'vue'
const books = ref([])
const isLoading = ref(true)
const error = ref(null)


onMounted(async () => {
  try {
    const response = await fetch('http://localhost:3000/books')
    if (!response.ok) throw new Error('Network response was not ok')
    const data = await response.json()
    books.value = data
  } catch (err) {
    error.value = 'Failed to load books. Please try again later.'
  } finally {
    isLoading.value = false
  }
})
</script>
<template>
   <div class="container">
      <BookCard v-for="book in books" :key="book.id" :book="book" />
      
   </div>
</template>

<style scoped>
.container{
   display: flex;
   flex-wrap: wrap;
   gap: 15px;
}
</style>
