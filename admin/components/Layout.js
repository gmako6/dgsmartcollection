import NavBar from "@/components/NavBar";
import { useSession, signIn, signOut } from "next-auth/react";
import { Children } from "react";
import { CiSearch, CiUser } from "react-icons/ci";

export default function Layout({ children }) {
  const { data: session } = useSession();

  //console.log(session);

  if (!session) {
    return (
      <div className="bg-blue-900 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button
            onClick={() => signIn("google")}
            className="bg-white p-2 px-4 rounded-lg"
          >
            Login with Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-blue-900 w-screen h-screen flex">
      <NavBar />
      <div className="bg-white flex-grow mt-2 mr-2 rounded-lg p-4">
        <div className="flex flex-row justify-between items-center p-2 border border-b-2 border-t-0 border-x-0 border-blue-900">
          <div className="">Hello! {session.user.name}</div>
          <div className="flex items-center">
            <div className="flex items-center rounded-lg p-1 border border-spacing-2 border-blue-900">
              <input placeholder="Search here" className="ring-outline-none" />
              <CiSearch />
            </div>
            {session ? (
              <img
                src={session.user.image}
                alt="user"
                className="w-8 h-8 ml-2 rounded-full border border-blue-900"
              />
            ) : (
              <CiUser className="ml-2 rounded-lg bg-slate-300 w-8 h-8" />
            )}

            <button
              onClick={() => signOut()}
              className="bg-slate-300 p-2 px-4 rounded-full ml-2"
            >
              Sign Out
            </button>
          </div>
        </div>
        <div className="mt-5">{children}</div>
      </div>
    </div>
  );
}
