import Logo from "../../assets/img/LogoTecnoPocket.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import httpCommons from "@/src/helpers/httpCommons";
import toast, { Toaster } from "react-hot-toast";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";

const CardProduct = () => {
  const [dataTable, setDataTable] = useState<any>([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const getDataTable = async () => {
    try {
      const response = await httpCommons.get(`/products`);
      if (response.status === 200) {
        localStorage.setItem(
          "produtos",
          JSON.stringify(response.data.produtos)
        );
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

  setInterval(() => {
    const hasSearch =
      JSON.parse(localStorage.getItem("searchProduct") as string) || [];
    if (hasSearch.length > 0) {
      setDataTable(hasSearch);
    }
  }, 1000);

  const itemsPerPage = 4;

  const totalPages = Math.ceil(dataTable.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  return (
    <div className=" w-full h-5/6  flex justify-center  items-center gap-10 flex-nowrap	">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 0}
        className="bg-white absolute left-5 top-[65%] transform -translate-y-1/2 flex rounded-full w-10 h-20 flex justify-center items-center mr-2"
      >
        <GrCaretPrevious color="#25335C" size={25} />
      </button>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages - 1}
        className="bg-white absolute right-5 top-[65%]  transform -translate-y-1/2 flex rounded-full w-10 h-20 flex justify-center items-center mr-2"
      >
        <GrCaretNext color="#25335C" size={25} />
      </button>

      {dataTable.length > 0 ? (
        dataTable
          .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
          .map((item: any, index: any) => {
            return (
              <div
                key={index}
                className={`glass-effect w-2/6 min-w-72 h-80  product-off cursor-pointer ${
                  hoveredCard === index ? "hovered" : ""
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {hoveredCard === index ? (
                  <>
                    <img
                      src={item.imagem.data.length > 0 ? item.imagemUrl : Logo}
                      alt="img prod"
                      className="absolute top-0 left-0 w-full h-full object-hiden brightness-50 rounded-xl"
                    />
                    <div className=" absolute top-[20%] left-0 flex flex-col w-full justify-center items-center gap-2">
                      <span className="text-4xl text-left	 font-bold	">
                        {item.titulo}
                      </span>
                      <span className="text-xl">R${item.preco}</span>
                      <span className="text-center pl-2">{item.descricao}</span>
                      <button
                        onClick={() => alert("Área em desenvolvimento")}
                        className="rounded-2xl bg-[#25335C] w-5/6 h-[30px] mt-3"
                      >
                        Saiba Mais
                      </button>
                    </div>
                  </>
                ) : (
                  <img
                    src={item.imagem.data.length > 0 ? item.imagemUrl : Logo}
                    alt="img prod"
                    className="absolute top-0 left-0 w-full h-full object-hiden rounded-xl"
                  />
                )}
              </div>
            );
          })
      ) : (
        <div className="absolute top-[50%] left-[32rem] text-2xl">
          {" "}
          Sem produtos cadastrados
        </div>
      )}

      <Toaster />
    </div>
  );
};

export default CardProduct;
