import BreadCumb from "../helpers/breadcumb";
import TableManager from "./tableManeger";

const ManagerMain = () => {
  return (
    <section className="w-5/6 h-full  text-white">
      <BreadCumb bread="Gerenciamento" router="Main / Gerenciamento " />
      <TableManager />
    </section>
  );
};

export default ManagerMain;
