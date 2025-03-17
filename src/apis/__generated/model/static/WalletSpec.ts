/**
 * Entity for table "wallet"
 */
export interface WalletSpec {
  /**
   * 余额
   */
  balance?: number | undefined
  /**
   * 钱包密码
   */
  password?: string | undefined
  id?: string | undefined
  minEditedTime?: string | undefined
  maxEditedTime?: string | undefined
  minCreatedTime?: string | undefined
  maxCreatedTime?: string | undefined
}
