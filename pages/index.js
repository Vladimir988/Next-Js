import Navbar from "../components/Navbar";
import Head from "next/head";

const Index = () => {
  const title = 'Home page';
  return (
    <div>
      <Head>
        <meta keywords="next-js-keywords"></meta>
        <title>{title}</title>
      </Head>
      <Navbar />
      <h1>{title}</h1>
    </div>
  );
};

export default Index;