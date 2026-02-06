"use client";

import AddFeatureModal from "@/components/AddFeatureModal";
import { useState } from "react";
import NavBar from "./components/Navbar";

export default function Home() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openAddFeatureModal = () => {
    setIsOpenModal(true);
  };

  const closeAddFeatureModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div>
      <NavBar openAddFeatureModal={openAddFeatureModal} />
      <AddFeatureModal
        isOpenModal={isOpenModal}
        closeAddFeatureModal={closeAddFeatureModal}
      />
    </div>
  );
}
