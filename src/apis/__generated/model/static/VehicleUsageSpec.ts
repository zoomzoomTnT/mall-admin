import type { VehicleUsageStatus } from '../enums/'
import type { VehicleUsageSpec_TargetOf_productSku, VehicleUsageSpec_TargetOf_vehicle } from './'

export interface VehicleUsageSpec {
  vehicleUsageStatus?: VehicleUsageStatus | undefined
  currentLocation?: string | undefined
  tripMilage?: number | undefined
  tripCostFee?: number | undefined
  tripCostLabor?: number | undefined
  tripCostEtc?: number | undefined
  tripCostFuel?: number | undefined
  tripCostParking?: number | undefined
  tripCostSurpass?: number | undefined
  tripCostOther?: number | undefined
  tripDetail?: string | undefined
  remark?: string | undefined
  pickUpGarage?: string | undefined
  returnGarage?: string | undefined
  minTripReservedTime?: string | undefined
  maxTripReservedTime?: string | undefined
  id?: string | undefined
  minEditedTime?: string | undefined
  maxEditedTime?: string | undefined
  minCreatedTime?: string | undefined
  maxCreatedTime?: string | undefined
  vehicle?: VehicleUsageSpec_TargetOf_vehicle | undefined
  productSku?: VehicleUsageSpec_TargetOf_productSku | undefined
}
