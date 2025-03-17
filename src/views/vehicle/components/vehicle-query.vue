<script lang="ts" setup>
import { toRefs } from 'vue'
import { useVehicleStore } from '../store/vehicle-store'
import { storeToRefs } from 'pinia'
import DictSelect from '@/components/dict/dict-select.vue'
import DatetimePicker from '@/components/datetime/datetime-picker.vue'
import { DictConstants } from '@/apis/__generated/model/enums/DictConstants'

const vehicleStore = useVehicleStore()
const { queryData } = storeToRefs(vehicleStore)
const { query } = toRefs(queryData.value)
</script>
<template>
  <div class="search">
    <el-form inline label-width="80" size="small">
      <el-form-item label="车牌号">
        <el-input v-model="query.licensePlate"></el-input>
      </el-form-item>
      <el-form-item label="车辆类型">
        <el-input-number v-model="query.vehicleType" controls-position="right"></el-input-number>
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="query.details"></el-input>
      </el-form-item>
      <el-form-item label="是否置顶">
        <el-input-number v-model="query.top" controls-position="right"></el-input-number>
      </el-form-item>
      <el-form-item label="里程数">
        <el-input-number v-model="query.milage" controls-position="right"></el-input-number>
      </el-form-item>
      <el-form-item label="默认车库">
        <el-input v-model="query.defaultGarage"></el-input>
      </el-form-item>
      <el-form-item label="默认价格">
        <el-input-number v-model="query.defaultPrice" controls-position="right"></el-input-number>
      </el-form-item>
      <el-form-item label="机油更换时间">
        <datetime-picker
          v-model:min-date-time="query.minResetTimeEngineOil"
          v-model:max-date-time="query.maxResetTimeEngineOil"
        >
        </datetime-picker>
      </el-form-item>
      <el-form-item label="轮胎更换时间">
        <datetime-picker
          v-model:min-date-time="query.minResetTimeTire"
          v-model:max-date-time="query.maxResetTimeTire"
        >
        </datetime-picker>
      </el-form-item>
      <el-form-item label=" ">
        <div class="btn-wrapper">
          <el-button
            type="primary"
            size="small"
            @click="vehicleStore.reloadTableData({ query: query, likeMode: 'ANYWHERE' })"
          >
            查询
          </el-button>
          <el-button type="warning" size="small" @click="vehicleStore.restQuery()"> 重置</el-button>
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
