export default function SearchBar({ value, onChange, count }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="🔍 Search by name, ID, department..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <span className="count">{count} record(s)</span>
    </div>
  );
}