<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { reactive, ref, watch } from 'vue'
import { useVehicleTypeStore } from '../store/vehicle-type-store'
import { assertFormValidate, assertSuccess } from '@/utils/common'
import { api } from '@/utils/api-instance'
import ImageUpload from '@/components/image/image-upload.vue'
import FooterButton from '@/components/base/dialog/footer-button.vue'
import DictSelect from '@/components/dict/dict-select.vue'
import type { FormInstance, FormRules } from 'element-plus'
import { DictConstants } from '@/apis/__generated/model/enums/DictConstants'

const vehicleTypeStore = useVehicleTypeStore()
const { closeDialog, reloadTableData } = vehicleTypeStore
const { updateForm, dialogData } = storeToRefs(vehicleTypeStore)
const updateFormRef = ref<FormInstance>()
const rules = reactive<FormRules<typeof updateForm>>({
  typeName: [{ required: true, message: '请输入型号', trigger: 'blur' }],
  typeSize: [{ required: true, message: '请输入型号大小', trigger: 'blur' }],
  fuelType: [{ required: true, message: '请输入燃油类型', trigger: 'blur' }],
  manufacturer: [{ required: true, message: '请输入制造厂家', trigger: 'blur' }]
})
const init = async () => {
  dialogData.value.title = '编辑'
  updateForm.value = {
    ...(await api.vehicleTypeController.findById({ id: updateForm.value.id || '' }))
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
      api.vehicleTypeController.save({ body: updateForm.value }).then(async (res) => {
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
      <el-form-item label="型号" prop="typeName">
        <el-input v-model="updateForm.typeName"></el-input>
      </el-form-item>
      <el-form-item label="型号大小" prop="typeSize">
        <el-input v-model="updateForm.typeSize"></el-input>
      </el-form-item>
      <el-form-item label="燃油类型" prop="fuelType">
        <el-input v-model="updateForm.fuelType"></el-input>
      </el-form-item>
      <el-form-item label="制造厂家" prop="manufacturer">
        <el-input v-model="updateForm.manufacturer"></el-input>
      </el-form-item>
      <el-form-item label="正座数量" prop="passengerCapacity">
        <el-input-number v-model="updateForm.passengerCapacity"></el-input-number>
      </el-form-item>
      <el-form-item label="副座数量" prop="extraPassengerCapacity">
        <el-input-number v-model="updateForm.extraPassengerCapacity"></el-input-number>
      </el-form-item>
      <el-form-item label="行李容量" prop="luggageCapacity">
        <el-input-number v-model="updateForm.luggageCapacity"></el-input-number>
      </el-form-item>
    </el-form>
    <footer-button @close="closeDialog" @confirm="handleConfirm"></footer-button>
  </div>
</template>

<style lang="scss" scoped>
.update-form {
  margin-right: 30px;
}
</style>
