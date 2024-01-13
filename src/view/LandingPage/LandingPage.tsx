import { useEffect, useReducer } from 'react';
import Categories from '../../components/Categories/Categories'
import './LandingPage.css'

// DATA
import { Productreducer,getProducts,getCategories } from '../../store/productStore'

const LandingPage = () => {
  interface AppState {
    product: Object; // Adjust the type according to the actual type of 'product'
    categories: Object; // Adjust the type according to the actual type of 'categories'
  }

  const [state, dispatch] = useReducer(Productreducer, { product: {}, categories: [] });

  const loadProduct = async () => {
    await getProducts(dispatch)
  }

  const ProductCategories = async () => {
    await getCategories(dispatch)
  }

  const getCategory = () => {
     console.log(state.categories)
  }
  
  useEffect(() => {
    loadProduct()
    ProductCategories()
  },[])

  return (
    <div className="landing-page-container">
        
          {/* CATEGORIES  */}
          <Categories categories={state.categories}/>
          
          <div className="main-products-header">
                  <span className="header-background"></span>
                  <h4>All Products</h4>
          </div>

          {/*  MAIN PRODUCT */}
          {/* <Product  :productItem="productItem"/> */}
    </div>
  );
};

export default LandingPage;