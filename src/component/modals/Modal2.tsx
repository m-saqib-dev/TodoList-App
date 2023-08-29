import { useState } from "react";
import Button from "../button";

type ModalProp = {
  children: React.ReactNode;
};

export const CustomModal: React.FC<ModalProp> & {
  Header: React.FC<ModalProp>;
  Body: React.FC<ModalProp>;
} = ({ children}) => {
  const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     setIsOpen(isOpen);
//   }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className="border-red-100 border w-4/5 flex justify-center items-center h-32 rounded-md border-dashed">
        <Button type='create' onClick={handleToggle}/>
    </div>
    <div
     
      className={`${
          isOpen ? "block" : "hidden"
      } flex bg-opcity-rgba justify-center items-center text-white h-screen w-full fixed top-0`}
    >
      <div className="p-4 flex flex-col  text-white bg-slate-900 h-2/3 w-3/4">
        <button onClick={handleToggle} type="button" className="p-2 self-end">
          x
        </button>
        {children}
      </div>
    </div>
          </>
  );
};

CustomModal.Header = ({ children }) => <div className="text-4xl flex items-center justify-center my-10 h-16 w-full">{children}</div>;
CustomModal.Body = ({ children }) => <>{children}</>;
