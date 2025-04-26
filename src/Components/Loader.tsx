import { PuffLoader } from "react-spinners";
import { LoaderProp } from "../Types/types";

export default function Loader({size}: LoaderProp ) {
  return (
    <PuffLoader color="green" size={size} />
  )
}
