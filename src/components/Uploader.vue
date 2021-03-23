<template>
   <div class="file is-large is-boxed is-primary">
      <label class="file-label">
         <input class="file-input" type="file" ref="file" accept="text/xml" @change="uploadFile">
         <span class="file-cta">
            <span class="file-icon">
            <i class="fas fa-upload"></i>
            </span>
            <span class="file-label">
            Upload Scan…
            </span>
         </span>
      </label>
   </div>
</template>

<script>
export default {
   methods: {
      uploadFile() {
         const reader = new FileReader();
         reader.onload = () => {
            this.$store.dispatch('fileUpload', reader.result)
         }
         reader.readAsText(this.$refs.file.files[0])
      },
   }
}
</script>