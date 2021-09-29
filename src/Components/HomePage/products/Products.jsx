import React from "react";

import { getProductCategoryInfo } from "../../../utils/tools";
import styles from "../../../stylesheets/style.scss";

import { Heading } from "../../../sharedUI/TextHeading";
import { Paragraph } from "../../../sharedUI/Paragraph";
import Counter from "../../Counter/Counter";

const Products = ({ product, addProductToBasket, addChangeAmountProductToBasket }) => (
  <React.Fragment key={product.id}>
    <Heading size={24} level={2}>
      {getProductCategoryInfo(product)}
    </Heading>
    <Paragraph>Esto es lo que encontramos para vos</Paragraph>
    <div className="products__container">
      <ul>
        {product.map((item) => (
          <ProductItem
            item={item}
            key={item.id}
            addProductToBasket={addProductToBasket}
            addChangeAmountProductToBasket={addChangeAmountProductToBasket}
          />
        ))}
      </ul>
    </div>
  </React.Fragment>
);

const ProductItem = ({ item, addProductToBasket, addChangeAmountProductToBasket }) => (
  <li className="product__container">
    <div className="product__info" onClick={() => addProductToBasket(item)}>
      <ProductPrice item={item} />
      <ProductDescription item={item} />
    </div>
    <ProductBuy item={item} addProductToBasket={addChangeAmountProductToBasket} />
  </li>
);

const ProductPrice = ({ item }) => (
  <div className="product__price">
    <Paragraph
      color={styles.priceColor}
      size={20}
      marginRight={5}
    >{`$${item.currentPrice}`}</Paragraph>
    {item.normalPrice && (
      <Paragraph
        color={styles.disabledColor}
        size={12}
        decoration={"line-through"}
      >{`$${item.normalPrice}`}</Paragraph>
    )}
  </div>
);

const ProductDescription = ({ item }) => (
  <div className="product__description">
    {item.name && (
      <Paragraph color={styles.priceName} align={"left"}>
        {item.name}
      </Paragraph>
    )}
    {item.refPrice && (
      <Paragraph color={styles.priceRef}>{item.refPrice}</Paragraph>
    )}
  </div>
);

const ProductBuy = ({ item, addProductToBasket }) => {
  const showStockParagraph = item.stock === 0 || item.stock === 1;

  return (
    <div className="product__buy">
      {showStockParagraph && (
        <Paragraph align={"right"} className={item.stock > 0 ? "" : "error"}>
          {item.stock > 0 ? "Comprar" : "Sin stock"}
        </Paragraph>
      )}
      {!showStockParagraph && (
        <Counter product={item} key={item.id} addProductToBasket={addProductToBasket}/>
      )}
    </div>
  );
};

export default Products;
