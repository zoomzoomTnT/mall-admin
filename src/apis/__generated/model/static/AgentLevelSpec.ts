import type { AgentLevelName } from '../enums/'

/**
 * Entity for table "agent_level"
 */
export interface AgentLevelSpec {
  /**
   * 等级名称
   */
  levelName?: AgentLevelName | undefined
  /**
   * 佣金比例
   */
  rate?: number | undefined
  tenantId?: string | undefined
  id?: string | undefined
  minCreatedTime?: string | undefined
  maxCreatedTime?: string | undefined
  minEditedTime?: string | undefined
  maxEditedTime?: string | undefined
}
