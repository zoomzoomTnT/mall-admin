import type { AgentLevelName } from '../enums/'

export type AgentDto = {
  /**
   */
  'AgentRepository/COMPLEX_FETCHER': {
    id: string
    createdTime: string
    editedTime: string
    tenantId?: string | undefined
    /**
     * 代理商编号
     */
    agentNo: string
    /**
     * 上级代理id
     */
    parentId: string
    /**
     * 代理等级
     */
    agentLevel: {
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
    }
    /**
     * 用户id
     */
    userId: string
    user: {
      id: string
      phone: string
      nickname?: string | undefined
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
