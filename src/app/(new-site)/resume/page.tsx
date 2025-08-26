import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import PersonalLogo from "@public/logo_216.png";
import ExperienceEntry from "@/components/ExperienceEntry";
import resume from "@/content/resume.json";

// Ensure this page is statically generated so errors happen at build time.
export const dynamic = "force-static";

function SkillBadges({
  header,
  keywords,
  className,
}: {
  header?: string;
  keywords: string[];
  className?: string;
}) {
  return (
    <div className={className}>
      {header && <h3 className="font-medium">{header}:</h3>}
      <div>
        {keywords.map((kw) => (
          <span
            key={kw}
            className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded-full mr-2 mb-2"
          >
            {kw}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ResumePage() {
  const skillKeywords = resume.sections.skills.items.find(
    ({ visible }) => visible
  )?.keywords;

  if (!skillKeywords) {
    throw new Error("Resume JSON is missing required Skills items: 'Primary'.");
  }

  const anattaExpSummary = resume.sections.experience.items.find(
    (item) => item.company === "Anatta Design"
  )?.summary;

  const unbabelExpSummary = resume.sections.experience.items.find(
    (item) => item.company === "Unbabel"
  )?.summary;

  const priberamExpSummary = resume.sections.experience.items.find(
    (item) => item.company === "Priberam Informática, S.A."
  )?.summary;

  const missingExpSummaries = [
    { company: "Anatta Design", summary: anattaExpSummary },
    { company: "Unbabel", summary: unbabelExpSummary },
    { company: "Priberam Informática, S.A.", summary: priberamExpSummary },
  ].filter((exp) => !exp.summary);

  if (missingExpSummaries.length > 0) {
    const missingCompanies = missingExpSummaries
      .map((exp) => exp.company)
      .join(", ");
    throw new Error(
      `Resume JSON is missing required Experience item content for: ${missingCompanies}.`
    );
  }

  return (
    <main className="max-w-4xl mx-auto p-8 text-gray-800 dark:text-gray-100 bg-white dark:bg-neutral-900">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Sean Ormiston</h1>
        <p className="text-lg">Frontend Developer</p>
        <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
          <a
            href="https://github.com/sormiston"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="inline-block w-8 h-8 opacity-80 hover:opacity-100 focus-visible:opacity-100 transition-all duration-200" />
          </a>

          <a
            href="https://www.linkedin.com/in/sormiston/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="inline-block text-blue-500 w-8 h-8 opacity-80 hover:opacity-100 focus-visible:opacity-100 transition-all duration-200" />
          </a>
          <Link href="/">
            <Image
              src={PersonalLogo}
              alt="Sean Ormiston Logo"
              className="rounded-full border-2 border-double w-8 h-8 border-gray-300 dark:border-gray-600 shadow-sm opacity-80 hover:opacity-100 focus-visible:opacity-100 transition-all duration-200"
            />
          </Link>
        </div>
      </header>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Summary</h2>
        <div
          dangerouslySetInnerHTML={{ __html: resume.sections.summary.content }}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <SkillBadges keywords={skillKeywords} className="mb-2" />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Experience</h2>

        <ExperienceEntry
          title="Senior UI Developer"
          company="Anatta Design"
          dateRange="May 2023 - May 2025"
          location="Remote"
          websiteUrl="https://anattadesign.com/"
          summary={anattaExpSummary || ""}
          className="mb-5"
        />

        <ExperienceEntry
          title="Frontend Engineer"
          company="Unbabel"
          dateRange="Feb 2022 - Mar 2023"
          location="Lisbon"
          websiteUrl="https://unbabel.com/"
          summary={unbabelExpSummary || ""}
          className="mb-5"
        />

        <ExperienceEntry
          title="Frontend Developer"
          company="Priberam Informática"
          dateRange="May 2021 - Feb 2022"
          location="Lisbon"
          websiteUrl="https://priberam.com/"
          summary={priberamExpSummary || ""}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          Open Source Contributions
        </h2>
        <p className="text-sm">
          next-auth — PR #12379 —{" "}
          <a
            href="https://github.com/nextauthjs/next-auth/pull/12379"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            View PR
          </a>
        </p>
        <p className="text-sm">
          Repaired visibility of OAuth provider logos in dark theme. Changes
          affect the library&apos;s default OAuth UX flow and docs.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Certifications</h2>

        <a
          href="https://www.udemy.com/certificate/UC-d1caa489-3783-45c7-896a-367ccbfa6dfc/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          <p className="text-sm font-medium">
            Typescript for Professionals By Basarat — Udemy — May 2025
          </p>
        </a>

        <a
          href="https://www.udemy.com/certificate/UC-9b64136d-a24a-494f-b1f9-1b7df91a90b0/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          <p className="text-sm font-medium">
            Next JS: The Complete Developer&apos;s Guide — Udemy — July 2025
          </p>
        </a>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Education</h2>
        <div className="mb-2">
          <h3 className="font-medium">
            General Assembly | Software Engineering
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            July 2020 - Sep 2020 | Certification
          </p>
          <p className="text-sm">
            480+ hours of full-stack training. Built &quot;Squirrel Tales&quot;,
            featured in{" "}
            <a
              href="https://opendata.cityofnewyork.us/projects/squirreltales"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              NYC Open Data&apos;s Project Gallery
            </a>
            .
          </p>
        </div>
        <div>
          <h3 className="font-medium">CUNY Brooklyn College | Double Bass</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            2008 - 2012 | B.Mus
          </p>
          <p className="text-sm">
            Classical and contemporary music theory and performance.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Volunteering</h2>
        <p className="text-sm font-medium">
          Orquestra Círculo Música da Câmara | Double Bassist
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          March 2023 - Present | Lisbon
        </p>
        <p className="text-sm">
          Volunteer with a 25-member string orchestra, presenting 5–6 free
          concerts per season.
        </p>
      </section>
    </main>
  );
}
