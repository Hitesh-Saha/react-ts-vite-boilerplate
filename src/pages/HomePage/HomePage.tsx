import reactLogo from "../../assets/react.svg";
import Counter from "../../components/Counter/Counter";
import viteLogo from "/vite.svg";
const HomePage = () => {
  return (
    <>
      <div className="w-full h-full p-4 flex flex-col justify-center items-center mx-auto">
        <div className="flex flex-row gap-8">
          <a
            href="https://vitejs.dev"
            target="_blank"
          >
            <img
              src={viteLogo}
              className="logo"
              alt="Vite logo"
            />
          </a>
          <a
            href="https://react.dev"
            target="_blank"
          >
            <img
              src={reactLogo}
              className="logo react"
              alt="React logo"
            />
          </a>
        </div>
        <h1>Vite + React</h1>
        <Counter />
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  );
};

export default HomePage;
