// components/SortSelect.tsx

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SortSelect({ value, onChange }: Props) {
  return (
    <select
      className="border p-2 rounded bg-black"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="market_cap_desc">Market Cap (High to Low)</option>
      <option value="market_cap_asc">Market Cap (Low to High)</option>
      <option value="price_desc">Price (High to Low)</option>
      <option value="price_asc">Price (Low to High)</option>
    </select>
  );
}
