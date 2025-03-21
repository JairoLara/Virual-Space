<template>
    <NavBar @scroll-to-contacto="handleScrollToContacto" />
    <div class="Bienvenida" ><h1 style="color: aliceblue;" >PAQUETE</h1></div>
    <div class="texto"><p>Te imaginas poder mostrar tu negocio con un recorrido en 3D hiperrealista? Ahora es posible con nuestro paquete especial:
<p>Lentes Oculus Quest 2 incluidos, para que disfrutes la experiencia sin necesidad de equipo adicional.</p>
<p>Modelado 3D hiperrealista de tu negocio, adaptado con todos los detalles.</p>
<p>Interacción inmersiva, permitiendo a tus clientes explorar tu espacio como si estuvieran ahí.</p>

<p>Precio del paquete completo: <strong>$7,500 MXN</strong></p>
</p></div>
    <div class="paq" style="background-color: #F1C5FC;" >
        <img style="width: 40%;height: 40%; " src="../imagenes/oculus-removebg-preview 1.png" alt="">
        <span style="font-size: 120px; margin-right: 20px;" >+</span>
        <p style="font-size: 60px;text-align: center; " >Tu negocio en una nueva realidad</p>
    </div>
    <ContactoC />
  </template>
  
  <script setup lang="ts">
import { useRouter } from "vue-router";
import { onMounted } from "vue";
import NavBar from "@/components/NavBar.vue";
import ContactoC from "@/components/ContactoC.vue";

const router = useRouter();

const handleScrollToContacto = () => {
  router.push({ path: "/", query: { scrollTo: "contacto" } });
};
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
.texto{
    justify-content: center;
    align-items: center;
    text-align: center;
    color: aliceblue;
    font-size: 20px;
}
.trabajos{
    align-items: center; 
    background-color: rgb(10, 11, 11);
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