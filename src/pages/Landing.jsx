import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div>
        <h2 className="text-xl font-semibold text-pizza-600">Teachmint Assessment</h2>
        <div className="flex items-center justify-center gap-4 mt-3">
          <button className=" w-1/2 bg-pizza-600 hover:bg-pizza-500 p-2 px-5  text-xs text-white rounded-sm outline-none animate font-medium">
            <Link to={"/home"}>Demo</Link>
          </button>
          <button className="w-1/2 border-pizza-600 border text-pizza-600 p-2 px-5  text-xs rounded-sm outline-none animate font-medium">
            <a href="https://github.com" target="_black">
              {" "}
              Repo
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
