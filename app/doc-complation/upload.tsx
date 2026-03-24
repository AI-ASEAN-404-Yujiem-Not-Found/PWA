import { FiUpload } from 'react-icons/fi'

export function UploadBox({ title }: { title: string }) {
  return (
    <div>
      <p className="text-sm font-medium mb-2">{title}</p>

      <div className="border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center text-center">
        <div className="bg-gray-200 w-12 h-12 flex items-center justify-center rounded-lg mb-2">
          <FiUpload size={20} />
        </div>
        <p className="text-sm text-gray-600">
          Scan/Upload {title}
        </p>
        <p className="text-xs text-gray-400">Max file size : 10 MB</p>
      </div>
    </div>
  )
}