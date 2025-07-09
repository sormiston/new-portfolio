import LegacyNav from "@/components/2020-portfolio/Nav";
import LegacyContent from "@/components/2020-portfolio/Content";
import "@/styles/legacy-portfolio.css";

export default function Portfolio2020() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css"
        precedence="medium"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
        precedence="medium"
      />
      <div className="legacy-portfolio">
        <LegacyNav />
        <LegacyContent />
      </div>
    </>
  );
}
