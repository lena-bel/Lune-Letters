<script setup>
</script>

<template>
    <nav >
        <ul class="nav nav-pills navbar bg-body-tertiary px-3 mb-3 --bs-info" >
            <RouterLink to="/"  class="nav-item nav-link">client list</RouterLink>
            <p class="logo"><i>Lune & Letters</i></p>
            <!-- <RouterLink to="bookdetail" class="nav-item nav-link">client book detail</RouterLink> -->
            <RouterLink to="adminbooklist" class="nav-item nav-link">
              <button class="button">admin</button>
            </RouterLink>
            <!-- <RouterLink to="adminbookcreate" class="nav-item nav-link">admin book create</RouterLink>
            <RouterLink to="adminbookupdate" class="nav-item nav-link">admin book update</RouterLink> -->
        </ul>
    </nav>
</template>



<style scoped>
nav  ul{
     background: linear-gradient(135deg, #ffe6f0, #f3e8ff) !important;
}


nav .nav-link {
  background-color: #fce4ec;
  color: #a94f95;

}

nav .nav-link:hover,
nav .router-link-active {
  background-color: #f8bbd0;
  color: #c2185b;
  transform: scale(1.05);
}
.button{
  background-color: #fce4ec;
  color: #a94f95;
}
.logo{
  color: #a94f95;
  font-size: 26px;
}
</style>
