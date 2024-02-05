import Navbar from "../components/Navbar";
import MyHead from "../components/MyHead";

const Index = () => {
  const title = 'Home page';
  return (
    <div>
      <MyHead keywords="next-js-keywords" title={title} />
      <Navbar />
      <h1>{title}</h1>
    </div>
  );
};

export default Index;