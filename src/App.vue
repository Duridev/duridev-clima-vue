<script setup>
  import Formulario from './components/Formulario.vue'
  import useClima from './composables/useClima.js'
  import Clima from './components/Clima.vue'

  const { obtenerClima, clima, mostrarClima } = useClima()

</script>


<template>
  <h1 class="titulo">Buscador de Clima</h1>

  <div class="contenedor buscador-clima">
    <Formulario 
      @obtener-clima="obtenerClima"
    />

    <Clima
      v-if="mostrarClima"
      :clima="clima"
     />
  
  </div>
  
</template>
