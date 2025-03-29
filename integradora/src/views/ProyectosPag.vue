<template>
    <NavBar @scroll-to-contacto="handleScrollToContacto" />
  
    <div class="Bienvenida">
      <h1 style="color: aliceblue;">PROYECTOS</h1>
    </div>
  
    <div class="texto">
        <p>Algunos de nuestros proyectos realizados</p>
    </div>
  
    <div class="modelo-3d">
      <iframe 
        src="https://sketchfab.com/models/6e31149a05c64fcabacddb02fb1101b7/embed"
        title="Modelo 3D"
        frameborder="0"
        allowfullscreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking">
      </iframe>
    </div>
  
    <ContactoC />
  </template>
  
  <script setup lang="ts">
  import { useRouter } from "vue-router";
  import NavBar from "@/components/NavBar.vue";
  import ContactoC from "@/components/ContactoC.vue";
  
  const router = useRouter();
  
  const handleScrollToContacto = () => {
    router.push({ path: "/", query: { scrollTo: "contacto" } });
  };
  </script>
  
  <style scoped>
  .Bienvenida {
    text-align: center;
  }
  
  .texto {
    text-align: center;
    color: aliceblue;
    font-size: 20px;
  }
  
  .modelo-3d {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
  }
  
  .modelo-3d iframe {
    width: 80%;
    height: 500px;
    max-width: 800px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
  
  .paq {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F1C5FC;
    margin: 30px;
    padding: 20px;
    border-radius: 10px;
  }
  
  .paq img {
    width: 40%;
    height: auto;
  }
  
  .paq span {
    font-size: 120px;
    margin-right: 20px;
  }
  
  .paq p {
    font-size: 60px;
    text-align: center;
  }
  </style>
  