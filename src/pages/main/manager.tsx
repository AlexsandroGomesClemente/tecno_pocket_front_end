import HeaderMain from "@/src/components/main/headerMain";
import ManagerMain from "@/src/components/main/managerMain";
import ModalProduct from "@/src/components/main/modalProduct";
import { useState } from "react";

const Gerenciamento = () => {
  const [activeModal, setActiveMoldal] = useState<boolean>(false);

  const changeModal = () => {
    setActiveMoldal(!activeModal);
  };

  return (
    <main className="w-full h-screen flex flex-col items-center bg-shop overflow-hidden">
      <HeaderMain typePage="manager" onChangeModal={changeModal} />
      <ManagerMain onChangeModal={changeModal} active={activeModal} />
      {activeModal && <ModalProduct onChangeModal={changeModal} modalOpen={activeModal} />}
    </main>
  );
};

export default Gerenciamento;
