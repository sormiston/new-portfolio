import { FaGithub, FaLinkedin } from "react-icons/fa";

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
            <FaGithub className="inline-block w-6 h-6 opacity-80 hover:opacity-100 transition-all duration-200" />
          </a>

          <a
            href="https://www.linkedin.com/in/sormiston/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="inline-block text-blue-500 w-6 h-6 opacity-80 hover:opacity-100 transition-all duration-200" />
          </a>
        </div>
      </header>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Summary</h2>
        <p>
          Frontend Engineer with 4 years of experience delivering performant,
          accessible, and scalable UIs for e-commerce and enterprise SaaS
          products. Proven ability to lead design of scalable client-side
          architectures as a contributor on cross-disciplinary Agile teams.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <div className="mb-4">
          <h3 className="font-medium">Primary:</h3>
          <p>
            JavaScript, TypeScript, HTML, CSS, SCSS, Tailwind, ReactJS, NextJS,
            VueJS, Git, Webpack, Rollup, Vite, Agile/Scrum, Release Management,
            A/B Testing, CI/CD Pipelines, REST APIs, GraphQL, Shopify Plus
          </p>
        </div>
        <div>
          <h3 className="font-medium">Secondary:</h3>
          <p>NodeJS, Ruby on Rails, .NET, Entity Relation Design, PostgreSQL</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Experience</h2>

        <div className="mb-4">
          <h3 className="font-medium">Anatta Design | Senior UI Developer</h3>
          <p className="text-sm text-gray-600">
            May 2023 - March 2025 | Remote |{" "}
            <a
              href="https://anattadesign.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              anattadesign.com
            </a>
          </p>
          <ul className="list-disc list-inside text-sm mt-2 space-y-1">
            <li>
              Built a fully custom storefront on a 4-month timeline for a $21M
              brand.
            </li>
            <li>
              Led technology solution sessions with clients in bi-weekly Agile
              sprints.
            </li>
            <li>
              Established DevOps protocols for safe independent deployments.
            </li>
            <li>
              Launched 20+ A/B tests; implemented user behavior data collection.
            </li>
            <li>Refactored components for accessibility standards.</li>
            <li>Resolved critical production issues with emergency patches.</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-medium">Unbabel | Frontend Engineer</h3>
          <p className="text-sm text-gray-600">
            Feb 2022 - Mar 2023 | Lisbon |{" "}
            <a
              href="https://unbabel.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              unbabel.com
            </a>
          </p>
          <ul className="list-disc list-inside text-sm mt-2 space-y-1">
            <li>Developed a SaaS product for translation professionals.</li>
            <li>Oversaw backend API migration ensuring zero downtime.</li>
            <li>
              Wrote internal guide for migrating microapps from Vue2 to Vue3.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium">
            Priberam Informática | Frontend Developer
          </h3>
          <p className="text-sm text-gray-600">
            May 2021 - Feb 2022 | Lisbon |{" "}
            <a
              href="https://priberam.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              priberam.com
            </a>
          </p>
          <ul className="list-disc list-inside text-sm mt-2 space-y-1">
            <li>
              Built interactive interfaces for multilingual text editing with ML
              and voiceover.
            </li>
            <li>
              Integrated Vue components into in-house JS library, halving dev
              time.
            </li>
            <li>
              Developed JS library to transpile SSML to editable DOM with robust
              tests.
            </li>
          </ul>
        </div>
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
