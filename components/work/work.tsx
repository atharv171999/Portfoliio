import Image from "next/image";
import Gamex from '../../public/gamexss.png'
import Tictactoe from '../../public/tictacss.png'
import Microsoft from '../../public/micross.png'
import Todo from '../../public/todoss.png'
import Movie from '../../public/moviess.png'
import Portfoliio from '../../public/portss.png'

const project_data = [
  {
    id: 1,
    title: "Gamex",
    image: Gamex,
    link: "https://atharv171999.github.io/Game-web/",
  },
  {
    id: 2,
    title: "Tic Tac Toe",
    image: Tictactoe,
    link: "https://3tic-tac-toe-game.surge.sh/",
  },
  {
    id: 3,
    title: "Microsoft Landing Page",
    image: Microsoft,
    link: "https://atharv171999.github.io/Microsoft-page/",
  },
  {
    id: 4,
    title: "To Do List",
    image: Todo,
    link: "https://atharv171999.github.io/ToDoList/",
  },
  {
    id: 5,
    title: "Movie Library",
    image: Movie,
    link: "https://atharv171999.github.io/Movie_lib/",
  },
  {
    id: 6,
    title: "Atharv",
    image: Portfoliio,
    link: "https://portfoliio-sepia.vercel.app/",
  },
];

export default function Work() {
  return (
    <>
      <section>
        <div className=" text-center text-5xl font-serif ">
          <h1>
            <span className=" font-bold text-gray-600">/</span>
            <span className=" font-semibold text-gray-800">work</span>{" "}
            <span className=" font-bold text-gray-600">.</span>{" "}
          </h1>
        </div>
        <div className=" flex flex-wrap justify-center gap-8 mt-14 ">
          {project_data.map((item: any) => {
            const { id, title, image, link } = item || {};  
            return (
              <div
                key={id}
                className="max-w-sm  bg-gray-100 border rounded-t-lg  shadow-sm hover:shadow-lg hover:relative hover:bottom-1  "
              >
                <Image
                  className=" rounded-lg"
                  src={image}
                  alt=""
                  width={500}
                  height={500}
                />
                <div className="p-5  ">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800">
                    {title}
                  </h5>
                  <a
                    href={link}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Deployment
                    <svg
                      className="w-3.5 h-3.5 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
