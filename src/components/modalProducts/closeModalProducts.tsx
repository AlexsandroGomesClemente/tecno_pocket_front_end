import { ModalProducts } from "@/src/interfaces/main";
import { GrClose } from "react-icons/gr";

const CloseModalProducts = (props: ModalProducts) => {
  return (
    <div
      className="self-end mr-6 mt-2 text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 cursor-pointer duration-300 hover:opacity-90"
      onClick={() => props.onChangeModal()}
    >
      <GrClose color="white" size={30} />
    </div>
  );
};

export default CloseModalProducts;
