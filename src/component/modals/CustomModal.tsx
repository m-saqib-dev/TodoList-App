import { useState } from "react";
import Button from "../button";
import { AiOutlineClose } from "react-icons/ai";

type ModalProp = {
  children: React.ReactNode;
};

export const CustomModal: React.FC<ModalProp> & {
  Header: React.FC<ModalProp>;
  Body: React.FC<ModalProp>;
  Footer:React.FC<ModalProp>;
} = ({ children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className="border-red-100 border w-4/5 relative flex justify-center items-center h-32 rounded-md border-dashed">
        <Button type='create' onClick={handleToggle}/>
    </div>
    <div
     
      className={`${
          isOpen ? "block" : "hidden"
      } flex bg-opcity-rgba justify-center items-center text-white h-screen w-full fixed top-0`}
    >
      <div className="flex flex-col  text-white bg-slate-900 h-2/3 w-3/4">
        <button onClick={handleToggle} type="button" className="p-2 self-end absolute">
        <AiOutlineClose/>
        </button>
        {children}
      </div>
    </div>
          </>
  );
};

CustomModal.Header = ({ children }) => <div className="text-4xl flex items-center p-5  w-full">{children}</div>;
CustomModal.Body = ({ children }) => <>{children}</>;
CustomModal.Footer = ({ children }) => <div className="flex items-end justify-end gap-2 w-full h-full p-4">{children}</div>;