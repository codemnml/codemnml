"use client"

import Image from "next/image";
import { Graph } from "react-github-activity-calendar";



export default function Home() {

  const githubApiKey = process.env.NEXT_PUBLIC_GITHUB_API_KEY as string;
  console.log(process.env);
  console.log(githubApiKey);
  const githubUserName = "codemnml";
  const bgcolor = "";
  const textColor = "lightgray";


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed p-4 left-0 top-0 flex flex-col w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200  backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <p className="pb-2">Hello, my name is Michael.&nbsp;</p>
          <code className="font-mono font-bold flex">I&apos;m a Software Engineer and Entrepreneur.</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Made with ❤️ by {"Code MNML"}

          </a>
        </div>
      </div>

      <div className="relative z-[-1] text-2xl pt-8 flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
          I build assets on the Web.
      </div>
      

      <div className="pt-8 pb-6 w-96 sm:w-[40rem] lg:w-fit">
        <Graph
          userName={githubUserName}
          backgroundColor={bgcolor}
          githubApiKey={githubApiKey}
          color={textColor}
          className=""
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
              <h1 className="text-2xl px-5 py-4 text-slate-400">Projects</h1>
        <a
          href="https://www.dirkandsons.com"
          className="group rounded-lg border border-transparent px-5 py-8 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          <h2 className="mb-3 text-2xl font-semibold">
            Dirk & Sons{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50 hover:opacity-100 transition">
          <Image
              src="/dirkandsons.png"
              alt="Dirk & Sons"
              className="flex mx-auto lg:mx-0"
              width={160}
              height={40}
              priority
            />
          </p>
        </a>

        <a
          href="https://www.california-junkremoval.com"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            California Junk Removal{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50 hover:opacity-100 transition">
          <Image
              src="/californiajunkremoval.png"
              alt="Vercel Logo"
              className="flex mx-auto lg:mx-0"
              width={160}
              height={24}
              priority
            />
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            GetAltPowered{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Coming soon.
          </p>
        </a>
      </div>
    </main>
  );
}
