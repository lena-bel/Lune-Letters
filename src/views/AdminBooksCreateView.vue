<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const title = ref('')
const originalTitle = ref('')
const firstName = ref("")
const lastName = ref("")
const genre = ref('')
const publicationYear = ref('')
const coverUri = ref('')
const recap = ref('')
const error = ref(null)
const success = ref(null)

const submitForm = async () => {
      try {
            const newBook = {
                  "author": {
                        firstName: firstName.value,
                        lastName: lastName.value
                  },
                  "title": title.value,
                  "originalTitle": originalTitle.value,

                  "genre": genre.value,
                  "publicationYear": parseInt(publicationYear.value),
                  "coverUri": coverUri.value,
                  "recap": recap.value
            }

            const response = await fetch('http://localhost:3000/books', {
                  method: 'POST',
                  headers: {
                        'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(newBook)
            })

            if (!response.ok) throw new Error('Failed to create book')

            success.value = 'Book created successfully!'
            error.value = null

            //Redirect to book list after success
            setTimeout(() => {
                  router.push('/adminbooklist')
            }, 1000)
      } catch (err) {
            error.value = err.message
            success.value = null
      }
}
</script>

<template>
      <div class="max-w-xl mx-auto mt-8">
            <h2 class="text-2xl font-bold mb-4 my-text">Add a New Book</h2>

            <form @submit.prevent="submitForm" class=" grid gap-4 my-form">
                  <input v-model="title" type="text" placeholder="Title" required class="border p-2 rounded" />
                  <input v-model="originalTitle" type="text" placeholder="Original Title" required
                        class="border p-2 rounded" />
                  <input v-model="firstName" type="text" placeholder="Author's first name" required
                        class="border p-2 rounded" />
                  <input v-model="lastName" type="text" placeholder="Author's last name" required
                        class="border p-2 rounded" />
                  <input v-model="genre" type="text" placeholder="Genre" required class="border p-2 rounded" />
                  <input v-model="publicationYear" type="number" placeholder="Publication Year" required
                        class="border p-2 rounded" />
                  <input v-model="coverUri" type="url" placeholder="Cover Image URL" required
                        class="border p-2 rounded" />
                  <textarea v-model="recap" placeholder="Recap" class="border p-2 rounded"></textarea>

                  <button type="submit" class="button">
                        ➕ &nbsp; Add Book
                  </button>
            </form>

            <p v-if="error" class="text-red-500 mt-4">{{ error }}</p>
            <p v-if="success" class="text-green-600 mt-4">{{ success }}</p>
      </div>
</template>
<style scoped>
.my-form {
      display: flex;
      flex-direction: column;
}

.button {
      background-color: #fce4ec;
      color: #a94f95;
      width: 300px;
}

.my-text {
      text-align: center;
}
</style>
