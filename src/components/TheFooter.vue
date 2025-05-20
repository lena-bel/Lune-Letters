<script setup>
</script>

<template>
  <footer class="footer-custom text-dark pt-4 mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-3 hide">
          <h5 class="text-pink">About</h5>
          <p>
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis magni facilis harum veniam. Sint tempore, dignissimos tenetur ullam in numquam aliquid, saepe fuga fugit quis velit exercitationem iure, maiores vitae!💕
          </p>
        </div>

        <!-- Quick Links -->
        <div class="col-md-4 mb-3">
          <h5 class="text-pink">Quick Links</h5>
          <ul class="list-unstyled">
            <li><RouterLink to="/"  class="nav-item nav-link">client list</RouterLink></li>
            <li> <RouterLink to="bookdetail" class="nav-item nav-link">client book detail</RouterLink></li>
            <li> <RouterLink to="adminbooklist" class="nav-item nav-link">admin book list</RouterLink></li>
            <li><RouterLink to="adminbookcreate" class="nav-item nav-link">admin book create</RouterLink></li>
            <li><RouterLink to="adminbookupdate" class="nav-item nav-link">admin book update</RouterLink></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="col-md-4 mb-3">
          <h5 class="text-pink">Contact</h5>
          <p>Email: contact@luneletters.gmail</p>
          <p>Instagram: lune-letters</p>
        </div>
      </div>

      <hr class="border-top border-pink" />

      <div class="text-center pb-3">
        <small class="text-muted">&copy; 2025 lune & letters store — Made with 💗</small>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-custom {
  background: linear-gradient(135deg, #ffe6f0, #f3e8ff);
  color: #5e4b56;
  border-top: 3px solid #ffb6c1;
}

.text-pink {
  color: #d63384;
}

.footer-link {
  color: #a94f95;
  text-decoration: none;
}

.footer-link:hover {
  text-decoration: underline;
  color: #c2185b;
}

.border-pink {
  border-color: #f78fb3 !important;
}
.hide{
   display: none;
}
</style>


