<template>
<div class="box px-4" v-if="file != null">
   <p class="is-size-7">Currently viewing <span class="has-text-weight-bold has-text-primary">{{file.title}}</span></p>
   <p class="is-size-7">Scanned on <span class="has-text-weight-bold has-text-primary">{{file.date}}</span> at <span class="has-text-weight-bold has-text-primary">{{file.time.hrs}}:{{file.time.mins}}</span></p>
</div>
</template>

<script>
export default {
   computed: {
      file() {
         return this.$store.state.file
      }
   }
}
</script>