import logo from "./img/logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="overflow-auto rounded-lg bg-white p-8 outline outline-white/5 dark:bg-gray-950/50">
        <div className="flex items-center justify-center">
          <div className="-lg h-28 w-full max-w-xs rounded-lg bg-white p-4 ring-1 ring-gray-900/5 dark:bg-gray-800">
            <div className="flex animate-pulse space-x-4">
              <div className="size-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 rounded bg-gray-200 dark:bg-gray-700"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2 h-2 rounded bg-gray-200 dark:bg-gray-700"></div>
                    <div className="col-span-1 h-2 rounded bg-gray-200 dark:bg-gray-700"></div>
                  </div>
                  <div className="h-2 rounded bg-gray-200 dark:bg-gray-700"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="m-2 mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <img className="size-12 shrink-0" src={logo} alt="ChitChat Logo" />
        <div>
          <div className="text-xl font-medium text-black dark:text-white">
            ChitChat
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            You have a new message!
          </p>
        </div>
        <button
          type="button"
          className="rounded-full bg-violet-500 px-5 py-2 text-sm leading-5 font-semibold text-white hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700"
        >
          Save changes
        </button>
      </div>

      <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src="https://images.unsplash.com/photo-1637734433731-621aca1c8cb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=404&q=80"
              alt="Modern building architecture"
            />
          </div>
          <div className="p-8">
            <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
              Company retreats
            </div>
            <a
              href="#"
              className="mt-1 block text-lg leading-tight font-medium text-black hover:underline"
            >
              Incredible accommodation for your team
            </a>
            <p className="mt-2 text-gray-500">
              Looking to take your team away on a retreat to enjoy awesome food
              and take in some sunshine? We have a list of places to do just
              that.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
