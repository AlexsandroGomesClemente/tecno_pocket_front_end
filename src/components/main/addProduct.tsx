import { GrAddCircle } from "react-icons/gr";
import { FormModalProduct } from "@/src/interfaces/main";

const AddProduct = (props: FormModalProduct) => {
  return (
    <li
      onClick={() => {
        localStorage.removeItem("updateProduct")  
        props.onChangeModal()
      }}
      className="absolute right-96 flex items-center gap-2 mr-5 cursor-pointer	hover:text-red-700"
    >
      <GrAddCircle color="white" size={20} /> Adicionar Produto
    </li>
  );
};

export default AddProduct;
