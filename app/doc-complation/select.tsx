import { FiChevronDown } from 'react-icons/fi'

export function Select({ label }: { label: string }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <div className="mt-2 border rounded-lg px-3 py-3 flex justify-between items-center">
        Select service
        <FiChevronDown />
      </div>
      <p className="text-xs text-gray-400 mt-1">This is a hint text to help user.</p>
    </div>
  )
}