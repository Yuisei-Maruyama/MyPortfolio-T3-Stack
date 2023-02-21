import { authorizationState } from '@/src/globalStates/Authorization/AuthorizationState'
import { Session } from 'next-auth/core/types'
import { signIn, signOut } from 'next-auth/react'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

const AuthShowcase: React.FC<{ session: Session | null }> = ({ session }) => {
  const [authorization, setAuthorization] = useRecoilState(authorizationState)
  const handleAuth = () => {
    session ? signOut() : signIn()
  }

  useEffect(() => {
    setAuthorization(session)
  }, [session])

  console.log('authorization', authorization)

  return (
    <div>
      {session ? (
        <button
          onClick={handleAuth}
          className="rounded border border-blue-500 bg-transparent py-2 px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white"
        >
          Sign out
        </button>
      ) : (
        <button onClick={handleAuth} className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
          Sign in
        </button>
      )}
    </div>
  )
}

export default AuthShowcase
