import { TitleProduct } from "@/src/interfaces/main";

const TitleModalProduct = (props: TitleProduct) => {
  return (
    <h1 className="text-4xl mb-2">
      {props.typeForm === "new" ? "Registrar Produto" : "Editar Produto"}
    </h1>
  );
};

export default TitleModalProduct;
