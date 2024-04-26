import AverageCalculatorCard from "./components/AverageCalculatorCard";
("./components/AverageCalculatorCard");
import Navbar from "./components/Navbar";
import ThemeSwitch from "./components/ThemeSwitch";
import SignaturesCard from "./components/signatures/SignaturesCard";

function App() {
  return (
    <div className="bg-base-light-100 dark:bg-base-dark-100 h-screen">
      <Navbar />
      <ThemeSwitch />
      <div className="flex justify-center gap-2">
        <AverageCalculatorCard />
        <SignaturesCard />
      </div>
    </div>
  );
}

export default App;
