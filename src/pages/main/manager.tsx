import HeaderMain from "@/src/components/main/headerMain";
import ManagerMain from "@/src/components/main/managerMain";
import ModalProduct from "@/src/components/main/modalProduct";

const Gerenciamento = () => {
  return (
    <main className="w-full h-screen flex flex-col items-center bg-shop overflow-hidden">
      <HeaderMain />
      <ManagerMain />
      <ModalProduct />
    </main>
  );
};

export default Gerenciamento;
