import Logo from "../../assets/img/LogoTecnoPocket.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import httpCommons from "@/src/helpers/httpCommons";
import toast, { Toaster } from "react-hot-toast";

const CardProduct = () => {
  const [dataTable, setDataTable] = useState<any>([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  const getDataTable = async () => {
    try {
      const response = await httpCommons.get(`/products`);
      if (response.status === 200) {
        console.log(response.data.produtos, "teste data");
        setDataTable(response.data.produtos);
      }
    } catch (error) {
      toast.error("Error ao buscar produtos", {
        position: "top-center",
      });
    }
  };

  useEffect(() => {
    getDataTable();
  }, []);

  return (
    <div className=" w-full h-5/6 flex justify-center items-center gap-8">
      {dataTable.length > 0 ? (
        dataTable.map((item: any, index: any) => {
          return (
            <div
              key={index}
              className={`glass-effect w-2/12 h-5/6 product-off cursor-pointer ${
                hoveredCard === index ? "hovered" : ""
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {hoveredCard === index ? (
                <>
                  <Image
                    src={item.imagem.data.length > 0 ? item.imagem.data : Logo}
                    alt="img prod"
                    width={190}
                    height={180}
                    className="ml-2 my-8"
                  />
                  <div className="flex flex-col justify-center items-center gap-2">
                    <span className="text-xl">{item.titulo}</span>
                    <span className="text-center pl-2">
                     {item.descricao}
                    </span>
                    <span className="text-xl">R${item.preco}</span>
                    <button className="rounded-2xl bg-black w-4/6 mt-3">
                      Saiba Mais
                    </button>
                  </div>
                </>
              ) : (
                <Image
                  src={item.imagem.data.length > 0 ? item.imagem.data : Logo}
                  alt="img prod"
                  width={190}
                  height={180}
                />
              )}
            </div>
          );
        })
      ) : (
        <div className="absolute top-40 left-[32rem] text-2xl">
          {" "}
          Sem produtos cadastrados
        </div>
      )}

      <Toaster />
    </div>
  );
};

export default CardProduct;
