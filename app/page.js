"use client";

import AddFeatureModal from "@/components/AddFeatureModal";
import FeatureCard from "@/components/FeatureCard";
import { useState } from "react";
import NavBar from "./components/Navbar";

export default function Home() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [features, setFeatures] = useState([]);

  console.log("Current features:", features);

  const addFeatures = (featureData) => {
    setFeatures([...features, featureData]);
    closeAddFeatureModal();
  };

  const openAddFeatureModal = () => {
    setIsOpenModal(true);
  };

  const closeAddFeatureModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar openAddFeatureModal={openAddFeatureModal} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Empty State */}
        {features.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
              <svg
                className="w-8 h-8 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No features yet
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Start by suggesting the first feature request. What improvement
              would you like to see?
            </p>
            <button
              onClick={openAddFeatureModal}
              className="inline-flex items-center px-4 py-2 bg-[#111] text-white font-medium rounded-lg hover:bg-gray-900 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Add First Feature
            </button>
          </div>
        )}

        {/* Feature Cards */}
        <div className="space-y-4">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>

        {/* Add More Button (when there are features) */}
        {features.length > 0 && (
          <div className="mt-8 text-center">
            <button
              onClick={openAddFeatureModal}
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Add Another Feature
            </button>
          </div>
        )}
      </div>

      <AddFeatureModal
        isOpenModal={isOpenModal}
        closeAddFeatureModal={closeAddFeatureModal}
        addFeatures={addFeatures}
      />
    </div>
  );
}
