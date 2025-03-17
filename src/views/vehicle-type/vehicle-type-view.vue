<script lang="ts" setup>
import VehicleTypeTable from './components/vehicle-type-table.vue'
import VehicleTypeQuery from './components/vehicle-type-query.vue'
import VehicleTypeDialog from './components/vehicle-type-dialog.vue'
</script>
<template>
  <div class="vehicle-type-view">
    <vehicle-type-query></vehicle-type-query>
    <vehicle-type-dialog></vehicle-type-dialog>
    <vehicle-type-table></vehicle-type-table>
  </div>
</template>

<style lang="scss" scoped>
.vehicle-type-view {
  background: white;
  padding: 20px;
  border-radius: 5px;
}
</style>
