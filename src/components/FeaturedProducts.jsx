// import { Link } from "react-router";
// import data from "../../public/products.json";
// import ProductCard from "../components/ProductCard";
// import { RiArrowRightSLine } from "react-icons/ri";

// const FeaturedProducts = () => {
//   const featured = data.products.slice(0, 4);

//   return (
//     <section className="min-h-screen bg-[#F9F9F9] pt-6">
//       <div className="p-12 max-w-7xl mx-auto px-4">
//         <div className="text-center mb-8">
//           <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
//           <p className="text-xl text-gray-600">
//             Discover our most popular items
//           </p>
//         </div>
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//           {featured.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//         <button className="my-12 text-white text-lg bg-accent py-3 px-6 rounded-lg">
//           <Link className="flex items-center gap-1" to={`/products/`}>
//             <span>View All Products</span>
//             <RiArrowRightSLine className="mt-1 text-xl"/>
//           </Link>
//         </button>
//       </div>
//     </section>
//   );
// };

// export default FeaturedProducts;
