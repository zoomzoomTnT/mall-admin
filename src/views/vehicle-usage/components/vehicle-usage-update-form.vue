<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { reactive, ref, watch } from 'vue'
import { useVehicleUsageStore } from '../store/vehicle-usage-store'
import { assertFormValidate, assertSuccess } from '@/utils/common'
import { api } from '@/utils/api-instance'
import ImageUpload from '@/components/image/image-upload.vue'
import FooterButton from '@/components/base/dialog/footer-button.vue'
import DictSelect from '@/components/dict/dict-select.vue'
import type { FormInstance, FormRules } from 'element-plus'
import { DictConstants } from '@/apis/__generated/model/enums/DictConstants'

const vehicleUsageStore = useVehicleUsageStore()
const { closeDialog, reloadTableData } = vehicleUsageStore
const { updateForm, dialogData } = storeToRefs(vehicleUsageStore)
const updateFormRef = ref<FormInstance>()
const rules = reactive<FormRules<typeof updateForm>>({
  returnGarage: [{ required: true, message: '请输入还车车库', trigger: 'blur' }],
  pickUpGarage: [{ required: true, message: '请输入取车车库', trigger: 'blur' }],
  currentLocation: [{ required: true, message: '请输入车辆GPS位置', trigger: 'blur' }],
  tripDetail: [{ required: true, message: '请输入用车详情', trigger: 'blur' }],
  remark: [{ required: true, message: '请输入注意', trigger: 'blur' }]
})
const init = async () => {
  dialogData.value.title = '编辑'
  updateForm.value = {
    productSkuId: '', vehicleId: '',
    ...(await api.vehicleUsageController.findById({ id: updateForm.value.id || '' }))
  }
}
watch(
  () => dialogData.value.visible,
  (value) => {
    if (value) {
      init()
    }
  },
  { immediate: true }
)
const handleConfirm = () => {
  updateFormRef.value?.validate(
    assertFormValidate(() => {
      api.vehicleUsageController.save({ body: updateForm.value }).then(async (res) => {
        assertSuccess(res).then(() => {
          closeDialog()
          reloadTableData()
        })
      })
    })
  )
}
</script>
<template>
  <div class="update-form">
    <el-form labelWidth="120" class="form" ref="updateFormRef" :model="updateForm" :rules="rules">
      <el-form-item label="停车费用" prop="tripCostParking">
        <el-input-number v-model="updateForm.tripCostParking"></el-input-number>
      </el-form-item>
      <el-form-item label="超时费用" prop="tripCostSurpass">
        <el-input-number v-model="updateForm.tripCostSurpass"></el-input-number>
      </el-form-item>
      <el-form-item label="用车费用" prop="tripCostFee">
        <el-input-number v-model="updateForm.tripCostFee"></el-input-number>
      </el-form-item>
      <el-form-item label="其他费用" prop="tripCostOther">
        <el-input-number v-model="updateForm.tripCostOther"></el-input-number>
      </el-form-item>
      <el-form-item label="加油费用" prop="tripCostFuel">
        <el-input-number v-model="updateForm.tripCostFuel"></el-input-number>
      </el-form-item>
      <el-form-item label="司机费用" prop="tripCostLabor">
        <el-input-number v-model="updateForm.tripCostLabor"></el-input-number>
      </el-form-item>
      <el-form-item label="高速费用" prop="tripCostEtc">
        <el-input-number v-model="updateForm.tripCostEtc"></el-input-number>
      </el-form-item>
      <el-form-item label="用车预定时间" prop="tripReservedTime">
        <el-date-picker
          v-model="updateForm.tripReservedTime"
          type="datetime"
          placeholder="请选择日期"
          value-format="YYYY-MM-DD HH:mm:ss"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="还车车库" prop="returnGarage">
        <el-input v-model="updateForm.returnGarage"></el-input>
      </el-form-item>
      <el-form-item label="取车车库" prop="pickUpGarage">
        <el-input v-model="updateForm.pickUpGarage"></el-input>
      </el-form-item>
      <el-form-item label="车辆GPS位置" prop="currentLocation">
        <el-input v-model="updateForm.currentLocation"></el-input>
      </el-form-item>
      <el-form-item label="用车状态" prop="vehicleUsageStatus">
        <dict-select
          :dict-id="DictConstants.VEHICLE_USAGE_STATUS"
          v-model="updateForm.vehicleUsageStatus"
        ></dict-select>
      </el-form-item>
      <el-form-item label="用车详情" prop="tripDetail">
        <el-input v-model="updateForm.tripDetail"></el-input>
      </el-form-item>
      <el-form-item label="用车里程数" prop="tripMilage">
        <el-input-number v-model="updateForm.tripMilage"></el-input-number>
      </el-form-item>
      <el-form-item label="注意" prop="remark">
        <el-input v-model="updateForm.remark"></el-input>
      </el-form-item>
<!--      <el-form-item label="车辆信息" prop="vehicle">-->
<!--        <el-input v-model="updateForm.vehicleId"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="订单信息" prop="productSku">-->
<!--        <el-input v-model="updateForm.productSkuId"></el-input>-->
<!--      </el-form-item>-->
    </el-form>
    <footer-button @close="closeDialog" @confirm="handleConfirm"></footer-button>
  </div>
</template>

<style lang="scss" scoped>
.update-form {
  margin-right: 30px;
}
</style>
