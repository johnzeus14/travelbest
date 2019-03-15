<template>
  <div class="home">
  	<hero-d>  </hero-d>

  	<services-d>  </services-d>

  

  	<visa-d>  </visa-d>

    <footer-d></footer-d>
   
  </div>
</template>

<script>
// @ is an alias to /src
import hero_d from '@/components/desktop/hero.vue'

import services_d from '@/components/desktop/services.vue'
import visa_d from '@/components/desktop/visa.vue'
import footer_d from '@/components/desktop/footer.vue'


export default {
  name: 'home',
  components: {
    'hero-d': hero_d,
    'services-d':services_d,
    'visa-d':visa_d,
    'footer-d':footer_d

  }
}
</script>
