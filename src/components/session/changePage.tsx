import Link from "next/link";
import {ChangePage} from '../../interfaces/session'

const ChangePage = (props: ChangePage) => {
  return (
    <span className="text-[#25335C] self-start text-sm  ml-12 mt-2 mb-6">
      <Link href={`${props.direction}`}>{props.message}</Link>
    </span>
  );
};

export default ChangePage;
