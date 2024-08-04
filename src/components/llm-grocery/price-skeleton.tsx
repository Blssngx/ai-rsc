export const PriceSkeleton = () => {
    return (
      <div className="p-4 rounded-xl bg-gray-200 text-green-700 border border-gray-300">
        <div className="float-right inline-block px-2 py-1 animate-pulse rounded-full bg-gray-400 text-xs text-transparent w-fit">
          Loading...
        </div>
        <div className="text-lg text-transparent w-16 animate-pulse bg-gray-400 rounded-md mb-2">
          Product
        </div>
        <div className="text-2xl font-bold text-transparent animate-pulse bg-gray-400 rounded-md w-40">
          R0.00
        </div>
        <div className="text text-sm text-transparent mt-2 animate-pulse bg-gray-400 w-fit rounded-md">
          Price details loading
        </div>
      </div>
    );
  };