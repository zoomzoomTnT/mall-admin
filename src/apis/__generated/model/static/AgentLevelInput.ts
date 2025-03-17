import type { AgentLevelName } from '../enums/'

/**
 * Entity for table "agent_level"
 */
export interface AgentLevelInput {
  tenantId?: string | undefined
  /**
   * 等级名称
   */
  levelName: AgentLevelName
  /**
   * 佣金比例
   */
  rate: number
  id?: string | undefined
}
