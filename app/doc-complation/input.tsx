export function Input({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="mt-2 w-full border rounded-lg px-3 py-3"
      />
      <p className="text-xs text-gray-400 mt-1">This is a hint text to help user.</p>
    </div>
  )
}
