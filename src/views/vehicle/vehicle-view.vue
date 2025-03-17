<script lang="ts" setup>
import VehicleTable from './components/vehicle-table.vue'
import VehicleQuery from './components/vehicle-query.vue'
import VehicleDialog from './components/vehicle-dialog.vue'
</script>
<template>
  <div class="vehicle-view">
    <vehicle-query></vehicle-query>
    <vehicle-dialog></vehicle-dialog>
    <vehicle-table></vehicle-table>
  </div>
</template>

<style lang="scss" scoped>
.vehicle-view {
  background: white;
  padding: 20px;
  border-radius: 5px;
}
</style>
