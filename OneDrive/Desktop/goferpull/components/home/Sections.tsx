
import { useAuth } from '../../hooks/useAuth';
export default function Sections() {
  const { login, signInWithGoogle } = useAuth();
  return (
    <div className=" bg-white justify-center grid gap-6">
      <div className="w-[1200px] flex items-top py-20 justify-between px-8">
        <div className="text-blue pr-20  ">
          <h1 className="text-5xl leading-normal	 font-bold">
            Explore collaborative articles          </h1>
          <p className="mt-4 mb-10">We’re unlocking community knowledge in a new way. Experts add insights directly into each article, started with the help of AI.</p>
          <div className='flex gap-3'>
            <a href="/login">
              <button type="submit" className="bg-white hover:bg-blue-700 hover:text-white mt-6 py-3 border px-8 rounded-xl">Safety Management</button>
            </a>
            <a href="/login">
              <button type="submit" className="bg-white hover:bg-blue-700 hover:text-white mt-6 py-3 border px-8 rounded-xl">Safety Animation</button>
            </a>
            <a href="/login">
              <button type="submit" className="bg-white hover:bg-blue-700 hover:text-white mt-6 py-3 border px-8 rounded-xl">Safety Analytics</button>
            </a></div>

        </div>
      </div>
    </div>
  );
}
