<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const book = ref(null)
const isLoading = ref(true)
const error = ref(null)
const router = useRouter()
function goBack() {
  router.back()
  console.log("im back")
}

onMounted(async () => {
  try {
    const response = await fetch(`http://localhost:3000/books/${route.params._id}`)
    if (!response.ok) throw new Error('Network response was not ok')
    const data = await response.json()
    book.value = data
  } catch (err) {
    error.value = 'Failed to load book details.'
  } finally {
    isLoading.value = false
  }
})
console.log(book.value);
console.log('ROUTE PARAMS:', route.params)
</script>
<template>
  <button class="button" @click="goBack">go back</button>
  <div v-if="isLoading">Loading...</div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else class="card mb-3" style="min-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img :src="book.coverUri" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ book.originalTitle }}</h5>
          <p class="card-text"><strong>Author: </strong> {{ book.author.firstName + "" + book.author.lastName }}</p>
          <p class="card-text"><strong>Genre: </strong> {{ book.genre }}</p>
          <p class="card-text"><strong>Publication Year: </strong> {{ book.publicationYear }}</p>
          <p class="card-text"><strong>Recap: </strong> {{ book.recap }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.button{
  background-color: #fce4ec;
  color: #a94f95;
  margin-bottom: 10px;
}
.card{
  background: linear-gradient(135deg, #ffe6f0, #f3e8ff) !important;
}
</style>
