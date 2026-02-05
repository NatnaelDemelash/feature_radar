'use client'

export default function NavBar() {
  const onAddFeature = () => {
    // Your add feature logic
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="container mx-auto flex h-12 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <h1 className="text-base font-normal text-gray-900 tracking-tight">
            Feature Radar
          </h1>
          <span className="text-xs text-gray-500 px-2 py-0.5 bg-gray-100 rounded">Beta</span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={onAddFeature}
            className="inline-flex items-center justify-center whitespace-nowrap rounded border border-gray-300 bg-white hover:bg-gray-50 px-3.5 py-1.5 text-sm text-gray-700 transition-colors focus:outline-none cursor-pointer"
          >
            <svg className="mr-1.5 h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
            </svg>
            Add Feature
          </button>
        </div>
      </div>
    </header>
  )
}