<script lang="ts" setup>
import { type Component } from 'vue'
import { storeToRefs } from 'pinia'
import { useVehicleUsageStore } from '../store/vehicle-usage-store'
import VehicleUsageCreateForm from './vehicle-usage-create-form.vue'
import VehicleUsageUpdateForm from './vehicle-usage-update-form.vue'
import type { EditMode } from '@/typings'
const vehicleUsageStore = useVehicleUsageStore()
const { dialogData } = storeToRefs(vehicleUsageStore)

const formMap: Record<EditMode, Component> = {
  CREATE: VehicleUsageCreateForm,
  UPDATE: VehicleUsageUpdateForm
}
</script>
<template>
  <div>
    <el-dialog v-model="dialogData.visible" :title="dialogData.title" :width="dialogData.width">
      <component :is="formMap[dialogData.mode]"></component>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped></style>
