import React from "react";
import { connect } from "react-redux";

import {
  fetchGroupsAndCategories,
  addProductToBasket,
  addChangeAmountProductToBasket,
} from "../../actions";
import Products from "./products/Products";
import HomeNav from "./HomeNav/HomeNav";

const Home = (props) => {
  const {
    fetchGroupsAndCategories,
    products,
    addProductToBasket,
    addChangeAmountProductToBasket,
  } = props;
  const { groups, categories, productsByCategory } = products;

  React.useMemo(() => {
    fetchGroupsAndCategories();
  }, [fetchGroupsAndCategories]);

  return (
    <>
      <div className="content__box home__header">
        <HomeNav
          productGroups={groups}
          basket={props.products.productsToBasket}
        />
      </div>
      <div className="home__products">
        {productsByCategory &&
          productsByCategory.map(({ productCategory }, index) => {
            return (
              productCategory && (
                <Products
                  product={productCategory}
                  key={index}
                  addProductToBasket={addProductToBasket}
                  addChangeAmountProductToBasket={
                    addChangeAmountProductToBasket
                  }
                />
              )
            );
          })}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const connectedHomePage = connect(mapStateToProps, {
  fetchGroupsAndCategories,
  addProductToBasket,
  addChangeAmountProductToBasket,
})(Home);

export { connectedHomePage as Home };
