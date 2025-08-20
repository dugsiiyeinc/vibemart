

const CTA = () => {
  return (
    <div className="w-full h-80 bg-[#363636] gap-3 p-6  text-gray-50 flex flex-col justify-center items-center">
      <h4 className="text-3xl font-bold">Stay Updated</h4>
      <p className="text-xl text-gray-300">Subscribe to our newsletter and never miss our latest products and offers</p>
      <div className="flex flex-col md:flex-row gap-4 mt-6">
        <input className="bg-white rounded-lg p-3 w-90 border border-gray-800  outline-0 text-gray-800" type="text" placeholder="Enter Your Email" />
      <button className="bg-accent px-4 py-2 rounded-lg">Subscribe</button>
      </div>
    </div>
  );
};

export default CTA;
