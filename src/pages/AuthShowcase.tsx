import { Session } from "next-auth/core/types";
import { signIn, signOut } from "next-auth/react";

const AuthShowcase: React.FC<{ session: Session | null }> = ({ session }) => {
  return (
    <div>
      {session ? (
        <button
          onClick={() => signOut()}
          className="rounded border border-blue-500 bg-transparent py-2 px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white"
        >
          Sign out
        </button>
      ) : (
        <button
          onClick={() => signIn()}
          className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
        >
          Sign in
        </button>
      )}
    </div>
  );
};

export default AuthShowcase;
