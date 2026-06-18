import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Button,
  Input,
  Modal,
  Toast,
  Loader,
} from "../components/ui";

type ComponentsDemoProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

function ComponentsDemo({ darkMode,
  toggleDarkMode }: ComponentsDemoProps) {
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  return (
    <>
      <Navbar darkMode={darkMode}
  toggleDarkMode={toggleDarkMode} />

      <div className={`max-w-4xl mx-auto p-8 space-y-8 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-white text-black"
      }`}>
        <h1 className="text-4xl font-bold">
          Component Library Demo
        </h1>

        <div>
          <h2 className="font-semibold mb-2">Button</h2>

          <Button
            text="Open Modal"
            onClick={() => setShowModal(true)}
          />
        </div>

        <div>
          <h2 className="font-semibold mb-2">Input</h2>

          <Input placeholder="Enter your name" />
        </div>

        <div>
          <h2 className="font-semibold mb-2">Loader</h2>

          <Loader />
        </div>

        <div>
          <h2 className="font-semibold mb-2">Toast</h2>

          <Button
            text="Show Toast"
            onClick={() => {
              setShowToast(true);

              setTimeout(() => {
                setShowToast(false);
              }, 3000);
            }}
          />
        </div>

        <Modal
          isOpen={showModal}
          title="Reusable Modal"
          onClose={() => setShowModal(false)}
        />

        {showToast && (
          <Toast message="Component Library Working!" />
        )}
      </div>

      <Footer darkMode={darkMode} />
    </>
  );
}

export default ComponentsDemo;