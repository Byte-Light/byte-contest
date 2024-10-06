import { getContests } from '@/db/queries';
import { FiTag, FiAward, FiAlignLeft } from 'react-icons/fi';

const ContestList = async () => {
  const contests = await getContests();

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-purple-100 to-gray-50 p-6">
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
        Contest List
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {contests.length > 0 ? (
          contests.map((contest) => (
            <div key={contest.id} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center">
              {/* Contest Title */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                {contest.title}
              </h3>

              {/* Contest Category */}
              <div className="flex items-center justify-center mb-4 text-xl text-gray-500">
                <FiTag className="mr-2" />
                <span>{contest.category}</span>
              </div>

              {/* Contest Description */}
              <div className="w-full mb-4">
                <h4 className="text-lg font-semibold text-gray-700 mb-2">
                  <FiAlignLeft className="inline-block mr-2 text-gray-400" />
                  Description
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {contest.description}
                </p>
              </div>

              {/* Prize Information */}
              <div className="flex items-center justify-center bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 p-4 rounded-xl shadow-inner mb-4">
                <FiAward className="text-2xl text-yellow-500 mr-2" />
                <p className="text-lg font-bold text-gray-800">{contest.prize}</p>
              </div>

              {/* View Details Button */}
              <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300">
                View Details
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-xl text-gray-600">No contests available.</p>
        )}
      </div>
    </div>
  );
};

export default ContestList;
