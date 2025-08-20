import data from "../../public/products.json";

const CategorySidebar = ({
  onCategorySelect,
  onSortChange,
  onPriceChange,
  selectedCategory,
  maxPrice,        // 👈 get from parent
  sortOption       // 👈 get from parent
}) => {
  const handleCategoryClick = (category) => {
    onCategorySelect(category);
  };

  const handlePriceRangeChange = (e) => {
    const value = Number(e.target.value);
    onPriceChange(value);
  };

  return (
    <aside>
      <div className="-mt-10 mb-5">
        <h2 className="text-3xl font-bold">All Products</h2>
        <p className="text-gray-600 text-base mt-2">
          Discover our complete collection
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg space-y-4 p-4">
        {/* Categories */}
        <h3 className="text-base font-medium text-gray-700 ">Categories</h3>
        <div className="flex flex-col space-y-2">
          {data.categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryClick(category)}
              className={`rounded py-2 px-3 text-left ${
                selectedCategory === category
                  ? "bg-accent text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Price Range */}
        <div className="my-6">
          <h2 className="text-base font-medium text-gray-700 mb-2">
            Price Range
          </h2>
          <input
            type="range"
            min="0"
            max="300"
            value={maxPrice}   // 👈 controlled from parent
            onChange={handlePriceRangeChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-gray-400">
            <span>$0</span>
            <span>${maxPrice}</span>
          </div>
        </div>

        {/* Sort by */}
        <div>
          <h2 className="text-base font-medium text-gray-700 mb-2">Sort by</h2>
          <select
            className="border border-gray-300 outline-0 py-2 px-2 w-full rounded-lg"
            value={sortOption}   // 👈 controlled from parent
            onChange={(e) => onSortChange(e.target.value)}
          >
            <option value="name">Name (A-Z)</option>
            <option value="low-high">Price (Low to High)</option>
            <option value="high-low">Price (High to Low)</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>
    </aside>
  );
};

export default CategorySidebar;
