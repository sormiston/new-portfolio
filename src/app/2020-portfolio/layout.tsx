
export default function LegacyPortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <body className="legacy-portfolio">{children}</body>;
}
