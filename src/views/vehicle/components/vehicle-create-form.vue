<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { reactive, ref, watch } from 'vue'
import { useVehicleStore } from '../store/vehicle-store'
import { assertFormValidate, assertSuccess } from '@/utils/common'
import { api } from '@/utils/api-instance'
import ImageUpload from '@/components/image/image-upload.vue'
import FooterButton from '@/components/base/dialog/footer-button.vue'
import DictSelect from '@/components/dict/dict-select.vue'
import type { FormInstance, FormRules } from 'element-plus'
import { DictConstants } from '@/apis/__generated/model/enums/DictConstants'

const vehicleStore = useVehicleStore()
const { closeDialog, reloadTableData } = vehicleStore
const { createForm, dialogData } = storeToRefs(vehicleStore)
const createFormRef = ref<FormInstance>()
const rules = reactive<FormRules<typeof createForm>>({
  licensePlate: [{ required: true, message: '请输入车牌号', trigger: 'blur' }],
  vehicleType: [{ required: true, message: '请输入车辆类型', trigger: 'blur' }]
})
const init = async () => {
  dialogData.value.title = '创建'
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
  createFormRef.value?.validate(
    assertFormValidate(() =>
      api.vehicleController.save({ body: createForm.value }).then(async (res) => {
        assertSuccess(res).then(() => {
          closeDialog()
          reloadTableData()
        })
      })
    )
  )
}
</script>
<template>
  <div class="create-form">
    <el-form labelWidth="120" class="form" ref="createFormRef" :model="createForm" :rules="rules">
      <el-form-item label="车牌号" prop="licensePlate">
        <el-input v-model="createForm.licensePlate"></el-input>
      </el-form-item>
      <el-form-item label="车辆类型" prop="vehicleType">
        <el-input-number v-model="createForm.vehicleType"></el-input-number>
      </el-form-item>
      <el-form-item label="备注" prop="details">
        <el-input v-model="createForm.details"></el-input>
      </el-form-item>
      <el-form-item label="是否置顶" prop="top">
        <el-input-number v-model="createForm.top"></el-input-number>
      </el-form-item>
      <el-form-item label="里程数" prop="milage">
        <el-input-number v-model="createForm.milage"></el-input-number>
      </el-form-item>
      <el-form-item label="默认车库" prop="defaultGarage">
        <el-input v-model="createForm.defaultGarage"></el-input>
      </el-form-item>
      <el-form-item label="默认价格" prop="defaultPrice">
        <el-input-number v-model="createForm.defaultPrice"></el-input-number>
      </el-form-item>
      <el-form-item label="机油更换时间" prop="resetTimeEngineOil">
        <el-date-picker
          v-model="createForm.resetTimeEngineOil"
          type="datetime"
          placeholder="请选择日期"
          value-format="YYYY-MM-DD HH:mm:ss"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="轮胎更换时间" prop="resetTimeTire">
        <el-date-picker
          v-model="createForm.resetTimeTire"
          type="datetime"
          placeholder="请选择日期"
          value-format="YYYY-MM-DD HH:mm:ss"
        ></el-date-picker>
      </el-form-item>
    </el-form>
    <footer-button @close="closeDialog" @confirm="handleConfirm"></footer-button>
  </div>
</template>

<style lang="scss" scoped>
.create-form {
  margin-right: 30px;
}
</style>
