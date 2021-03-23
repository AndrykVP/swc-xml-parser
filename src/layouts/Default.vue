<template>
   <div id="layout">
      <header class="header">
         <Navigation />
         <XML />
      </header>
      <slot/>
   </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Navigation from '~/components/Navigation.vue'
import XML from '~/components/XMLDetails.vue'

export default {
   components: {
      Navigation, XML
   }
}
</script>