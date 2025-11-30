import { Helmet } from "react-helmet";

const SEOHeader = ({ title, description, url, image }) => (
  <Helmet>
    <title>{title || "Edumex | Higher Diploma Courses Online"}</title>
    <meta
      name="description"
      content={
        description ||
        "Edumex offers internationally recognized higher diploma courses online for students from around the world."
      }
    />
    <link rel="canonical" href={url || "https://www.edumex.co.uk"} />

    {/* Open Graph */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content="website" />
    {image && <meta property="og:image" content={image} />}

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    {image && <meta name="twitter:image" content={image} />}

    <link rel="icon" href="/assets/img/favicon.ico" />
  </Helmet>
);

export default SEOHeader;
