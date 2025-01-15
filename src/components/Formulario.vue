<script setup>
    import { reactive, ref } from 'vue'
    import Alerta from './Alerta.vue'

    const emit = defineEmits(['obtener-clima'])

    const error = ref('')
    const busqueda = reactive({
        ciudad: '',
        pais: ''
    })

    const paises = [
        { codigo: 'US', nombre: 'Estados Unidos' },
        { codigo: 'CL', nombre: 'Chile' },
        { codigo: 'MX', nombre: 'México' },
        { codigo: 'AR', nombre: 'Argentina' },
        { codigo: 'CO', nombre: 'Colombia' },
        { codigo: 'CR', nombre: 'Costa Rica' },
        { codigo: 'ES', nombre: 'España' },
        { codigo: 'PE', nombre: 'Perú' }
    ];

    const consultarClima = () => {
        if(Object.values(busqueda).includes('')) {
            error.value = 'Todos los campos son obligatorios'
            return
        }

        error.value = ''
        emit('obtener-clima', busqueda)
    };

</script>


<template>
    <form 
        class="formulario"
        @submit.prevent="consultarClima"
    >

        <Alerta v-if="error">{{ error }}</Alerta>

        <div class="campo">
            <label for="ciudad">Ciudad</label>
            <input 
                type="text" 
                id="ciudad" 
                placeholder="Ciudad"
                v-model="busqueda.ciudad"   
            >
        </div>

        <div class="campo">
            <label for="pais">País</label>
            <select
                id="pais"
                v-model="busqueda.pais"
            >
                <option value="">-- Seleccione un país --</option>
                <option v-for="pais in paises" :value="pais.codigo"> {{ pais.nombre }}</option>
            </select>
        </div>
    
        <input 
            type="submit" 
            value="Consultar Clima" 
        />
    </form>
</template>

<style>
  select {
    background-color: #f0f0f0; /* Cambia el fondo del elemento select */
    color: #333; /* Cambia el color del texto */
    border: 1px solid #ccc;
    padding: 5px;
  }

  option {
    background-color: #fff; /* Cambia el fondo del menú desplegable */
    color: #000; /* Cambia el color del texto de las opciones */
  }
</style>