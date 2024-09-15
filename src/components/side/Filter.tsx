export const SideFilter = () => {
  return (
    <div className="bg-pink-900 text-pink-100 flex-none w-24 p-6 hidden md:block">
      <div className="cursor-pointer mb-4">
        <div className="bg-white h-12 w-12 flex items-center justify-center text-pink-900 text-2xl font-semibold rounded-lg mb-1 overflow-hidden">
          ALL
        </div>
        <div className="text-center text-pink-200 text-sm">&#8984;1</div>
      </div>
      <div className="cursor-pointer mb-4">
        <div className="bg-pink-200 h-12 w-12 flex items-center justify-center text-pink-900 font-semibold rounded-lg mb-1 overflow-hidden">
          2020
        </div>
        <div className="text-center text-pink-200 text-sm">&#8984;2</div>
      </div>
    </div>
  );
};
