import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const { id } = useParams()
  console.log(id);

  return <p>This is a cartoio Page</p>;
};
export default ProductDetailsPage;
