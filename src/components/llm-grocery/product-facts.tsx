import { Card, CardContent, CardHeader, CardTitle } from "@ai-rsc/components/ui/card";
import { ListIcon, TagIcon, InfoIcon, CheckCircleIcon } from "lucide-react";
import { cn } from "@ai-rsc/lib/utils";

// Define the ProductFactsProps interface
interface ProductFactsProps {
  name: string;
  brand: string;
  categories: string;
  ingredients: string;
  nutriscore: string;
}

// Default properties for the ProductFacts component
const PropDefaults: ProductFactsProps = {
  name: "Apple",
  brand: "Generic Brand",
  categories: "Fruits, Fresh Produce",
  ingredients: "Apple",
  nutriscore: "A",
};

export function ProductFacts(props: ProductFactsProps = PropDefaults) {
  const { name, brand, categories, ingredients, nutriscore } = props;

  return (
    <Card className="w-full mx-auto max-w-md rounded-2xl">
      <CardHeader className="px-6 py-4 border-b">
        <CardTitle>Product Facts for {name}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6 p-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <TagIcon className="w-4 h-4 inline-block mr-1" />
              Brand
            </div>
            <div className="text-lg font-medium">{brand}</div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <ListIcon className="w-4 h-4 inline-block mr-1" />
              Categories
            </div>
            <div className="text-lg font-medium">{categories}</div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="flex flex-col gap-1">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <InfoIcon className="w-4 h-4 inline-block mr-1" />
              Ingredients
            </div>
            <div className="text-lg font-medium">{ingredients}</div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="flex flex-col gap-1">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <CheckCircleIcon className="w-4 h-4 inline-block mr-1" />
              Nutriscore
            </div>
            <div className={cn("text-lg font-medium", nutriscore === "A" ? "text-green-500" : "text-red-500")}>
              {nutriscore}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}