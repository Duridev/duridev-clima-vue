import { ref, computed } from 'vue'
import axios from 'axios'

export default function useClima() {

    const clima = ref({})
    const cargando = ref(false)
    const error = ref('')

    const obtenerClima = async ({ciudad, pais}) => {
        // Importar el Api Key
        const key = import.meta.env.VITE_API_KEY
        cargando.value = true
        clima.value = {}
        error.value = ''
        try {
            //Obtener Latitud y longitud
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${key}`

            console.log(url);

            const { data } = await axios(url)

            console.log(data);

            const { lat, lon } = data[0]

            // Obtener el Clima
            const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`

            const { data: resultado } = await axios(urlClima)

            clima.value = resultado
            
        } catch {
            error.value = 'Ciudad no encontrada'
        } finally {
            cargando.value = false
        }
    }

    const mostrarClima = computed(() => {
        return Object.values(clima.value).length > 0
    })

    const formatearTemperatura = temperatura => parseInt(temperatura - 273.15)

    return {
        obtenerClima,
        clima,
        mostrarClima,
        formatearTemperatura,
        cargando,
        error
    }
}