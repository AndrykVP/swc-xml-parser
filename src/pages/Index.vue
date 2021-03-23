<template>
   <Layout>
      <div>
         <div class="container" v-if="file != null">
            <div class="section">
               <Table />
            </div>
         </div>
         <div class="hero is-fullheight-with-navbar" v-else>
            <div class="hero-body columns is-vcentered is-centered is-mobile">
               <div class="column is-narrow">
                  <Uploader />
               </div>
            </div>
         </div>
      </div>
   </Layout>
</template>

<script>
import Uploader from '~/components/Uploader.vue'
import Table from '~/components/Table.vue'

export default {
   metaInfo: {
      title: 'Index'
   },
   components: {
      Uploader, Table
   },
   computed: {
      file() {
         return this.$store.state.file
      },
   }
}
</script>