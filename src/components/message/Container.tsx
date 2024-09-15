import { Content } from "./Content";

export const MessageContainer = () => {
  return (
    <div className="px-6 py-4 flex-1 overflow-y-scroll">
      {/* changed date */}
      <div className="flex items-center my-8">
        <div className="flex-grow border-t border-gray-300"></div>
        <div className="flex-shrink mx-4 text-gray-500 text-sm font-medium">
          2024년 9월 4일
        </div>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      <Content />

      {/* changed date */}
      <div className="flex items-center my-8">
        <div className="flex-grow border-t border-gray-300"></div>
        <div className="flex-shrink mx-4 text-gray-500 text-sm font-medium">
          2024년 9월 10일
        </div>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      <Content />
    </div>
  );
};
