export const MessageHeader = () => {
  return (
    <div className="bg-gray-100 border-b border-gray-300 px-6 py-4 flex-none">
      <div className="flex items-end justify-between">
        <div className="flex-1">
          <div className="flex items-end">
            <h2 className="text-2xl font-bold text-gray-800 mr-3">#general</h2>
            <div className="flex items-center text-xs text-gray-500 mb-1">
              <svg
                className="h-3 w-3 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              <span>2024/08/12 ~ 2024/09/10</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Company-wide announcements and work-based matters
          </p>
        </div>
        <div className="relative">
          <input
            type="search"
            placeholder="Search"
            className="appearance-none border border-gray-300 rounded-lg pl-8 pr-4 py-2"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="fill-current text-gray-500 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
