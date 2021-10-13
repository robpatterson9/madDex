import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'MAD',
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0xdCa2b8A804ca21bffF0ca56d9163b40269A06B35',
    },
    token: serializedTokens.mad,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 251,
    lpSymbol: 'HEART-BNB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0xe9F98F83c88123b6c0C89dB033bA631d58651fd3',
    },
    token: serializedTokens.mad,
    quoteToken: serializedTokens.wbnb,
  },

  {
    pid: 1,
    lpSymbol: 'MAD-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0xe9F98F83c88123b6c0C89dB033bA631d58651fd3',
    },
    token: serializedTokens.mad,
    quoteToken: serializedTokens.wbnb,
  },
]

export default farms
