'use client';

type SearchBarProps = {
  searchTerm: string;
  onSearchChange: (value: string) => void;
};
export function SearchBar({ searchTerm, onSearchChange }: SearchBarProps) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search for a Coin..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-800 "
      />
    </div>
  );
}
