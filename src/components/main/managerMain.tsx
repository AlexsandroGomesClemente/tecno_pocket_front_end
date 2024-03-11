import { TableMain } from "@/src/interfaces/main";
import BreadCumb from "../helpers/breadcumb";
import TableManager from "./tableManeger";

const ManagerMain = (props: TableMain) => {
  return (
    <section className="w-5/6 h-full  text-white">
      <BreadCumb bread="Gerenciamento" router="Main / Gerenciamento " />
      <TableManager onChangeModal={props.onChangeModal} active={props.active}/>
    </section>
  );
};

export default ManagerMain;
