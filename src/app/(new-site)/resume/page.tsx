import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import PersonalLogo from "@public/logo_216.png";
import ExperienceEntry from "@/components/ExperienceEntry";

export default function ResumePage() {
  return (
    <main className="max-w-4xl mx-auto p-8 text-gray-800">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Sean Ormiston</h1>
        <p className="text-lg">Frontend Engineer</p>
        <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-600">
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
              className="rounded-full border-2 border-double w-8 h-8 border-gray-300 shadow-sm opacity-80 hover:opacity-100 focus-visible:opacity-100 transition-all duration-200"
            />
          </Link>
        </div>
      </header>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Summary</h2>
        <p>
          Frontend Engineer with 4 years of experience delivering UI solutions
          for e-commerce and enterprise SaaS products. I&apos;ve a proven
          ability to take initiative in the design and implementation of
          client-side architectures in tandem with UX designers, backend
          developers, and product stakeholders. I&apos;m also a fast learner
          eager to work with new technologies, learn new business domains, and
          share what I know with colleagues.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <div className="mb-4">
          <h3 className="font-medium">Primary:</h3>
          <p>
            JavaScript, TypeScript, HTML, CSS, SCSS, Tailwind, ReactJS, NextJS,
            VueJS, Git, Webpack, Rollup, Vite, Agile/Scrum, Test Driven Development, Release Management,
            A/B Testing, CI/CD Pipelines, REST, GraphQL, Shopify Plus
          </p>
        </div>
        <div>
          <h3 className="font-medium">Secondary:</h3>
          <p>NodeJS, Ruby on Rails, .NET, Entity Relation Design, PostgreSQL</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Experience</h2>

        <ExperienceEntry
          title="Senior UI Developer"
          company="Anatta Design"
          dateRange="May 2023 - March 2025"
          location="Remote"
          websiteUrl="https://anattadesign.com/"
          bulletPoints={[
            "Built a fully custom storefront on a 4-month timeline for a $21M brand.",
            "Led technology solution sessions with clients in bi-weekly Agile sprints.",
            "Solved DevOps related to Shopify theme management, establishing team workflows to safely manage independent release cycles of code and content.",
            "Launched 20+ A/B tests; implemented user behavior data collection.",
            "Refactored components to adhere to accessibility standards.",
            "Diagnosed and resolved critical production issues with emergency patch deployments.",
          ]}
          className="mb-5"
        />

        <ExperienceEntry
          title="Frontend Engineer"
          company="Unbabel"
          dateRange="Feb 2022 - Mar 2023"
          location="Lisbon"
          websiteUrl="https://unbabel.com/"
          bulletPoints={[
            'Spearheaded development of a SaaS product for translation professionals to administrate AI-driven translation workflows ("Pipelines App").',
            "Planned and implemented a phased migration between backend APIs, ensuring zero downtime during a corporate data acquisition.",
            "Authored internal developer guide for migrating frontend microapps from Vue2 to Vue3",
          ]}
          className="mb-5"
        />

        <ExperienceEntry
          title="Frontend Developer"
          company="Priberam Informática"
          dateRange="May 2021 - Feb 2022"
          location="Lisbon"
          websiteUrl="https://priberam.com/"
          bulletPoints={[
            "Pioneered integration of Vue components into regions of UI controlled by an in-house JavaScript library, halving development time of new UI features.",
            "Authored a two-way converter between Synthetic Speech Markup Language (SSML) and HTML using Test Driven Development principles.",
          ]}
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
        <p className="text-sm font-medium">
          Typescript for Professionals By Basarat — Udemy — May 2025
        </p>
        <p className="text-sm">
          Advanced Typescript training by Basarat Ali Syed —{" "}
          <a
            href="https://www.udemy.com/certificate/UC-d1caa489-3783-45c7-896a-367ccbfa6dfc/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            View Certificate
          </a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Education</h2>
        <div className="mb-2">
          <h3 className="font-medium">
            General Assembly | Software Engineering
          </h3>
          <p className="text-sm text-gray-600">
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
          <p className="text-sm text-gray-600">2008 - 2012 | B.Mus</p>
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
        <p className="text-sm text-gray-600">March 2023 - Present | Lisbon</p>
        <p className="text-sm">
          Volunteer with a 25-member string orchestra, presenting 5–6 free
          concerts per season.
        </p>
      </section>
    </main>
  );
}
