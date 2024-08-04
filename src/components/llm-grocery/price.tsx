import { formatPrice } from '@ai-rsc/lib/format-price';
import clsx from 'clsx';
import { format } from 'date-fns';

// Define the props interface for the Price component
interface PriceProps {
  name: string;
  price: number;
  image: string; // Add the image URL property
  delta?: number; // Optional: Price change amount or percentage
  supermarket?: string; // Optional: Supermarket name
}

// Default properties for demonstration
const PropDefaults: PriceProps = {
  name: 'Apple',
  price: 1.99,
  image: 'https://via.placeholder.com/100', // Placeholder image
  delta: 0, // Default to zero change
  supermarket: 'Checkers',
};

export function Price({ name, price, image, delta = 0, supermarket }: PriceProps = PropDefaults) {
  return (
    <div className="p-4 border rounded-xl bg-gray-200 flex items-center space-x-4">
      {/* Product Image */}
      <img src={image} alt={name} className="w-16 h-16 object-cover rounded-full" />

      {/* Product Details */}
      <div className="flex-grow">
        <div className="flex justify-between items-center mb-2">
          <div className="text-lg font-semibold text-gray-700">{name}</div>
          {supermarket && (
            <div className="text-xs text-gray-500">
              {supermarket}
            </div>
          )}
        </div>
        <div className={clsx("text-3xl font-bold", delta > 0 ? "text-green-500" : "text-red-500")}>
          {formatPrice(price)}
        </div>
        <div className={clsx(
          "inline-block px-2 py-1 text-xs rounded-full bg-white/10 mt-1",
          delta > 0 ? "text-green-500" : "text-red-500"
        )}>
          {delta !== 0 ? `${delta > 0 ? '+' : ''}${delta.toFixed(2)}% ${delta > 0 ? '↑' : '↓'}` : 'No change'}
        </div>
        <div className="mt-1 text-xs text-gray-500">
          Last updated: {format(new Date(), 'MMM do, HH:mm:ss a')}
        </div>
      </div>
    </div>
  );
}