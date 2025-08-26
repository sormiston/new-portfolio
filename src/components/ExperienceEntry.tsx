interface ExperienceEntryProps {
  title: string;
  company: string;
  dateRange: string;
  location: string;
  websiteUrl: string;
  websiteText?: string;
  summary: string;
  className?: string;
}

export default function ExperienceEntry({
  title,
  company,
  dateRange,
  location,
  websiteUrl,
  websiteText,
  summary,
  className,
}: ExperienceEntryProps) {
  const websiteTextNormalized =
    websiteText || websiteUrl.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <div className={`experience-entry ${className}`}>
      <h3 className="font-medium underline underline-offset-2">
        {company} | {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {dateRange} | {location} |{" "}
        <a
          href={websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          {websiteTextNormalized}
        </a>
      </p>
      <div dangerouslySetInnerHTML={{ __html: summary }} />
    </div>
  );
}
