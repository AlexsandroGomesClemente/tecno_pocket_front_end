import Link from "next/link";
import {ChangePage} from '../../interfaces/session'

const ChangePage = (props: ChangePage) => {
  return (
    <span className="text-[#B91202] self-start text-sm  ml-12 mt-2">
      <Link href={`${props.direction}`}>{props.message}</Link>
    </span>
  );
};

export default ChangePage;
