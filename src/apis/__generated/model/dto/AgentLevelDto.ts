import type { AgentLevelName } from '../enums/'

export type AgentLevelDto = {
  /**
   */
  'AgentLevelRepository/COMPLEX_FETCHER': {
    id: string
    createdTime: string
    editedTime: string
    tenantId?: string | undefined
    /**
     * 等级名称
     */
    levelName: AgentLevelName
    /**
     * 佣金比例
     */
    rate: number
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
