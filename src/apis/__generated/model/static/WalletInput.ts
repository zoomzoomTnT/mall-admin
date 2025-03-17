/**
 * Entity for table "wallet"
 */
export interface WalletInput {
  /**
   * 余额
   */
  balance: number
  /**
   * 钱包密码
   */
  password?: string | undefined
  id?: string | undefined
}
