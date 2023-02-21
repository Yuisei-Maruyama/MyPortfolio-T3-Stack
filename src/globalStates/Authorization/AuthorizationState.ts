import { atom, selector } from 'recoil'
import { Session } from 'next-auth/core/types'
import { RecoilAtomKeys, RecoilSelectorKeys } from '../RecoilKeys'

export const authorizationState = atom<Session | null>({
  key: RecoilAtomKeys.AUTHORIZATION_STATE,
  default: {
    user: {
      id: '',
      name: null,
      email: null,
      image: null,
    },
    expires: '',
  },
})

export const authorizationSelector = selector<Session | null>({
  key: RecoilSelectorKeys.AUTHORIZATION,
  get: ({ get }) => {
    const authorization: Session | null = get(authorizationState)
    return authorization
  },
})
