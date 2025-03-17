import type { VehicleUsageStatus } from '../enums/'

export interface VehicleUsageInput {
  vehicleUsageStatus?: VehicleUsageStatus | undefined
  currentLocation?: string | undefined
  pickUpGarage?: string | undefined
  returnGarage?: string | undefined
  tripDetail?: string | undefined
  tripReservedTime?: string | undefined
  tripMilage?: number | undefined
  tripCostFee?: number | undefined
  tripCostLabor?: number | undefined
  tripCostEtc?: number | undefined
  tripCostFuel?: number | undefined
  tripCostParking?: number | undefined
  tripCostSurpass?: number | undefined
  tripCostOther?: number | undefined
  remark?: string | undefined
  id?: string | undefined
  vehicleId: string
  productSkuId: string
}
