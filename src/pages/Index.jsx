import HackerNews from "../components/HackerNews";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Hacker News Top 100 Stories</h1>
      <HackerNews />
    </div>
  );
};

export default Index;
