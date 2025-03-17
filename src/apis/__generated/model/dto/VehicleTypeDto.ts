export type VehicleTypeDto = {
  /**
   */
  'VehicleTypeRepository/COMPLEX_FETCHER': {
    id: string
    createdTime: string
    editedTime: string
    typeName: string
    typeSize: string
    manufacturer?: string | undefined
    fuelType?: string | undefined
    passengerCapacity?: number | undefined
    extraPassengerCapacity?: number | undefined
    luggageCapacity?: number | undefined
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
