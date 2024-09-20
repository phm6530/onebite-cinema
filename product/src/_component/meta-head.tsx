import Head from "next/head";

type MetaheadProps = {
  title?: string | null;
  thumbNail?: string | null;
  description?: string | null;
};

const MetaHead: React.FC<MetaheadProps> = ({
  title,
  thumbNail,
  description,
}) => {
  return (
    <Head>
      <title>{title || "한입 시네마"}</title>
      <meta property="og:title" content={title || "한입 시네마"} />
      <meta property="og:image" content={thumbNail || "/thumbnail.png"} />
      <meta property="og:description" content={description || "한입 시네마"} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};

export default MetaHead;
