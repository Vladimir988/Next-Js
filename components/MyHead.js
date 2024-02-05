import Head from "next/head";

const MyHead = ({keywords, title}) => {
  return (
    <Head>
      <meta keywords={keywords}></meta>
      <title>{title}</title>
    </Head>
  );
};

export default MyHead;