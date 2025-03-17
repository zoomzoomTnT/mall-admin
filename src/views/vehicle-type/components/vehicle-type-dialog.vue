<script lang="ts" setup>
import { type Component } from 'vue'
import { storeToRefs } from 'pinia'
import { useVehicleTypeStore } from '../store/vehicle-type-store'
import VehicleTypeCreateForm from './vehicle-type-create-form.vue'
import VehicleTypeUpdateForm from './vehicle-type-update-form.vue'
import type { EditMode } from '@/typings'
const vehicleTypeStore = useVehicleTypeStore()
const { dialogData } = storeToRefs(vehicleTypeStore)

const formMap: Record<EditMode, Component> = {
  CREATE: VehicleTypeCreateForm,
  UPDATE: VehicleTypeUpdateForm
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
