import Image from "next/image";
import Link from "next/link";
import IsoConstructionWorkerImg from "@public/iso-construction-worker.png";
import PersonalLogo from "@public/logo_1024.png";

// TODO: responsive images

export default function HomePage() {
  return (
    <main
      className="p-2 md:p-4 lg:p-6 flex flex-col gap-2 md:gap-5 lg:gap-6 min-h-screen items-center justify-center bg-gradient-aurora text-center text-white
      lg:grid lg:cols-3 xl:cols-4 grid-flow-col"
    >
      <div className="p-2 md:p-4 lg:col-span-2 xl:col-span-2 lg:p-6 flex flex-col justify-center w-full h-fit max-w-2xl border border-white rounded-lg cloud-shadow-sm">
        <Image
          src={PersonalLogo}
          priority
          alt="Sean Ormiston personal brand logo"
          className="w-40 h-40 mx-auto rounded-sm cloud-shadow-md mb-4 bg-iridescent shimmer-effect p-1"
        />
        <h1 className="text-5xl font-bold mb-4 md:text-6xl tracking-wide cloud-shadow-sm">
          Coming Soon
        </h1>
        <p className="text-lg/6 mb-2 md:text-xl cloud-shadow-xs">
          My new professional portfolio is under construction. Stay tuned for
          something amazing!
        </p>
        <Image
          src={IsoConstructionWorkerImg}
          alt="Under Construction"
          width={300}
          height={300}
          className="mx-auto mb-2 cloud-shadow-md xl:mt-4"
        />
      </div>

      <div className="p-2 md:p-4 lg:p-6 w-full max-w-2xl lg:max-w-lg lg:col-span-1 xl:col-span-2 backdrop-blur-md bg-neutral-600/10 rounded-lg cloud-shadow-sm lg:-mt-16 text-lg/6">
        <p className="mb-2 cloud-shadow-xs">
          In the meantime, you can check out my <br />
          <Link
            href="/2020-portfolio"
            className="underline font-semibold drop-shadow-xs hover:cloud-shadow-xs bg-clip-text iridescent-text-overlay shimmer-effect text-transparent"
          >
            2020 portfolio
          </Link>
        </p>
        <div className="text-6xl mb-2 cloud-shadow-sm">🕴️</div>
        <span className="cloud-shadow-sm">
          Or review my current
          <div className="ml-2 border border-gray-300 rounded-lg bg-iridescent shimmer-effect p-1 w-fit inline-block">
            <Link
              href="/resume"
              className="px-2 py-2 border border-gray-300 inline-block bg-white cloud-shadow-md text-neutral-700 font-semibold rounded-lg shadow-md"
            >
              RESUME
            </Link>
          </div>
        </span>
      </div>
    </main>
  );
}
