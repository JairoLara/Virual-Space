<template>
    <div class="contacto-container">
        <!-- Izquierda: Información de Contacto -->
      <div class="columna contacto">
        <div class="face"> <img style="width: 50px;height: 50px; " src="https://img.icons8.com/?size=100&id=118490&format=png&color=000000" alt=""> <p>@VirtualSpace</p></div>
        <div class="inst"> <img style="width: 50px;height: 50px; " src="https://img.icons8.com/?size=100&id=84884&format=png&color=000000" alt=""> <p>@VirtualSpace</p></div>
        <div class="what"> <img style="width: 50px;height: 50px; " src="https://img.icons8.com/?size=100&id=84937&format=png&color=000000" alt=""> <p>@VirtualSpace</p></div>
      </div>
  
      <!-- Derecha: Imagen de la Empresa -->
      <div class="columna imagen" style="background-color: aliceblue;" >
        <img style="width: 20%;height: auto; " src="../imagenes/logo sin texto 2.png" alt="Empresa">
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  </script>

  <style scoped>
  .contacto-container {
    display: flex;
    width: 100%;
  }
  
  .columna {
    flex: 1;
    align-items: center;
    justify-content: center;
  }
  
  .contacto {
    background: aliceblue;
    text-align: left;
  }
  
  .imagen img {
    max-width: 90%;
    height: auto;
    border-radius: 10px;
  }
  .face{
    display: flex;
  }
  .inst{
    display: flex;
  }
  .what{
    display: flex;
  }
  @media (max-width: 768px) {
    .contacto-container {
      flex-direction: column;
      height: auto;
    }
    .columna {
      width: 100%;
      text-align: center;
      background-color: #f9f9f9;
    }
  }
  </style>
  