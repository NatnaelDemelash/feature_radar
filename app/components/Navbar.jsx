"use client";

export default function NavBar({ openAddFeatureModal }) {
  const onAddFeature = () => {
    openAddFeatureModal();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <h1 className="text-base font-normal text-gray-900 tracking-tight">
            Feature Radar
          </h1>
          <span className="text-xs text-gray-500 px-2 py-0.5 bg-gray-100 rounded">
            Beta
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
            onClick={onAddFeature}
          >
            Add Feature
          </button>
        </div>
      </div>
    </header>
  );
}
