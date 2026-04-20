import { useState } from "react";
import schools from "../data/schools";

const SchoolTooltip = ({ schoolName }) => {
  const [visible, setVisible] = useState(false);
  const school = schools.find((s) => s.name === schoolName);

  if (!school) return null;

  return (
    <span className="relative inline-block">
      <span
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="cursor-help ml-1"
      >
        ℹ️
      </span>
      {visible && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-800 border border-purple-400 rounded-lg p-2 md:p-3 w-40 md:w-48 text-xs md:text-sm text-white z-50 max-w-xs">
          <strong className="block mb-1 text-xs md:text-sm">{school.name}</strong>
          <p className="mb-2 text-xs md:text-sm">{school.description}</p>
          <small className="text-gray-300 text-xs">Key thinkers: {school.authors.join(", ")}</small>
        </div>
      )}
    </span>
  );
};

export default SchoolTooltip;