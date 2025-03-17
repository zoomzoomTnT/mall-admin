<script lang="ts" setup>
import { toRefs } from 'vue'
import { useVehicleTypeStore } from '../store/vehicle-type-store'
import { storeToRefs } from 'pinia'
import DictSelect from '@/components/dict/dict-select.vue'
import DatetimePicker from '@/components/datetime/datetime-picker.vue'
import { DictConstants } from '@/apis/__generated/model/enums/DictConstants'

const vehicleTypeStore = useVehicleTypeStore()
const { queryData } = storeToRefs(vehicleTypeStore)
const { query } = toRefs(queryData.value)
</script>
<template>
  <div class="search">
    <el-form inline label-width="80" size="small">
      <el-form-item label="型号">
        <el-input v-model="query.typeName"></el-input>
      </el-form-item>
      <el-form-item label="型号大小">
        <el-input v-model="query.typeSize"></el-input>
      </el-form-item>
      <el-form-item label="燃油类型">
        <el-input v-model="query.fuelType"></el-input>
      </el-form-item>
      <el-form-item label="制造厂家">
        <el-input v-model="query.manufacturer"></el-input>
      </el-form-item>
      <el-form-item label="正座数量">
        <el-input-number
          v-model="query.passengerCapacity"
          controls-position="right"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="副座数量">
        <el-input-number
          v-model="query.extraPassengerCapacity"
          controls-position="right"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="行李容量">
        <el-input-number
          v-model="query.luggageCapacity"
          controls-position="right"
        ></el-input-number>
      </el-form-item>
      <el-form-item label=" ">
        <div class="btn-wrapper">
          <el-button
            type="primary"
            size="small"
            @click="vehicleTypeStore.reloadTableData({ query: query, likeMode: 'ANYWHERE' })"
          >
            查询
          </el-button>
          <el-button type="warning" size="small" @click="vehicleTypeStore.restQuery()">
            重置</el-button
          >
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-form-item) {
  margin-bottom: 5px;
}

.search {
  display: flex;
  flex-flow: column nowrap;
  width: 100%;

  .btn-wrapper {
    margin-left: 20px;
  }
}
</style>
