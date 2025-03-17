import type { WalletRecordType } from '../enums/'

/**
 * Entity for table "wallet_record"
 */
export interface WalletRecordSpec {
  /**
   * 金额
   */
  amount?: number | undefined
  /**
   * 类型如：提现，充值，奖励，返佣等等
   */
  type?: WalletRecordType | undefined
  /**
   * 描述信息
   */
  description?: string | undefined
  /**
   * 钱包id
   */
  walletId?: string | undefined
  id?: string | undefined
  minEditedTime?: string | undefined
  maxEditedTime?: string | undefined
  minCreatedTime?: string | undefined
  maxCreatedTime?: string | undefined
}
