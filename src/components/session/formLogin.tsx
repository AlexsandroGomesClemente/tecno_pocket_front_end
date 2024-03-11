import { GrMailOption, GrLock } from "react-icons/gr";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import httpCommons from "@/src/helpers/httpCommons";

const FormLogin = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const loginUser = async (
    e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLElement>
  ) => {
    e.preventDefault();

    if (email === "" || password === "")
      return toast.error("Preencha todos os dados corretamente", {
        position: "top-center",
      });

    try {
      const response = await httpCommons.post("/login", {
        email,
        password,
      });

      if (response.status === 200) {
        localStorage.setItem("token", response.data.user[0].token_session);
        toast.success(response.data.message, { position: "top-center" });
        setTimeout(() => router.push("/main/productsShop"), 500);
      }
    } catch (error) {
      toast.error("Dados do usuario estão errados", {
        position: "top-center",
      });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      loginUser(e);
    }
  };

  return (
    <>
      <form
        onKeyUp={handleKeyPress}
        className="mt-20 w-full h-2/6 flex justify-center items-center flex-col gap-4"
      >
        <div className="flex flex-row justify-start items-center w-5/6 h-2/6 mb-5  border-b-2 border-red-600	 ">
          <GrMailOption size={30} color="#B91202" className="mx-4" />
          <input
            className="text-lg w-5/6  placeholder:text-[#B91202]  text-[#B91202] bg-transparent focus:no-underline pl-1 outline-none"
            type="email"
            placeholder="Digite seu email"
            name="email"
            title="e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-row justify-start items-center w-5/6 h-2/6 mb-5  border-b-2 border-red-600	 ">
          <GrLock size={30} color="#B91202" className="mx-4" />
          <input
            className="text-lg w-5/6  placeholder:text-[#B91202] text-[#B91202] focus:no-underline pl-1 outline-none bg-transparent"
            type="password"
            placeholder="Digite sua senha"
            name="password"
            title="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </form>
      <button
        onClick={loginUser}
        className="text-white transition  ease-in-out delay-150 mt-20 w-5/6 h-16 bg-[#B91202] rounded-3xl text-2xl hover:-translate-y-1 hover:scale-110 hover:bg-[#B91247] duration-300 hover:opacity-90 "
      >
        Entrar
      </button>
      <Toaster />
    </>
  );
};

export default FormLogin;
