import {
  GrArchive,
  GrBlockQuote,
  GrCurrency,
  GrImage,
  GrList,
  GrIntegration,
} from "react-icons/gr";
import { useState } from "react";
import httpCommons from "@/src/helpers/httpCommons";
import { FormModalProduct } from "@/src/interfaces/main";
import toast, { Toaster } from "react-hot-toast";

const FormModalProduct = (props: FormModalProduct) => {
  let productUpdate: any = localStorage.getItem("updateProduct") || "";
  if (productUpdate !== "") productUpdate = JSON.parse(productUpdate);
  const [titulo, setTitulo] = useState<string>(productUpdate.titulo || "");
  const [descricao, setDescricao] = useState<string>(
    productUpdate.descricao || ""
  );
  const [preco, setPreco] = useState<string>(productUpdate.preco || "");
  const [marca, setMarca] = useState<string>(productUpdate.marca || "");
  const [categoria, setCategoria] = useState<string>(
    productUpdate.categoria || ""
  );
  const [imagem, setImagem] = useState<string>("");

  const saveProduct = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const product = {
      titulo,
      descricao,
      preco,
      categoria,
      marca,
      imagem,
    };

    if (
      product.categoria === "" ||
      product.preco === "" ||
      product.descricao === "" ||
      product.titulo === ""
    )
      return toast.error("Preencha todos os dados corretamente", {
        position: "top-center",
      });

    try {
      const response =
        props.typeForm === "new"
          ? await httpCommons.post(`/products/new`, product)
          : await httpCommons.put(`/products/${productUpdate.id}`, product);

      if (response.status === 200) {
        toast.success("Produto salvo com sucesso!", { position: "top-center" });
        localStorage.removeItem("updateProduct");
        setTimeout(() => props.onChangeModal(), 600);
      }
    } catch (error) {
      toast.error("Produto não consegui ser concluido", {
        position: "top-center",
      });
    }
  };

  return (
    <>
      <form className="w-full h-4/6 flex flex-col justify-center items-center">
        <div className="flex flex-row justify-start items-center w-5/6 h-20 mb-5  border-b-2 border-red-600	 ">
          <GrArchive size={30} color="#B91202" className="mx-4" />
          <input
            className="text-lg w-5/6  placeholder:text-[#B91202]  text-[#B91202] bg-transparent focus:no-underline pl-1 outline-none"
            type="text"
            placeholder="Digite o nome do produto"
            name="produto"
            title="produto"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div className="flex flex-row justify-start items-center w-5/6 h-20 mb-5  border-b-2 border-red-600	 ">
          <GrBlockQuote size={30} color="#B91202" className="mx-4" />
          <input
            className="text-lg w-5/6  placeholder:text-[#B91202]  text-[#B91202] bg-transparent focus:no-underline pl-1 outline-none"
            type="text"
            placeholder="Digite a descrição"
            name="descricao"
            title="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>
        <div className="flex flex-row justify-start items-center w-5/6 h-20 mb-5  border-b-2 border-red-600	 ">
          <GrCurrency size={30} color="#B91202" className="mx-4" />
          <input
            className="text-lg w-5/6  placeholder:text-[#B91202]  text-[#B91202] bg-transparent focus:no-underline pl-1 outline-none"
            type="number"
            placeholder="Digite o preço"
            name="preco"
            title="preco"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
          />
        </div>
        <div className="flex flex-row justify-start items-center w-5/6 h-20 mb-5  border-b-2 border-red-600	 ">
          <GrList size={30} color="#B91202" className="mx-4" />
          <input
            className="text-lg w-5/6  placeholder:text-[#B91202]  text-[#B91202] bg-transparent focus:no-underline pl-1 outline-none"
            type="text"
            placeholder="Digite a categoria"
            name="categoria"
            title="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          />
        </div>
        <div className="flex flex-row justify-start items-center w-5/6 h-20 mb-5  border-b-2 border-red-600	 ">
          <GrIntegration size={30} color="#B91202" className="mx-4" />
          <input
            className="text-lg w-5/6  placeholder:text-[#B91202]  text-[#B91202] bg-transparent focus:no-underline pl-1 outline-none"
            type="texte"
            placeholder="Digite a marca"
            name="marca"
            title="marca"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
          />
        </div>
        <div className="flex flex-row justify-start items-center w-5/6 h-20 mb-5  border-b-2 border-red-600	 ">
          <GrImage size={30} color="#B91202" className="mx-4" />
          <input
            className="text-lg w-5/6  placeholder:text-[#B91202]  text-[#B91202] bg-transparent focus:no-underline pl-1 outline-none"
            type="file"
            placeholder="Escolha a imagem do produto"
            name="imagem"
            title="imagem"
            accept="image/*"
            value={imagem}
            onChange={(e) => setImagem(e.target.value)}
          />
        </div>
      </form>
      <button
        onClick={saveProduct}
        className="text-white transition ease-in-out delay-150 mt-10 w-5/6 h-16 bg-[#B91202] rounded-3xl text-2xl hover:-translate-y-1 hover:scale-110 hover:bg-[#B91247] duration-300 hover:opacity-90"
      >
        {props.typeForm === "new" ? "Adicionar" : "Editar"}
      </button>
      <Toaster />
    </>
  );
};

export default FormModalProduct;
