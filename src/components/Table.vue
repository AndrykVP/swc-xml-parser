<template>
   <b-table :data="records" paginated hoverable :per-page="pagination">
      <b-table-column field="entityID" label="ID" width="40" v-slot="props">
         #{{ props.row.entityID }}
      </b-table-column>
      <b-table-column field="name" label="Name" sortable v-slot="props">
         {{ props.row.name }}
      </b-table-column>
      <b-table-column field="typeName" label="Type" sortable v-slot="props">
         {{ props.row.typeName }}
      </b-table-column>
      <b-table-column field="x-coord" label="X Pos" width="40" v-slot="props">
         {{ props.row.x }}
      </b-table-column>
      <b-table-column field="y-coord" label="Y Pos" width="40" v-slot="props">
         {{ props.row.y }}
      </b-table-column>
      <b-table-column field="ownerName" label="Owner" sortable v-slot="props">
         {{ props.row.ownerName }}
      </b-table-column>
      <b-table-column field="iffStatus" label="IFF Status" v-slot="props">
         <span :class="
            [
                  'tag',
                  {'is-danger': props.row.iffStatus == 'Enemy'},
                  {'is-success': props.row.iffStatus == 'Friend'}
            ]">
            {{ props.row.iffStatus }}
         </span>
      </b-table-column>
   </b-table>
</template>

<script>
export default {
   computed: {
      pagination() {
         return this.$store.state.perPage
      },
      records() {
         if(this.$store.state.filter) {
            return this.$store.getters.filteredRecords
         }
         return this.$store.getters.allRecords
      }
   }
}
</script>