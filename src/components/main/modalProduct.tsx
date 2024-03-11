import { ModalProducts } from "@/src/interfaces/main";
import TitleModalProduct from "../modalProducts/titleModalProducts";
import CloseModalProducts from "../modalProducts/closeModalProducts";
import FormModalProduct from "../modalProducts/formModalProducts";

const ModalProduct = (props: ModalProducts) => {
  const typePage: string = localStorage.getItem("updateProduct")
    ? "update"
    : "new";

  return (
    <div
      className="bg-black text-white h-screen w-2/6 z-1 absolute right-0 flex flex-col justify-center items-center transition-opacity duration-600 ease-in-out"
      style={{ opacity: props.modalOpen ? 1 : 0 }}
    >
      <CloseModalProducts onChangeModal={props.onChangeModal} />
      <TitleModalProduct typeForm={typePage} />
      <FormModalProduct
        onChangeModal={props.onChangeModal}
        typeForm={typePage}
      />
    </div>
  );
};

export default ModalProduct;
