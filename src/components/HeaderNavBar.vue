<template>
    <header>
    <nav class="navbar navbar-dark bg-dark navbar-expand-md">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">Play2Learn</a>
        <div class="container-fluid d-flex justify-content-end"></div>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <div class="container-fluid d-flex justify-content-end navbar-nav mr-auto">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/home">Home</a>
            </li>
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#"  role="button"
              id="navbar-dropdown" data-bs-toggle="dropdown">
              Games
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="/anagram">Anagram Hunt</a>
              <a class="dropdown-item" href="#">Mathificent</a>
            </div>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="/about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Login</a>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </nav>
    <router-view/>
</header>
</template>

<script>
export default {
    name: 'HeaderNavBar'
}
</script>

<style>

</style>