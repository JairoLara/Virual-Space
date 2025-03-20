<template>
    <NavBar />
    <div class="Bienvenida" ><h1 style="color: aliceblue;" >PAQUETE</h1></div>
    <div class="paq" style="background-color: #F1C5FC;" >
        <img style="width: 40%;height: 40%; " src="../imagenes/oculus-removebg-preview 1.png" alt="">
        <span style="font-size: 120px; margin-right: 20px;" >+</span>
        <p style="font-size: 60px;text-align: center; " >El modelo de tu negocio en realidad aumentada</p>
    </div>
    <ContactoC />
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from "vue";
  import { useRoute, useRouter } from "vue-router";
  import NavBar from "@/components/NavBar.vue";
  import ContactoC from "@/components/ContactoC.vue";
  </script>
  
<style scoped>
.paq {
    display: flex;
    align-items: center;
    justify-content: center; 
    margin: 30px; 
}
.Bienvenida{
    justify-content: center; 
    align-items: center; 
    text-align: center; 
}
.trabajos{
    align-items: center; 
    background-color: aliceblue;
    padding: 5px;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
}
.proyectos {
    display: flex;
    flex-direction: column; 
    justify-content: center; 
    align-items: center;  
}
</style>