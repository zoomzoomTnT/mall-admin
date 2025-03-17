import type { Executor } from '../'
import type { VehicleTypeDto } from '../model/dto/'
import type { Page, QueryRequest, VehicleTypeInput, VehicleTypeSpec } from '../model/static/'

export class VehicleTypeController {
  constructor(private executor: Executor) {}

  async delete(options: VehicleTypeControllerOptions['delete']): Promise<boolean | undefined> {
    const _uri = '/vehicleType/delete'
    return (await this.executor({ uri: _uri, method: 'POST', body: options.body })) as Promise<
      boolean | undefined
    >
  }

  async findById(
    options: VehicleTypeControllerOptions['findById']
  ): Promise<VehicleTypeDto['VehicleTypeRepository/COMPLEX_FETCHER']> {
    let _uri = '/vehicleType/'
    _uri += encodeURIComponent(options.id)
    return (await this.executor({ uri: _uri, method: 'GET' })) as Promise<
      VehicleTypeDto['VehicleTypeRepository/COMPLEX_FETCHER']
    >
  }

  async query(
    options: VehicleTypeControllerOptions['query']
  ): Promise<Page<VehicleTypeDto['VehicleTypeRepository/COMPLEX_FETCHER']>> {
    const _uri = '/vehicleType/query'
    return (await this.executor({ uri: _uri, method: 'POST', body: options.body })) as Promise<
      Page<VehicleTypeDto['VehicleTypeRepository/COMPLEX_FETCHER']>
    >
  }

  async save(options: VehicleTypeControllerOptions['save']): Promise<string> {
    const _uri = '/vehicleType/save'
    return (await this.executor({
      uri: _uri,
      method: 'POST',
      body: options.body
    })) as Promise<string>
  }
}

export type VehicleTypeControllerOptions = {
  findById: {
    id: string
  }
  query: {
    body: QueryRequest<VehicleTypeSpec>
  }
  save: {
    body: VehicleTypeInput
  }
  delete: {
    body: Array<string>
  }
}
