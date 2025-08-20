import ProductsList from "../components/ProductsList";
import CategorySidebar from "../components/CategorySidebar";
import data from "../../public/products.json";
import { useState } from "react";

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [maxPrice, setMaxPrice] = useState(300);
  const [sortOption, setSortOption] = useState("name");

  // Filter by categor & price
  let filteredProducts =
    selectedCategory === "All Categories"
      ? data.products
      : data.products.filter((p) => p.category === selectedCategory);

  filteredProducts = filteredProducts.filter((p) => p.price <= maxPrice);

  // Sorting
  if (sortOption === "low-high") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "high-low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortOption === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  } else if (sortOption === "name") {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div className="min-h-screen bg-[#F9F9F9] py-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-6">
        {/* Sidebar */}
        <CategorySidebar
          onCategorySelect={setSelectedCategory}
          onPriceChange={setMaxPrice}
          onSortChange={setSortOption}
          selectedCategory={selectedCategory}
          maxPrice={maxPrice}
          sortOption={sortOption}
        />

        {/* Products */}
        <div>
          <ProductsList
            filteredProducts={filteredProducts}
            totalProducts={data.products.length}
            onReset={() => {
              setSelectedCategory("All Categories");
              setMaxPrice(300);
              setSortOption("name");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
