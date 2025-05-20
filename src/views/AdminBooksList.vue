<script setup>
import { ref, onMounted } from 'vue'
const books = ref([])
const isLoading = ref(true)
const error = ref(null)

onMounted(async () => {
    try {
        const response = await fetch('http://localhost:3000/books')
        if (!response.ok) throw new Error('There was a problem loading the books')
        const data = await response.json()
        books.value = data
    } catch (err) {
        error.value = "failed to load books."
    } finally {
        isLoading.value = false
    }
})

</script>

<template>
    <div class="body">
        <div class="top">
            <h1>List of all available books</h1>
            <RouterLink to="/adminbookcreate">
                <button class="button">Add a new book</button>
            </RouterLink>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Author</th>
                    <th scope="col">Publication Date</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody v-for="book in books">
                <tr>
                    <td>{{ book.originalTitle }}</td>
                    <td>{{ book.author.firstName }} {{ book.author.lastName }}</td>
                    <td>{{ book.publicationYear }}</td>
                    <td>{{ book.genre }}</td>
                    <td>
                        <RouterLink to="/adminbookupdate"><a href="#">edit</a></RouterLink> &nbsp; &nbsp;
                        <RouterLink>
                            <a href="">detete</a>
                        </RouterLink>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
.body .top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}
.body{
  /* background-color: #fce4ec; */
  color: #a94f95;
}
.button{
  background-color: #fce4ec;
  color: #a94f95;
  align-self: center;
}
</style>
