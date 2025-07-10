interface ExperienceEntryProps {
  title: string;
  company: string;
  dateRange: string;
  location: string;
  websiteUrl: string;
  websiteText?: string;
  bulletPoints: string[];
  className?: string;
}

export default function ExperienceEntry({
  title,
  company,
  dateRange,
  location,
  websiteUrl,
  websiteText,
  bulletPoints,
  className,
}: ExperienceEntryProps) {
  const websiteTextNormalized =
    websiteText || websiteUrl.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <div className={className}>
      <h3 className="font-medium">
        {company} | {title}
      </h3>
      <p className="text-sm text-gray-600">
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
      <ul className="list-disc list-inside text-sm mt-2 space-y-1">
        {bulletPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
