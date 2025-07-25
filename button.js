export function Button({ children, className }) {
  return (
    <button className={`px-4 py-2 rounded text-white ${className}`}>
      {children}
    </button>
  );
}
