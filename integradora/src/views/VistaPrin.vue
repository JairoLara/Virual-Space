<template>
    <NavBar />
    <div class="imagprin" >
        <img style="width: 50%;height: 50%;margin-top: 10px;box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2);" src="https://s3-alpha-sig.figma.com/img/4cf9/c3eb/2c0b6b2b5eb422a8b4092c859d20ad4b?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uQM9be8aQ8f7C~m45xOLgqujPwImBjoSIq~aI~GbcZssbeVxIZcoMUsalKmwpoQDdFOmapJWKn5UuAVb7L~vcJR9WEkCrwjF2gJ-vG6gxtHIlf6gaLH3kK3MBWVojj0sUYkFQe~CMZDFrAWkBcjqIuXKPkLkuYokNC6gVR-xzvxIycJ12UhAkBCk5omN1uaHi3O1xxx2VjzRfMxGpZdiRZrVciulBS7rd~8fBgwMziwwFWeKqL4ubyCpqmiY1DJ~V381gmOXGd38gB~RrExUKrac92MS8n0Ib4ONU0fB3O-IUsTHhOzxHZlP2T-eYvQYZmYJ69RqKkIVrTy9NHzShA__" alt="">
    </div>
    <div class="contenido">
        <h1 style="color: aliceblue;" >¿QUIÉNES SOMOS?</h1>
        <p style="color: aliceblue;" >Somos una micro-empresa dedicada al modelado 3d de espacios de negocios como cafeterias, jugueterias, espacios publicos entre otros , garantizamos una replica del lugar con medidas reales.</p>
        <div class="trabajos">
            <h2 style="color: #130552;" >Mira un poco de nuestros trabajos</h2>
        </div>
    </div>
    <div class="proyectos">
        <img style="width: 50%;height: 50%;margin-top: 30px;box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2);" src="../imagenes/img_Dormitorio1.png" alt="">
        <img style="width: 50%;height: 50%;margin-top: 10px;box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2); margin-bottom: 20px;" src="../imagenes/img_Dormitorio2.png" alt="">
    </div>
    <ContactoC />
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from "vue";
  import { useRoute, useRouter } from "vue-router";
  import NavBar from '@/components/NavBar.vue'; 
  import ContactoC from '@/components/ContactoC.vue'; 
  </script>
  
<style scoped>
.imagprin {
    display: flex;
    justify-content: center;  
}
.contenido{
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