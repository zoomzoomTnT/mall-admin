import { defineStore } from 'pinia'
import { useTableHelper } from '@/components/base/table/table-helper'
import { useDialogHelper } from '@/components/base/dialog/dialog-helper'
import { useQueryHelper } from '@/components/base/query/query-helper'
import type { VehicleTypeInput, VehicleTypeSpec } from '@/apis/__generated/model/static'
import { api } from '@/utils/api-instance'
import { ref } from 'vue'
import type { VehicleTypeDto } from '@/apis/__generated/model/dto'

export const useVehicleTypeStore = defineStore('vehicleType', () => {
  const initQuery: VehicleTypeSpec = {}
  const initForm: VehicleTypeInput = { createdTime: '', editedTime: '', typeName: '', typeSize: '' }
  const tableHelper = useTableHelper(
    api.vehicleTypeController.query,
    api.vehicleTypeController,
    initQuery
  )
  const dialogHelper = useDialogHelper()
  const queryHelper = useQueryHelper<VehicleTypeSpec>(initQuery)
  const updateForm = ref<VehicleTypeInput>({ ...initForm })
  const createForm = ref<VehicleTypeInput>({ ...initForm })
  return { ...tableHelper, ...dialogHelper, ...queryHelper, updateForm, createForm, initForm }
})
