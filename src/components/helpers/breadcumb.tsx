import { BreadCumb as BreadCumbInterface } from "@/src/interfaces/main";


const BreadCumb = (props: BreadCumbInterface) => {
  return (
    <div className="flex justify-between items-center text-xl tracking-wide mb-10">
      <h4>{props.bread}</h4>
      <h4>{props.router}</h4>
    </div>
  );
};

export default BreadCumb;
