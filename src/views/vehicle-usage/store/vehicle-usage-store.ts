import { defineStore } from 'pinia'
import { useTableHelper } from '@/components/base/table/table-helper'
import { useDialogHelper } from '@/components/base/dialog/dialog-helper'
import { useQueryHelper } from '@/components/base/query/query-helper'
import type { VehicleUsageInput, VehicleUsageSpec } from '@/apis/__generated/model/static'
import { api } from '@/utils/api-instance'
import { ref } from 'vue'
import type { VehicleUsageDto } from '@/apis/__generated/model/dto'

export const useVehicleUsageStore = defineStore('vehicleUsage', () => {
  const initQuery: VehicleUsageSpec = {
    vehicle: {},
    productSku: {}
  }
  const initForm: VehicleUsageInput = { productSkuId: '', vehicleId: '' }
  const tableHelper = useTableHelper(
    api.vehicleUsageController.query,
    api.vehicleUsageController,
    initQuery
  )
  const dialogHelper = useDialogHelper()
  const queryHelper = useQueryHelper<VehicleUsageSpec>(initQuery)
  const updateForm = ref<VehicleUsageInput>({ ...initForm })
  const createForm = ref<VehicleUsageInput>({ ...initForm })
  return { ...tableHelper, ...dialogHelper, ...queryHelper, updateForm, createForm, initForm }
})
