export default function Page() {
  return (
    <section id="home">
      <div className="bg-gray-900 flex-grow flex flex-col justify-center items-center min-h-screen py-6 px-4">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center">
          Hi, <span className="text-emerald-500">I'm Sai Praneeth,</span> web
          developer.
        </h1>
        <p className="text-gray-400 text-xl sm:text-2xl md:text-3xl mt-4 text-center">
          Full Stack Developer
        </p>

        <button className="mt-8 px-6 py-2 bg-teal-800 text-white rounded-full hover:bg-teal-600 transition duration-300">
          Resume
        </button>
      </div>
    </section>
  );
}
