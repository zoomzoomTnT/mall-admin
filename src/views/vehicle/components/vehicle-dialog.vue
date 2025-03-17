<script lang="ts" setup>
import { type Component } from 'vue'
import { storeToRefs } from 'pinia'
import { useVehicleStore } from '../store/vehicle-store'
import VehicleCreateForm from './vehicle-create-form.vue'
import VehicleUpdateForm from './vehicle-update-form.vue'
import type { EditMode } from '@/typings'
const vehicleStore = useVehicleStore()
const { dialogData } = storeToRefs(vehicleStore)

const formMap: Record<EditMode, Component> = {
  CREATE: VehicleCreateForm,
  UPDATE: VehicleUpdateForm
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
