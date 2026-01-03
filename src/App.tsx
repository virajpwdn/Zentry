import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <section className="z-0 h-screen bg-blue-300"></section>
    </div>
  );
};

export default App;
