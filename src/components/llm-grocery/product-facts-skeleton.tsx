export const ProductFactsSkeleton = () => {
    return (
      <div className="p-4 rounded-xl bg-gray-200 border border-gray-300">
        <div className="animate-pulse flex flex-col space-y-4">
          
          {/* Product Name Skeleton */}
          <div className="h-6 bg-gray-400 rounded-md w-3/4 text-transparent">
            Loading Product Name
          </div>
          
          {/* Brand Name Skeleton */}
          <div className="h-5 bg-gray-400 rounded-md w-1/2 text-transparent">
            Loading Brand Name
          </div>
          
          {/* Category Skeleton */}
          <div className="h-5 bg-gray-400 rounded-md w-2/3 text-transparent">
            Loading Categories
          </div>
          
          {/* Ingredients Skeleton */}
          <div className="h-4 bg-gray-400 rounded-md w-full text-transparent">
            Loading Ingredients...
          </div>
          
          {/* Nutriscore Skeleton */}
          <div className="flex items-center space-x-2">
            <div className="h-4 bg-gray-400 rounded-full w-12 text-transparent">
              Score
            </div>
            <div className="h-4 bg-gray-400 rounded-md w-1/3 text-transparent">
              Loading Nutriscore
            </div>
          </div>
        </div>
      </div>
    );
  };