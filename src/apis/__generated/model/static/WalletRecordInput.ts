import type { WalletRecordType } from '../enums/'

/**
 * Entity for table "wallet_record"
 */
export interface WalletRecordInput {
  /**
   * 金额
   */
  amount: number
  /**
   * 类型如：提现，充值，奖励，返佣等等
   */
  type: WalletRecordType
  /**
   * 描述信息
   */
  description: string
  id?: string | undefined
}
