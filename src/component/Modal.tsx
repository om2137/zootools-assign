import React from "react";
import { ImCross } from "react-icons/im";

interface Props {
    title: string;
    buttonText: string;
}

export default function Modal({title, buttonText}:Props ) {
  const [showModal, setShowModal] = React.useState(false);


  return (
    <>
      <button
        className="bg-gray-100 text-xl font-semibold rounded-xl py-4 px-6  ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        {buttonText}
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 w-[50rem] rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {title} 
                  </h3>
                  <button className="flex items-center" onClick={() => setShowModal(false)}><ImCross color='black' size='24px'/></button>
                </div>
                {/*body*/}
                <div className="relative p-6 w-96 flex-auto0">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed p-3">
                    Will be updated  with more Information 
                  </p>
                </div>

              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}