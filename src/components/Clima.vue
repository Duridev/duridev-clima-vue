<script setup>
import useClima from '../composables/useClima'

const { formatearTemperatura } = useClima()
defineProps({
    clima: {
        type: Object,
        required: true
    }
})
</script>


<template>
    <div class="resultado">
        <h2>Clima de: {{ clima.name }}</h2>
        <p class="actual">{{ formatearTemperatura(clima.name.temp)}}&deg;C</p>
        <div class="temperatura">
            <p>Min: <span>{{ formatearTemperatura(clima.name.temp_min)}}&deg;C</span></p>
            <p>Max: <span>{{ formatearTemperatura(clima.name.temp_max)}}&deg;C</span></p>
        </div>
    </div>
</template>
