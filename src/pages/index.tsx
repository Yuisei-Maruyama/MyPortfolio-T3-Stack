import { type NextPage } from "next";
import Head from "next/head";
import { useSession } from "next-auth/react";
import Header from "@/src/components/Base/Header";

import { api } from "../utils/api";

const Home: NextPage = () => {
  const { data: session } = useSession();
  const hello = api.example.hello.useQuery({
    text: `from tRPC by ${session?.user?.email}`,
  });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <Header session={session} />
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="sm:text-[5rem] text-5xl font-extrabold tracking-tight text-white">
            My Portfolio <span className="text-[hsl(280,100%,70%)]">T3</span>
          </h1>
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-white">
              {hello.data ? hello.data.greeting : "Loading tRPC query..."}
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
