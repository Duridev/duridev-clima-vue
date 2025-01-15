<script setup>
  import Formulario from './components/Formulario.vue'
  import useClima from './composables/useClima.js'

  const { obtenerClima } = useClima()

</script>


<template>
  <h1 class="titulo">Buscador de Clima</h1>

  <div class="contenedor buscador-clima">
    <Formulario 
      @obtener-clima="obtenerClima"
    />
  
  </div>
  
</template>
