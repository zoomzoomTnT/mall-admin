export const VehicleUsageStatus_CONSTANTS = ['AVAILABLE', 'OCCUPIED'] as const
export type VehicleUsageStatus = (typeof VehicleUsageStatus_CONSTANTS)[number]
