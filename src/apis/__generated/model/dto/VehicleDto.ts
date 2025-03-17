export type VehicleDto = {
  /**
   */
  'VehicleRepository/COMPLEX_FETCHER': {
    id: string
    createdTime: string
    editedTime: string
    licensePlate: string
    milage?: number | undefined
    defaultGarage?: string | undefined
    defaultPrice?: number | undefined
    resetTimeEngineOil?: string | undefined
    resetTimeTire?: string | undefined
    top?: boolean | undefined
    details?: string | undefined
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
