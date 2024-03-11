import { GrAddCircle } from "react-icons/gr";
import { FormModalProduct } from "@/src/interfaces/main";

const AddProduct = (props: FormModalProduct) => {
  return (
    <li
      onClick={() => {
        localStorage.removeItem("updateProduct")  
        props.onChangeModal()
      }}
      className="absolute right-96 flex items-center text-[#25335C] gap-2 mr-5 cursor-pointer	hover:text-[#25335C]"
    >
      <GrAddCircle color="#25335C" size={20} /> Adicionar Produto
    </li>
  );
};

export default AddProduct;
