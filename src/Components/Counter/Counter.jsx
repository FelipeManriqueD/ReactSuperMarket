import React from "react";

import Input from "../../sharedUI/Input";
import { Button } from "../../sharedUI/Button";

const Counter = ({ product, addProductToBasket }) => {
  const { stock, min, inc } = product;
  const [value, SetValue] = React.useState(product.min);
  const [disabledIncrease, SetDisabledIncrease] = React.useState(false);
  const [disabledDecrease, SetDisabledDecrease] = React.useState(false);

  React.useEffect(() => {
    SetDisabledDecrease(value === min);
    SetDisabledIncrease(value === stock);
    if (value !== min) {
      addProductToBasket(value);
    }
  }, [value, min, stock, addProductToBasket, product]);

  const increaseItem = () => {
    if (value < stock) {
      SetValue((prevState) => {
        return prevState + inc;
      });
    }
  };

  const decreaseItem = () => {
    if (value !== min) {
      SetValue((prevState) => prevState - 1);
    }
  };

  const onChangeValue = () => {
    console.log(value);
  };

  return (
    <div className="counter">
      <Button
        className={`counter__button-${
          disabledDecrease ? "disabled" : "enabled"
        }`}
        clickHandler={decreaseItem}
      >
        -
      </Button>
      <Input
        className="counter__input"
        value={value}
        type="number"
        handleChange={onChangeValue}
      />
      <Button
        className={`counter__button-${
          disabledIncrease ? "disabled" : "enabled"
        }`}
        clickHandler={increaseItem}
      >
        +
      </Button>
    </div>
  );
};

export default Counter;
