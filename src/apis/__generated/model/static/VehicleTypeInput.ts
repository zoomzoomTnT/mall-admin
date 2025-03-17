export interface VehicleTypeInput {
  createdTime: string
  editedTime: string
  typeName: string
  typeSize: string
  manufacturer?: string | undefined
  fuelType?: string | undefined
  passengerCapacity?: number | undefined
  extraPassengerCapacity?: number | undefined
  luggageCapacity?: number | undefined
  id?: string | undefined
}
