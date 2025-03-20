<template>
    <nav>
      <div class="nombrel">
        <img style="width: 50px;height: auto;" src="../imagenes/logo sin texto 2.png" alt="Logo" class="h-10">
        <h3>Virtual Space</h3>
      </div>
  
      <div class="botones">
        <router-link to="/contacto" class="opc"><h4>Contacto</h4></router-link>
        <router-link to="/paquete" class="opc"><h4>Paquete</h4></router-link>
        <router-link to="/proyectos" class="opc"><h4>Proyectos</h4></router-link>
      </div>
    </nav>
  </template>
  
  <script setup lang="ts">
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  </script>

<style scoped>
nav {
    width: 100%;
    background-color: aliceblue; 
    color: #333; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
}
.nombrel{
    display: flex;
}
.botones{
    display: flex;
    gap: 10px;
    .opc{
        color: #130552;
        text-decoration: none;
        margin-right: 25px;
    }
}
</style>