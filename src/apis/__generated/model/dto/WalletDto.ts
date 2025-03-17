export type WalletDto = {
  /**
   */
  'WalletRepository/COMPLEX_FETCHER': {
    id: string
    createdTime: string
    editedTime: string
    /**
     * 余额
     */
    balance: number
    /**
     * 钱包密码
     */
    password?: string | undefined
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
