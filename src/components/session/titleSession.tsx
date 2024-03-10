import { Title } from "@/src/interfaces/session";

const TitleSession = (props: Title) => {
  return (
    <h1 className=" bg-[#B91202]  w-full h-20 rounded-t-2xl text-white text-4xl text-center pt-5 tracking-wide">
      {props.title}
    </h1>
  );
};

export default TitleSession;
