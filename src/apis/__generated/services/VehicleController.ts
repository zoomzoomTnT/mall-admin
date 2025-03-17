import type { Executor } from '../'
import type { VehicleDto } from '../model/dto/'
import type { Page, QueryRequest, VehicleInput, VehicleSpec, VehicleView } from '../model/static/'

export class VehicleController {
  constructor(private executor: Executor) {}

  async delete(options: VehicleControllerOptions['delete']): Promise<boolean | undefined> {
    const _uri = '/vehicle/delete'
    return (await this.executor({ uri: _uri, method: 'POST', body: options.body })) as Promise<
      boolean | undefined
    >
  }

  async findById(
    options: VehicleControllerOptions['findById']
  ): Promise<VehicleDto['VehicleRepository/COMPLEX_FETCHER']> {
    let _uri = '/vehicle/'
    _uri += encodeURIComponent(options.id)
    return (await this.executor({ uri: _uri, method: 'GET' })) as Promise<
      VehicleDto['VehicleRepository/COMPLEX_FETCHER']
    >
  }

  async getVehicleView(options: VehicleControllerOptions['getVehicleView']): Promise<VehicleView> {
    let _uri = '/vehicle/view/'
    _uri += encodeURIComponent(options.id)
    return (await this.executor({ uri: _uri, method: 'GET' })) as Promise<VehicleView>
  }

  async query(
    options: VehicleControllerOptions['query']
  ): Promise<Page<VehicleDto['VehicleRepository/COMPLEX_FETCHER']>> {
    const _uri = '/vehicle/query'
    return (await this.executor({ uri: _uri, method: 'POST', body: options.body })) as Promise<
      Page<VehicleDto['VehicleRepository/COMPLEX_FETCHER']>
    >
  }

  async save(options: VehicleControllerOptions['save']): Promise<string> {
    const _uri = '/vehicle/save'
    return (await this.executor({
      uri: _uri,
      method: 'POST',
      body: options.body
    })) as Promise<string>
  }
}

export type VehicleControllerOptions = {
  getVehicleView: {
    id: string
  }
  findById: {
    id: string
  }
  query: {
    body: QueryRequest<VehicleSpec>
  }
  save: {
    body: VehicleInput
  }
  delete: {
    body: Array<string>
  }
}
