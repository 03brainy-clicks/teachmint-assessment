import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-72">
        <h3 className="text-xl font-semibold text-center text-pizza-600">
          Teachmint Assessment
        </h3>
        <div className="flex gap-2 items-center mt-2">
          {/* Use Link for Demo link */}
          <Link to="/home" className="block flex-1">
            <div className="cursor-pointer animate flex-1 py-2 px-5 text-xs font-medium bg-pizza-600 hover:bg-pizza-500 text-white rounded flex gap-1 items-center justify-center">
              Demo
            </div>
          </Link>

          {/* Use a regular anchor tag for an external link (GitHub repo) */}
          <a
            href="https://github.com/03brainy-clicks/teachmint-assessment"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block flex-1"
          >
            <div className="w-full transition duration-300 cursor-pointer flex-1 py-2 px-5 text-xs font-medium border border-pizza-600 text-pizza-600 rounded flex gap-1 items-center justify-center">
              Repo
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
