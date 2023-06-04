export const Headers = ({
  title = "alexng353",
  description = "alexng353 | portfolio",
  image,
  url = "https://ayo.icu",
}: {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}) => (
  <>
    <title>{title}</title>

    <meta property="twitter:url" content={url} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />

    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
  </>
);
