export default function FeatureCard({ feature }) {
  return (
    <div className="relative bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-200 overflow-hidden group">
      {/* Accent Border */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#111] to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="p-6">
        <div className="flex items-start gap-4">
          {/* Vote Button */}
          <div className="flex-shrink-0">
            <button className="flex flex-col items-center px-3 py-2 border border-gray-200 rounded-lg hover:border-[#111] hover:bg-gray-50 transition-colors group/vote">
              <svg
                className="w-5 h-5 text-gray-500 group-hover/vote:text-[#111] transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
              <span className="text-sm font-semibold text-gray-900 mt-1 group-hover/vote:text-[#111] transition-colors">
                {feature.votes || 0}
              </span>
            </button>
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900 pr-4 group-hover:text-[#111] transition-colors">
                {feature.title}
              </h3>
              {feature.priority && (
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    feature.priority === "high"
                      ? "bg-red-50 text-red-700 border border-red-200"
                      : feature.priority === "medium"
                        ? "bg-yellow-50 text-yellow-700 border border-yellow-200"
                        : "bg-gray-100 text-gray-700 border border-gray-300"
                  }`}
                >
                  {feature.priority}
                </span>
              )}
            </div>

            <p className="text-gray-600 mb-4 leading-relaxed">
              {feature.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 flex-wrap">
                {feature.category && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors cursor-pointer">
                    {feature.category}
                  </span>
                )}
                {feature.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <button className="hover:text-[#111] transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                </button>
                <span className="text-xs text-gray-400 hidden sm:inline">
                  {feature.createdAt || "Recently added"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
