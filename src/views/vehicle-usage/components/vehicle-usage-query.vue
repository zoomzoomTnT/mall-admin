<script lang="ts" setup>
import { toRefs } from 'vue'
import { useVehicleUsageStore } from '../store/vehicle-usage-store'
import { storeToRefs } from 'pinia'
import DictSelect from '@/components/dict/dict-select.vue'
import DatetimePicker from '@/components/datetime/datetime-picker.vue'
import { DictConstants } from '@/apis/__generated/model/enums/DictConstants'

const vehicleUsageStore = useVehicleUsageStore()
const { queryData } = storeToRefs(vehicleUsageStore)
const { query } = toRefs(queryData.value)
</script>
<template>
  <div class="search">
    <el-form inline label-width="80" size="small">
      <el-form-item label="停车费用">
        <el-input-number
          v-model="query.tripCostParking"
          controls-position="right"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="超时费用">
        <el-input-number
          v-model="query.tripCostSurpass"
          controls-position="right"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="用车费用">
        <el-input-number v-model="query.tripCostFee" controls-position="right"></el-input-number>
      </el-form-item>
      <el-form-item label="其他费用">
        <el-input-number v-model="query.tripCostOther" controls-position="right"></el-input-number>
      </el-form-item>
      <el-form-item label="加油费用">
        <el-input-number v-model="query.tripCostFuel" controls-position="right"></el-input-number>
      </el-form-item>
      <el-form-item label="司机费用">
        <el-input-number v-model="query.tripCostLabor" controls-position="right"></el-input-number>
      </el-form-item>
      <el-form-item label="高速费用">
        <el-input-number v-model="query.tripCostEtc" controls-position="right"></el-input-number>
      </el-form-item>
      <el-form-item label="用车预定时间">
        <datetime-picker
          v-model:min-date-time="query.minTripReservedTime"
          v-model:max-date-time="query.maxTripReservedTime"
        >
        </datetime-picker>
      </el-form-item>
      <el-form-item label="还车车库">
        <el-input v-model="query.returnGarage"></el-input>
      </el-form-item>
      <el-form-item label="取车车库">
        <el-input v-model="query.pickUpGarage"></el-input>
      </el-form-item>
      <el-form-item label="车辆GPS位置">
        <el-input v-model="query.currentLocation"></el-input>
      </el-form-item>
      <el-form-item label="用车状态">
        <dict-select
          :dict-id="DictConstants.VEHICLE_USAGE_STATUS"
          v-model="query.vehicleUsageStatus"
        ></dict-select>
      </el-form-item>
      <el-form-item label="用车详情">
        <el-input v-model="query.tripDetail"></el-input>
      </el-form-item>
      <el-form-item label="用车里程数">
        <el-input-number v-model="query.tripMilage" controls-position="right"></el-input-number>
      </el-form-item>
      <el-form-item label="注意">
        <el-input v-model="query.remark"></el-input>
      </el-form-item>
      <el-form-item label="车辆信息" v-if="query.vehicle">
        <el-input v-model="query.vehicle.licensePlate" controls-position="right"></el-input>
      </el-form-item>
      <el-form-item label="车辆信息" v-else>
        <span>暂无车辆信息</span>
      </el-form-item>
      <el-form-item label="订单信息" v-if="query.productSku">
        <el-input v-model="query.productSku.id" controls-position="right"></el-input>
      </el-form-item>
      <el-form-item label="订单信息" v-else>
        <span>暂无订单信息</span>
      </el-form-item>
      <el-form-item label=" ">
        <div class="btn-wrapper">
          <el-button
            type="primary"
            size="small"
            @click="vehicleUsageStore.reloadTableData({ query: query, likeMode: 'ANYWHERE' })"
          >
            查询
          </el-button>
          <el-button type="warning" size="small" @click="vehicleUsageStore.restQuery()">
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
