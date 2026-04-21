import schools from "../data/schools";
import SchoolTooltip from "./SchoolTooltip";

const FilterBar = ({ selectedSchool, onSelectSchool, searchTerm, onSearch }) => {
  return (
    <div className="flex flex-col items-center gap-4 md:gap-6 mb-8 px-2 md:px-4">
      <input
        type="text"
        placeholder="Search Quote..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        className="border-b border-gray-700 mx-auto w-full md:max-w-2xl p-1 text-white placeholder:text-gray-500 text-sm md:text-base"
      />

      <div className="flex flex-wrap gap-2 md:gap-4 justify-center w-full">
        <button
          onClick={() => onSelectSchool(null)}
          className="border-2 rounded-xl border-gray-300 p-2 text-xs md:text-sm hover:bg-gray-700"
        >
          All
        </button>
        {schools.map((school) => (
          <button
            key={school.name}
            onClick={() => onSelectSchool(school.name)}
            className={`border-2 rounded-xl border-gray-300 p-2 text-xs md:text-sm ${
              selectedSchool === school.name ? "bg-gray-600" : "hover:bg-gray-700"
            }`}
          >
            {school.name} <SchoolTooltip schoolName={school.name} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;