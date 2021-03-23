<template>
   <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
         <a class="navbar-item" href="/">
            <g-image alt="Example image" src="~/favicon.png" width="28" />
         </a>

         <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="activeMenu = !activeMenu">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
         </a>
      </div>
      <transition name="fade" mode="out-in">
         <div id="navbarMenu" class="navbar-menu" :class="{'is-active': activeMenu}" v-if="file != null">
            <div class="navbar-start">
               <div class="navbar-item">
                  <div class="buttons">
                     <b-button icon-left="trash" class="button is-danger" @click="clearFile">
                        Clear Scan
                     </b-button>
                  </div>
               </div>
            </div>
            <div class="navbar-end">
               <div class="navbar-item">
                  <div class="buttons">
                     <b-switch :value="filter" @input="changeIFF()">Filter Friendlies</b-switch>
                     <b-numberinput v-model="pagination" @ changeplaceholder="Entries per page" />
                  </div>
               </div>
            </div>
         </div>
      </transition>
   </nav>
</template>

<script>
export default {
   data() {
      return {
         pagination: 15,
         activeMenu: false,
      }
   },
   computed: {
      file() {
         return this.$store.state.file
      },
      filter() {
         return this.$store.state.filter
      },
   },
   methods: {
      clearFile() {
         this.$store.commit('clearFile')
      },
      changeIFF() {
         this.$store.commit('iffChange')
      },
      changePagination() {
         this.$store.commit('pagination', pagination)
      }
   },
   mounted() {
      this.pagination = this.$store.state.perPage
   }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>