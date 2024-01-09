import { useGetAllProductsQuery } from "../features/productsApi";

//COMPONENT

import Footer from "../layouts/Footer";
import Product from "../components/Product";
import {Loading} from "../components/Loading";

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();

  return (
    <div className="home-container">
        <Loading status={isLoading} error={error}>
            <h2>New Arrivals</h2>
            <div className="products">
                <Product products={data}/>
            </div>
        </Loading>
      <Footer />
    </div>
  );
};

export default Home;
