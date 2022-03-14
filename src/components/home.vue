<template>
  <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1">GABS<i class="fas fa-bus"></i></span>
    <ul class="nav nav-pills justify-content-end">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#home">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#about">About</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#contact">Contact</a>
  </li>
  
</ul>
  </div>
</nav>
<h1 class="heading">Golden Arrow Bus Services</h1>
<h4 class="slogan">The Bus for us</h4>
<div class="buttons">
 <router-link :to="{name:'Log'}"><button>
      Sign In
      <span></span><span></span><span></span><span></span>
    </button></router-link>
     <button>
      Sign Up
      <span></span><span></span><span></span><span></span>
    </button>
    </div>
<div class="logo">
    <img src="https://i.postimg.cc/BnHD34YM/front-removebg-preview.png" alt="logo">
</div>
</template>

<script>
export default {

}
</script>

<style>
.buttons{
  position: relative;
  left: 20%;
}
.heading{
    font-family: muli,sans-serif;
    font-size: 70px;
    font-weight: 700;
    position: relative;
    left: 6%;
    margin-top: 15%;
}
.slogan{
    position: relative;
    left: -20%;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    
}
.logo{
    margin-left: 65%;
    margin-top: -20%;
}
.logo img{
    width: 75%;
    height: 75%;
    object-fit: cover;
}
button {
    --c: goldenrod;
    color: var(--c);
    font-size: 16px;
    border: 0.3em solid var(--c);
    border-radius: 0.5em;
    width: 12em;
    height: 3em;
    text-transform: uppercase;
    font-weight: bold;
    font-family: sans-serif;
    letter-spacing: 0.1em;
    text-align: center;
    line-height: 3em;
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: 0.5s;
    margin: 1em;
}

button span {
    position: absolute;
    width: 25%;
    height: 100%;
    background-color: var(--c);
    transform: translateY(150%);
    border-radius: 50%;
    left: calc((var(--n) - 1) * 25%);
    transition: 0.5s;
    transition-delay: calc((var(--n) - 1) * 0.1s);
    z-index: -1;
}

button:hover {
    color: black;
}

button:hover span {
    transform: translateY(0) scale(2);
}

button span:nth-child(1) {
    --n: 1;
}

button span:nth-child(2) {
    --n: 2;
}

button span:nth-child(3) {
    --n: 3;
}

button span:nth-child(4) {
    --n: 4;
}
.nav-pills .nav-link.active, .nav-pills .show>.nav-link {
    background-color: #3A9430!important;
    color: black;
}
.nav-link{
  color: black;
}

</style>