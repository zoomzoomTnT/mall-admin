import type { AgentSpec_TargetOf_agentLevel } from './'

/**
 * Entity for table "agent"
 */
export interface AgentSpec {
  tenantId?: string | undefined
  /**
   * 上级代理id
   */
  parentId?: string | undefined
  /**
   * 代理商编号
   */
  agentNo?: string | undefined
  id?: string | undefined
  minCreatedTime?: string | undefined
  maxCreatedTime?: string | undefined
  minEditedTime?: string | undefined
  maxEditedTime?: string | undefined
  userId?: string | undefined
  /**
   * 代理等级
   */
  agentLevel?: AgentSpec_TargetOf_agentLevel | undefined
}
