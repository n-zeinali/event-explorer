type FilterBarProps = {
  category: string;
  onCategoryChange: (value: string) => void;
  search: string;
  onSearchChange: (value: string) => void;
};

export default function FilterBar({
  category,
  onCategoryChange,
  search,
  onSearchChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-col gap-3 border-t border-black-200 pt-4 md:flex-row md:items-center md:justify-between">
      <h2 className="text-2xl font-semibold text-slate-800">Air Races / Events</h2>

      <div className="flex flex-col gap-3 md:flex-row">
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search Location"
          className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm outline-none focus:border-slate-500 md:w-64"
        />

        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm outline-none focus:border-slate-500 md:w-48"
        >
          <option value="all">Show all</option>
          <option value="A">A</option>
          <option value="B">B</option>
        </select>
      </div>
    </div>
  );
}