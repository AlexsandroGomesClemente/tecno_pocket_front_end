import BreadCumb from "../helpers/breadcumb";
import CardProduct from "./cardProduct";

const ProductsMain = () => {
  return (
    <section className="w-5/6 h-full  text-white">
      <BreadCumb bread="Produtos" router="Main / Produtos" />
      <CardProduct />
    </section>
  );
};

export default ProductsMain;
