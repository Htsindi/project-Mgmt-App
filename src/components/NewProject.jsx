import Input from "./Input.jsx";
import { useRef } from "react";

import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {
  const titleRef = useRef();
  const descrRef = useRef();
  const dueDateRef = useRef();
  //useRef for Modal
  const modalRef = useRef();

  const handleSubmit = () => {
    const enteredTitle = titleRef.current.value;
    const enteredDescr = descrRef.current.value;
    const enteredDueDate = dueDateRef.current.value;
    //Validation
    if (
      enteredTitle.trim() === "" ||
      enteredDescr.trim().length === 0 ||
      enteredDueDate.trim().length === 0
    ) {
      //Show error modal
      modalRef.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescr,
      dueDate: enteredDueDate,
    });
  };

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Please check your input values</p>
        <p className="text-stone-600 mb-4">
          Make sure you enter at least a title, a description and a due date
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSubmit}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:text-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={titleRef} label="Title" />
          <Input ref={descrRef} label="Description" textarea />
          <Input type="date" ref={dueDateRef} label="Due Date" />
        </div>
      </div>
    </>
  );
}
