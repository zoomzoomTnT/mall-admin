import type { VehicleInput_TargetOf_vehicleType } from './'

export interface VehicleInput {
  licensePlate: string
  milage?: number | undefined
  defaultGarage?: string | undefined
  defaultPrice?: number | undefined
  resetTimeEngineOil?: string | undefined
  resetTimeTire?: string | undefined
  top?: boolean | undefined
  details?: string | undefined
  vehicleType: VehicleInput_TargetOf_vehicleType
  id?: string | undefined
}
