import type { AgentInput_TargetOf_agentLevel } from './'

/**
 * Entity for table "agent"
 */
export interface AgentInput {
  tenantId?: string | undefined
  /**
   * 代理商编号
   */
  agentNo: string
  /**
   * 上级代理id
   */
  parentId: string
  id?: string | undefined
  /**
   * 用户id
   */
  userId: string
  /**
   * 代理等级
   */
  agentLevel: AgentInput_TargetOf_agentLevel
}
