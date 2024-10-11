import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const EmptyState = ({ message, address, label }) => {
  return (
    <div className="min-h-[calc(100vh-116px)] gap-5 flex flex-col justify-center items-center pb-16">
      <p className="text-2xl">{message}</p>
      <Link
        to={address}
        className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-secondary text-primary"
      >
        <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-primary top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
        <span className="relative text-primary transition duration-300 group-hover:text-white ease">
          {label}
        </span>
      </Link>
    </div>
  );
};

EmptyState.propTypes = {
  message: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default EmptyState;
