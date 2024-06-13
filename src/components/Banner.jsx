import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";

export default function Banner() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="pointer-events-none z-50 fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8">
          <div className="pointer-events-auto flex items-center justify-between gap-x-6 bg-gray-900 px-6 py-2.5 sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5">
            <p className="text-sm leading-6 text-white">
              <a href="#">
                <strong className="font-semibold">BARAMEY 2024</strong>
                <svg
                  viewBox="0 0 2 2"
                  className="mx-2 inline h-0.5 w-0.5 fill-current"
                  aria-hidden="true"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                N'hésitez pas à participer au "Jeu du festin" pour gagner une
                entrée, un plat ou un dessert sur votre première commande &nbsp;
                <span aria-hidden="true">&rarr;</span>
              </a>
            </p>
            <button
              type="button"
              className="-m-1.5 flex-none p-1.5"
              onClick={handleClose}
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon className="h-5 w-5 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
