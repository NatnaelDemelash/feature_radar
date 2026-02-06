"use client";

import { useState } from "react";

export default function AddFeatureModal({
  isOpenModal,
  closeAddFeatureModal,
  addFeatures,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  // const [feature, setFeature] = ({
  //   title, description, category
  // })

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newFeature = {
      id: Date.now(),
      title,
      description,
      category,
    };

    addFeatures(newFeature);
  };

  return (
    <>
      {/* Modal */}
      {isOpenModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Modal Box */}
          <div className="relative bg-white dark:bg-gray-900 rounded-lg p-6 sm:max-w-md w-full shadow-lg z-50">
            {/* Header */}
            <h2 className="text-lg font-semibold mb-2">
              Submit a Feature Request
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Share your idea to help improve the product. Be clear and
              specific.
            </p>

            {/* Form */}
            <form className="space-y-4" onSubmit={handleFormSubmit}>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="title"
                >
                  Feature Title
                </label>
                <input
                  id="title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Dark mode toggle"
                  className="w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Explain why this feature is important..."
                  rows={4}
                  className="w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="category"
                >
                  Category (optional)
                </label>
                <select
                  id="category"
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                >
                  <option value="">Select category</option>
                  <option value="UI">UI</option>
                  <option value="Performance">Performance</option>
                  <option value="Integration">Integration</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Footer Buttons */}
              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  className="px-4 py-2 rounded-md border hover:bg-gray-100 transition"
                  onClick={closeAddFeatureModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800 transition"
                >
                  Add Feature
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
