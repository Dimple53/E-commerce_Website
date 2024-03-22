import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const { id } = useParams();

  return <p>This is a cartoio Page</p>;
};
export default ProductDetailsPage;
