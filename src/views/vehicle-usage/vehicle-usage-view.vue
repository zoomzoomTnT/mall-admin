<script lang="ts" setup>
import VehicleUsageTable from './components/vehicle-usage-table.vue'
import VehicleUsageQuery from './components/vehicle-usage-query.vue'
import VehicleUsageDialog from './components/vehicle-usage-dialog.vue'
</script>
<template>
  <div class="vehicle-usage-view">
    <vehicle-usage-query></vehicle-usage-query>
    <vehicle-usage-dialog></vehicle-usage-dialog>
    <vehicle-usage-table></vehicle-usage-table>
  </div>
</template>

<style lang="scss" scoped>
.vehicle-usage-view {
  background: white;
  padding: 20px;
  border-radius: 5px;
}
</style>
