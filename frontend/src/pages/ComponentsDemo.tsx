// import { useState } from "react";

// import {
//   Button,
//   Input,
//   Modal,
//   Toast,
//   Loader,
// } from "../components/ui";

// function ComponentsDemo() {
//   const [showModal, setShowModal] = useState(false);
//   const [showToast, setShowToast] = useState(false);

//   return (
//     <div className="max-w-4xl mx-auto p-8 space-y-8">
//       <h1 className="text-4xl font-bold">
//         Component Library Demo
//       </h1>

//       <div>
//         <h2 className="font-semibold mb-2">Button</h2>

//         <Button
//           text="Open Modal"
//           onClick={() => setShowModal(true)}
//         />
//       </div>

//       <div>
//         <h2 className="font-semibold mb-2">Input</h2>

//         <Input placeholder="Enter your name" />
//       </div>

//       <div>
//         <h2 className="font-semibold mb-2">Loader</h2>

//         <Loader />
//       </div>

//       <div>
//         <h2 className="font-semibold mb-2">Toast</h2>

//         <Button
//           text="Show Toast"
//           onClick={() => {
//             setShowToast(true);

//             setTimeout(() => {
//               setShowToast(false);
//             }, 3000);
//           }}
//         />
//       </div>

//       <Modal
//         isOpen={showModal}
//         title="Reusable Modal"
//         onClose={() => setShowModal(false)}
//       />

//       {showToast && (
//         <Toast message="Component Library Working!" />
//       )}
//     </div>
//   );
// }

// export default ComponentsDemo;