import Link from "next/link";

const Index = () => {
  return (
    <div>
      <style jsx>{`
        .navbar {
          height: 50px;
          display: flex;
          align-items: center;
          background: lightgrey;
          gap: 15px;
          padding: 0 10px;
          margin-bottom: 20px;
        }
      `}</style>
      <div className="navbar">
        <Link href="/">Home</Link>
        <Link href="/users">Users</Link>
      </div>
      <h1>Home page</h1>
    </div>
  );
};

export default Index;