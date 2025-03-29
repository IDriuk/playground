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
      <ul role="list" className="divide-y divide-gray-200 p-6 dark:divide-gray-800">
        <li className="flex py-4 first:pt-0 last:pb-0 ">
          <img className="h-10 w-10 rounded-full" alt="" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" />
          <div className="ml-3 overflow-hidden"><p className="text-sm font-medium text-gray-900 dark:text-white">Kristen Ramos</p>
            <p className="truncate text-sm text-gray-500 dark:text-gray-400">kristen.ramos@example.com</p>
          </div>
        </li>
        <li className="flex py-4 first:pt-0 last:pb-0 ">
          <img className="h-10 w-10 rounded-full" alt="" src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
          <div className="ml-3 overflow-hidden">
            <p className="text-sm font-medium text-gray-900 dark:text-white">Floyd Miles</p>
            <p className="truncate text-sm text-gray-500 dark:text-gray-400">floyd.miles@example.com</p>
          </div>
        </li>
        <li className="flex py-4 first:pt-0 last:pb-0">
          <img className="h-10 w-10 rounded-full" alt="" src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
          <div className="ml-3 overflow-hidden">
            <p className="text-sm font-medium text-gray-900 dark:text-white">Floyd Miles</p>
            <p className="truncate text-sm text-gray-500 dark:text-gray-400">floyd.miles@example.com</p>
          </div>
        </li>
        <li className="flex py-4 first:pt-0 last:pb-0 " >
          <img className="h-10 w-10 rounded-full" alt="" src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
          <div className="ml-3 overflow-hidden">
            <p className="text-sm font-medium text-gray-900 dark:text-white">Floyd Miles</p>
            <p className="truncate text-sm text-gray-500 dark:text-gray-400">floyd.miles@example.com</p>
          </div>
        </li>
        <li className="flex py-4 first:pt-0 last:pb-0 ">
          <img className="h-10 w-10 rounded-full" alt="" src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
          <div className="ml-3 overflow-hidden">
            <p className="text-sm font-medium text-gray-900 dark:text-white">Floyd Miles</p>
            <p className="truncate text-sm text-gray-500 dark:text-gray-400">floyd.miles@example.com</p>
          </div>
        </li>
      </ul>
      <div className="p-6">
        <input id="email-1" className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none sm:text-sm dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20" placeholder="you@example.com" type="email" value="george@krugerindustrial." name="email"></input>
      </div>
      <blockquote className="text-center text-2xl font-semibold text-gray-900 italic dark:text-white">
        When you look
        <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500">
          <span className="relative text-white dark:text-gray-950">annoyed</span>
        </span>
        <span className="relative">
          <span className="absolute -inset-1 block -skew-y-3 bg-pink-500" aria-hidden="true"></span>
          <span className="relative text-white">annoyed</span>
        </span>
        all the time, people think that you're busy.
      </blockquote>

      <div className="text-gray-700">
        <p
          className="first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 first-line:tracking-widest first-line:uppercase"
        >
          Well, let me tell you something, funny boy. Y'know that little stamp, the one that says "New York Public Library"?
        </p>
        <p className="mt-6">Well that may not mean anything to you, but that means a lot to me. One whole hell of a lot.</p>
      </div>
    </>
  );
}

export default App;
