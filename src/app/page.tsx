import Image from "next/image";
import Link from "next/link";
import IsoConstructionWorkerImg from "@public/iso-construction-worker.png";
import PersonalLogo from "@public/logo_1024.png";

// TODO: responsive images

export default function HomePage() {
  return (
    <main className="flex flex-col lg:flex-row lg:gap-4 min-h-screen items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 p-4 text-center text-white">
      <div className="max-w-lg">
        <Image
          src={PersonalLogo}
          width={160}
          height={160}
          priority
          alt="Sean Ormiston personal brand logo"
          className="mx-auto border-2 border-double border-white rounded-sm cloud-shadow-md mb-4"
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
          className="mx-auto mb-2 cloud-shadow-sm"
        />
      </div>
      <div className="lg:-mt-16">
        <p className="mb-2 cloud-shadow-xs">
          In the meantime, you can check out my <br />
          <Link
            href="/2020-portfolio"
            className="underline font-semibold drop-shadow-xs hover:cloud-shadow-xs"
          >
            2020 (pre-professional) portfolio
          </Link>
        </p>
        <div className="text-6xl mb-2">🕴️</div>
        <p>
          Or review my current
          <Link
            href="/resume"
            className="inline-block ml-2 px-2 py-2 cloud-shadow-md bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
          >
            RESUME
          </Link>
        </p>
      </div>
    </main>
  );
}
