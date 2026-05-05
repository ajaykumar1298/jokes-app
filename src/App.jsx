import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [jokes, setJokes] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://api.freeapi.app/api/v1/public/randomjokes?page=" + page);
      setJokes(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchJoke();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex justify-center p-4">
      <div className="max-w-6xl w-full mt-10">
        <h1 className="text-white text-3xl font-bold text-center mb-6">Random Jokes</h1>

        {/* Pagination */}
        <div className="text-white flex justify-center items-center gap-6 mb-8">
          <button
            className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-indigo-600 transition disabled:opacity-40"
            disabled={!jokes?.previousPage || loading}
            onClick={() => setPage(prev => prev - 1)}
          >
            Prev
          </button>

          <span className="text-lg font-semibold">{page}</span>

          <button
            className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-indigo-600 transition disabled:opacity-40"
            disabled={!jokes?.nextPage || loading}
            onClick={() => setPage(prev => prev + 1)}
          >
            Next
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-all duration-300">
          {jokes?.data?.map((joke, index) => (
            <div
              key={joke.id || index}
              className="p-5 rounded-xl shadow-lg text-white transition-all duration-300 hover:scale-105 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-indigo-300"
            >
              <p className="text-sm leading-relaxed text-gray-200 line-clamp-6">{joke.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
