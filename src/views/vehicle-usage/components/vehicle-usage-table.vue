<script lang="ts" setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { assertSuccess } from '@/utils/common'
import { api } from '@/utils/api-instance'
import { ElMessageBox } from 'element-plus'
import type { Scope } from '@/typings'
import { useVehicleUsageStore } from '../store/vehicle-usage-store'
import type { VehicleUsageDto } from '@/apis/__generated/model/dto'
import type { VehicleUsageInput } from '@/apis/__generated/model/static'
import { Delete, Edit, Plus } from '@element-plus/icons-vue'
import DictColumn from '@/components/dict/dict-column.vue'
import { DictConstants } from '@/apis/__generated/model/enums/DictConstants'
type VehicleUsageScope = Scope<VehicleUsageDto['VehicleUsageRepository/COMPLEX_FETCHER']>
const vehicleUsageStore = useVehicleUsageStore()
const {
  loadTableData,
  reloadTableData,
  openDialog,
  handleSortChange,
  handleSelectChange,
  getTableSelectedRows
} = vehicleUsageStore
const { pageData, loading, queryRequest, table, updateForm, createForm } =
  storeToRefs(vehicleUsageStore)
onMounted(() => {
  reloadTableData()
})
const handleEdit = (row: { id: string }) => {
  openDialog('UPDATE')
  updateForm.value.id = row.id
}
const handleCreate = () => {
  openDialog('CREATE')
  createForm.value = { ...vehicleUsageStore.initForm }
}
const handleSingleDelete = (row: { id: string }) => {
  handleDelete([row.id])
}
const handleBatchDelete = () => {
  handleDelete(
    getTableSelectedRows().map((row) => {
      return row.id || ''
    })
  )
}
const handleDelete = (ids: string[]) => {
  ElMessageBox.confirm('此操作将删除数据且无法恢复, 是否继续?', '警告', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    api.vehicleUsageController.delete({ body: ids }).then((res) => {
      assertSuccess(res).then(() => reloadTableData())
    })
  })
}
</script>
<template>
  <div>
    <div class="button-section">
      <el-button type="success" size="small" @click="handleCreate">
        <el-icon>
          <plus />
        </el-icon>
        新增
      </el-button>
      <el-button type="danger" size="small" @click="handleBatchDelete">
        <el-icon>
          <delete />
        </el-icon>
        删除
      </el-button>
    </div>
    <el-table
      ref="table"
      :data="pageData.content"
      :border="true"
      @selection-change="handleSelectChange"
      @sort-change="handleSortChange"
      v-loading="loading"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="停车费用" prop="tripCostParking" sortable="custom">
        <template v-slot:default="{ row }: VehicleUsageScope">
          {{ row.tripCostParking }}
        </template>
      </el-table-column>
      <el-table-column label="超时费用" prop="tripCostSurpass" sortable="custom">
        <template v-slot:default="{ row }: VehicleUsageScope">
          {{ row.tripCostSurpass }}
        </template>
      </el-table-column>
      <el-table-column label="用车费用" prop="tripCostFee" sortable="custom">
        <template v-slot:default="{ row }: VehicleUsageScope">
          {{ row.tripCostFee }}
        </template>
      </el-table-column>
      <el-table-column label="其他费用" prop="tripCostOther" sortable="custom">
        <template v-slot:default="{ row }: VehicleUsageScope">
          {{ row.tripCostOther }}
        </template>
      </el-table-column>
      <el-table-column label="加油费用" prop="tripCostFuel" sortable="custom">
        <template v-slot:default="{ row }: VehicleUsageScope">
          {{ row.tripCostFuel }}
        </template>
      </el-table-column>
      <el-table-column label="司机费用" prop="tripCostLabor" sortable="custom">
        <template v-slot:default="{ row }: VehicleUsageScope">
          {{ row.tripCostLabor }}
        </template>
      </el-table-column>
      <el-table-column label="高速费用" prop="tripCostEtc" sortable="custom">
        <template v-slot:default="{ row }: VehicleUsageScope">
          {{ row.tripCostEtc }}
        </template>
      </el-table-column>
      <el-table-column label="用车预定时间" prop="tripReservedTime" sortable="custom">
        <template v-slot:default="{ row }: VehicleUsageScope">
          {{ row.tripReservedTime }}
        </template>
      </el-table-column>
      <el-table-column label="还车车库" prop="returnGarage" sortable="custom">
        <template v-slot:default="{ row }: VehicleUsageScope">
          {{ row.returnGarage }}
        </template>
      </el-table-column>
      <el-table-column label="取车车库" prop="pickUpGarage" sortable="custom">
        <template v-slot:default="{ row }: VehicleUsageScope">
          {{ row.pickUpGarage }}
        </template>
      </el-table-column>
      <el-table-column label="车辆GPS位置" prop="currentLocation" sortable="custom">
        <template v-slot:default="{ row }: VehicleUsageScope">
          {{ row.currentLocation }}
        </template>
      </el-table-column>
      <el-table-column label="用车状态" prop="vehicleUsageStatus" sortable="custom">
        <template v-slot:default="{ row }: VehicleUsageScope">
          <dict-column
            :dict-id="DictConstants.VEHICLE_USAGE_STATUS"
            :value="row.vehicleUsageStatus"
          ></dict-column>
        </template>
      </el-table-column>
      <el-table-column label="用车详情" prop="tripDetail" sortable="custom">
        <template v-slot:default="{ row }: VehicleUsageScope">
          {{ row.tripDetail }}
        </template>
      </el-table-column>
      <el-table-column label="用车里程数" prop="tripMilage" sortable="custom">
        <template v-slot:default="{ row }: VehicleUsageScope">
          {{ row.tripMilage }}
        </template>
      </el-table-column>
      <el-table-column label="注意" prop="remark" sortable="custom">
        <template v-slot:default="{ row }: VehicleUsageScope">
          {{ row.remark }}
        </template>
      </el-table-column>
      <el-table-column label="车辆信息" prop="vehicle" sortable="custom">
        <template v-slot:default="{ row }: VehicleUsageScope">
          {{ row.vehicle.licensePlate }}
        </template>
      </el-table-column>
      <el-table-column label="订单信息" prop="productSku" sortable="custom">
        <template v-slot:default="{ row }: VehicleUsageScope">
          {{ row.productSku.id }}
        </template>
      </el-table-column>
      <el-table-column label="创建时间" prop="createdTime" sortable="custom">
        <template v-slot:default="{ row }: VehicleUsageScope">
          {{ row.createdTime }}
        </template>
      </el-table-column>
      <el-table-column label="更新时间" prop="editedTime" sortable="custom">
        <template v-slot:default="{ row }: VehicleUsageScope">
          {{ row.editedTime }}
        </template>
      </el-table-column>
      <el-table-column label="创建人" prop="creator.phone" sortable="custom" show-overflow-tooltip>
        <template v-slot:default="{ row }: VehicleUsageScope">
          {{ row.creator.nickname }}({{ row.creator.phone }})
        </template>
      </el-table-column>
      <el-table-column label="更新人" prop="editor.phone" sortable="custom" show-overflow-tooltip>
        <template v-slot:default="{ row }: VehicleUsageScope">
          {{ row.editor.nickname }}({{ row.editor.phone }})
        </template>
      </el-table-column>
      <el-table-column label="操作" fixed="right">
        <template v-slot:default="{ row }">
          <div>
            <el-button class="edit-btn" link size="small" type="primary" @click="handleEdit(row)">
              <el-icon>
                <edit />
              </el-icon>
            </el-button>
            <el-button
              class="delete-btn"
              link
              size="small"
              type="primary"
              @click="handleSingleDelete(row)"
            >
              <el-icon>
                <delete />
              </el-icon>
            </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <div class="page">
      <el-pagination
        style="margin-top: 30px"
        :current-page="queryRequest.pageNum"
        :page-size="queryRequest.pageSize"
        :page-sizes="[10, 20, 30, 40, 50]"
        :total="pageData.totalElements"
        background
        small
        layout="prev, pager, next, jumper, total, sizes"
        @current-change="(pageNum) => loadTableData({ pageNum })"
        @size-change="(pageSize) => loadTableData({ pageSize })"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.button-section {
  margin: 20px 0;
}

.page {
  display: flex;
  justify-content: flex-end;
}
</style>
