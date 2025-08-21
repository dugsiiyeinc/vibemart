import { Link } from "react-router";

export default function Empty({
  icon,
  title,
  description,
  buttonIcon,
  buttonText,
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center justify-center flex-col">
        {icon}
        <h1 className="text-2xl font-bold text-gray-600 mb-4">{title}</h1>
        <p className="text-gray-500 mb-8">{description}</p>
        <Link className="self-start" to="/products">
          <button className="whitespace-nowrap cursor-pointer font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 bg-[#feba17] hover:bg-[#e6a615] text-white px-6 py-3 text-lg">
            {buttonIcon}
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
}
