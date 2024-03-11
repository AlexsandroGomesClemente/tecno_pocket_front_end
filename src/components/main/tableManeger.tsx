import httpCommons from "@/src/helpers/httpCommons";
import { TableMain } from "@/src/interfaces/main";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const TableManager = (props: TableMain) => {
  const [dataTable, setDataTable] = useState<any>([]);

  const getDataTable = async () => {
    try {
      const response = await httpCommons.get(`/products`);
      if (response.status === 200) {
        setDataTable(response.data.produtos);
      }
    } catch (error) {
      toast.error("Error ao buscar produtos", {
        position: "top-center",
      });
    }
  };

  const removeProduct = async (e: React.MouseEvent, id: any) => {
    try {
      const response = await httpCommons.delete(`/products/${id}`);
      if (response.status === 200) {
        toast.success("Produto deletado", {
          position: "top-center",
        });
        getDataTable();
      }
    } catch (error) {
      toast.error("Error ao remover o produto", {
        position: "top-center",
      });
    }
  };

  useEffect(() => {
    getDataTable();
  }, [props.active]);

  return (
    <div className=" w-full h-4/6 flex justify-center items-center gap-8  ">
      <div className="glass-effect w-full  h-5/6 flex justify-start rounded-t-2xl overflow-auto	max-h-full ">
        <table border={1} className="w-full tabela ">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Preço</th>
              <th>Marca</th>
              <th>Categoria</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {dataTable.length > 0 ? (
              dataTable.map((item: any, index: any) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.titulo}</td>
                  <td>{item.descricao}</td>
                  <td>{item.preco}</td>
                  <td>{item.marca}</td>
                  <td>{item.categoria}</td>
                  <td className="flex gap-2">
                    <button
                      onClick={(e) => {
                        localStorage.removeItem("updateProduct");
                        const product = { ...dataTable[index] };
                        localStorage.setItem(
                          "updateProduct",
                          JSON.stringify(product)
                        );
                        props.onChangeModal();
                      }}
                    >
                      Editar
                    </button>
                    <button onClick={(e) => removeProduct(e, item.id)}>
                      Excluir
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <div className="absolute top-40 left-[32rem] text-2xl">
                {" "}
                Sem produtos cadastrados
              </div>
            )}
          </tbody>
        </table>
      </div>
      <Toaster />
    </div>
  );
};

export default TableManager;
