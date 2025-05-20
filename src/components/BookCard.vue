<script setup>
const props = defineProps({
    book:{
        type: Object
    } 
})
</script>

<template>
        <div class="card">
        <img :src="book.coverUri" class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text"> <strong>{{book.originalTitle}}</strong></p>
            <p class="card-text"> <strong>By: </strong>{{ book.author.firstName }}  {{ book.author.lastName }} </p>
            <RouterLink :to="{ name: 'bookdetail', params: { _id: book._id } }">See more detail</RouterLink>
            <!-- <p class="card-text"> <strong>Genre:</strong> <i>{{book.genre}}</i> </p>
            <p class="card-text"> <strong>Publication Year:</strong> <i>{{book.publicationYear}}</i></p> -->
        </div>
        </div>



</template>
<style scoped>
/* add the styles too please for the card */
</style>