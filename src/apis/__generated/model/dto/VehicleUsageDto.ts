import type { VehicleUsageStatus } from '../enums/'

export type VehicleUsageDto = {
  /**
   */
  'VehicleUsageRepository/COMPLEX_FETCHER': {
    id: string
    createdTime: string
    editedTime: string
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
    vehicle: {
      id: string
      licensePlate: string
    }
    productSku: {
      id: string
      name: string
    }
    creator: {
      id: string
      phone: string
      nickname?: string | undefined
    }
    editor: {
      id: string
      phone: string
      nickname?: string | undefined
    }
  }
}
