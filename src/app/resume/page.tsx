import Image from "next/image";
import IsoConstructionWorkerImg from "@public/iso-construction-worker.png";

export default function ResumePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 px-4 text-center text-white">
      <Image
        src={IsoConstructionWorkerImg}
        alt="Under Construction"
        width={300}
        height={200}
        className="mx-auto mb-8 drop-shadow-[0_4px_6px_rgba(255,255,255,0.5)]"
      />
    </main>
  );
}
