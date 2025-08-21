import {
  RiCustomerService2Line,
  RiShieldLine,
  RiTruckLine,
} from "react-icons/ri";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto my-20 px-4">
      {/* what we do */}
      <div className=" flex justify-center flex-wrap my-12 gap-8">
        <div className="flex flex-col items-center gap-3">
          <span className="bg-accent w-15 p-2 h-15 rounded-full flex justify-center items-center">
            <RiTruckLine className="text-2xl text-gray-50" />
          </span>
          <div className="text-center">
            <h4 className="text-xl font-semibold">Free Shipping</h4>
            <p className="text-gray-600 max-w-sm">Free shipping on orders over $50. Fast and reliable delivery.</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className=" w-15 bg-[#119da5] p-2 h-15 rounded-full flex justify-center items-center">
            <RiShieldLine className="text-2xl text-gray-50" />
          </span>
          <div className="text-center">
            <h4 className="text-xl font-semibold">Secure Payment</h4>
            <p className="text-gray-600 max-w-sm">
              Your payment information is safe and secure with us.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="bg-pink w-15 p-2 h-15 rounded-full flex justify-center items-center">
            <RiCustomerService2Line className="text-2xl text-gray-50" />
          </span>
          <div className="text-center">
            <h4 className="text-xl font-semibold">24/7 Support</h4>
            <p className="text-gray-600 max-w-sm">
              Our customer support team is here to help you anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
