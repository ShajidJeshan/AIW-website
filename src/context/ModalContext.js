import { useState } from "react";
import { createContext } from "react";
import SignupModal from "../components/layout/SignupModal";

export const SignupModalContext = createContext();

export const SignupModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <SignupModalContext.Provider
      value={{ openModal: () => setShowModal(true) }}
    >
      <>
        {showModal && <SignupModal onClose={() => setShowModal(false)} />}
        {children}
      </>
    </SignupModalContext.Provider>
  );
};
