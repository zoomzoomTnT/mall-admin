import type { Executor } from '../'
import type { VehicleUsageDto } from '../model/dto/'
import type { Page, QueryRequest, VehicleUsageInput, VehicleUsageSpec } from '../model/static/'

export class VehicleUsageController {
  constructor(private executor: Executor) {}

  async delete(options: VehicleUsageControllerOptions['delete']): Promise<boolean | undefined> {
    const _uri = '/vehicleUsage/delete'
    return (await this.executor({ uri: _uri, method: 'POST', body: options.body })) as Promise<
      boolean | undefined
    >
  }

  async findById(
    options: VehicleUsageControllerOptions['findById']
  ): Promise<VehicleUsageDto['VehicleUsageRepository/COMPLEX_FETCHER']> {
    let _uri = '/vehicleUsage/'
    _uri += encodeURIComponent(options.id)
    return (await this.executor({ uri: _uri, method: 'GET' })) as Promise<
      VehicleUsageDto['VehicleUsageRepository/COMPLEX_FETCHER']
    >
  }

  async query(
    options: VehicleUsageControllerOptions['query']
  ): Promise<Page<VehicleUsageDto['VehicleUsageRepository/COMPLEX_FETCHER']>> {
    const _uri = '/vehicleUsage/query'
    return (await this.executor({ uri: _uri, method: 'POST', body: options.body })) as Promise<
      Page<VehicleUsageDto['VehicleUsageRepository/COMPLEX_FETCHER']>
    >
  }

  async save(options: VehicleUsageControllerOptions['save']): Promise<string> {
    const _uri = '/vehicleUsage/save'
    return (await this.executor({
      uri: _uri,
      method: 'POST',
      body: options.body
    })) as Promise<string>
  }
}

export type VehicleUsageControllerOptions = {
  findById: {
    id: string
  }
  query: {
    body: QueryRequest<VehicleUsageSpec>
  }
  save: {
    body: VehicleUsageInput
  }
  delete: {
    body: Array<string>
  }
}
