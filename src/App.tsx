import logo from './img/logo.svg'
import "./App.css";

function App() {

  return (
    <>
      <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white m-2 p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <img className="size-12 shrink-0" src={logo} alt="ChitChat Logo" />
        <div>
          <div className="text-xl font-medium text-black dark:text-white">ChitChat</div>
          <p className="text-gray-500 dark:text-gray-400">You have a new message!</p>
        </div>
        <button type="button" className="rounded-full bg-violet-500 px-5 py-2 text-sm leading-5 font-semibold text-white hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700">Save changes</button>
      </div>

      <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl ">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src="https://images.unsplash.com/photo-1637734433731-621aca1c8cb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=404&q=80"
              alt="Modern building architecture"
            />
          </div>
          <div className="p-8">
            <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">Company retreats</div>
            <a href="#" className="mt-1 block text-lg leading-tight font-medium text-black hover:underline">
              Incredible accommodation for your team
            </a>
            <p className="mt-2 text-gray-500">
              Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of
              places to do just that.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
