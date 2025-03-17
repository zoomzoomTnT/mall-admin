import type { WalletRecordType } from '../enums/'

export type WalletRecordDto = {
  /**
   */
  'WalletRecordRepository/COMPLEX_FETCHER': {
    id: string
    createdTime: string
    editedTime: string
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
