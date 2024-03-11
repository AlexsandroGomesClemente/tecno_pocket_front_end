import { GrMailOption, GrLock, GrUser, GrCycle } from "react-icons/gr";
import { useRouter } from "next/router";
import httpCommons from "@/src/helpers/httpCommons";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const FormRegister = () => {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const registerUser = async (
    e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLElement>
  ) => {
    e.preventDefault();

    if (name === "" || email === "" || password === "")
      return toast.error("Preencha todos os dados corretamente", {
        position: "top-center",
      });

    if (password !== confirmPassword)
      return toast.error("As senhas não correspondem", {
        position: "top-center",
      });

    try {
      const response = await httpCommons.post("/register", {
        name,
        email,
        password,
      });

      if (response.status === 200) {
        toast.success(response.data.message, { position: "top-center" });
        setTimeout(() => router.push("/"), 500);
      }
    } catch (error) {
      toast.error("Usuario não cadastrado", { position: "top-center" });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      registerUser(e);
    }
  };

  return (
    <>
      <form
        onKeyUp={handleKeyPress}
        className="mt-20 w-full h-[18rem] flex justify-center items-center flex-col gap-4"
      >
        <div className="flex flex-row justify-start items-center w-5/6 h-4/6 mb-3  border-b-2 border-white	 ">
          <GrUser size={30} color="#25335C" className="mx-4" />
          <input
            className="text-lg w-5/6  placeholder:text-[#25335C]  text-[#25335C] bg-transparent focus:no-underline pl-1 outline-none"
            type="email"
            placeholder="Digite seu nome"
            name="nome"
            title="nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-row justify-start items-center w-5/6 h-4/6 mb-3  border-b-2 border-white	 ">
          <GrMailOption size={30} color="#25335C" className="mx-4" />
          <input
            className="text-lg w-5/6  placeholder:text-[#25335C]  text-[#25335C] bg-transparent focus:no-underline pl-1 outline-none"
            type="email"
            placeholder="Digite seu email"
            name="email"
            title="e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-row justify-start items-center w-5/6 h-4/6 mb-3  border-b-2 border-white ">
          <GrLock size={30} color="#25335C" className="mx-4" />
          <input
            className="text-lg w-5/6  placeholder:text-[#25335C] text-[#25335C] focus:no-underline pl-1 outline-none bg-transparent"
            type="password"
            placeholder="Digite sua senha"
            name="password"
            title="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-row justify-start items-center w-5/6 h-4/6 mb-3  border-b-2 border-white ">
          <GrCycle size={30} color="#25335C" className="mx-4" />
          <input
            className="text-lg w-5/6  placeholder:text-[#25335C] text-[#25335C] focus:no-underline pl-1 outline-none bg-transparent"
            type="password"
            placeholder="Confirme sua senha"
            name="confirm-password"
            title="Confirme sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      </form>

      <button
        onClick={registerUser}
        className="text-white transition  ease-in-out delay-150 mt-10 w-5/6 h-16 bg-[#25335C] rounded-3xl text-2xl hover:-translate-y-1 hover:scale-110 hover:bg-cyan-400	 duration-300 hover:opacity-90 "
      >
        Registrar
      </button>
      <Toaster />
    </>
  );
};

export default FormRegister;
