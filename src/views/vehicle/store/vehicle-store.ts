import { defineStore } from 'pinia'
import { useTableHelper } from '@/components/base/table/table-helper'
import { useDialogHelper } from '@/components/base/dialog/dialog-helper'
import { useQueryHelper } from '@/components/base/query/query-helper'
import type { VehicleInput, VehicleSpec } from '@/apis/__generated/model/static'
import { api } from '@/utils/api-instance'
import { ref } from 'vue'
import type { VehicleDto } from '@/apis/__generated/model/dto'

export const useVehicleStore = defineStore('vehicle', () => {
  const initQuery: VehicleSpec = {}
  const initForm: VehicleInput = { licensePlate: '', vehicleType: { typeName: '', typeSize: '' } }
  const tableHelper = useTableHelper(api.vehicleController.query, api.vehicleController, initQuery)
  const dialogHelper = useDialogHelper()
  const queryHelper = useQueryHelper<VehicleSpec>(initQuery)
  const updateForm = ref<VehicleInput>({ ...initForm })
  const createForm = ref<VehicleInput>({ ...initForm })
  return { ...tableHelper, ...dialogHelper, ...queryHelper, updateForm, createForm, initForm }
})
