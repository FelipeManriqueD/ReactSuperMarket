import React from "react";

import Input from "../../../sharedUI/Input";
import { removeAccents } from "../../../utils/tools";
import { Heading } from "../../../sharedUI/TextHeading";
import { Paragraph } from "../../../sharedUI/Paragraph";

const HomeNav = ({ productGroups, basket }) => (
  <>
    <NavMenu basket={basket} />
    <NavCategories productGroups={productGroups} />
  </>
);

const NavMenu = ({ basket }) => {
  return (
    <div className="home__nav">
      <div className="home__nav-leftNav">
        <div className="home__menu">
          <MenuCollapsible position={"left"} />
        </div>
        <div className="home__userName">Hola user</div>
      </div>
      <div className="home__nav-rightNav">
        <div className="home__search">
          <Input
            inputType={"text"}
            className="inputSearch"
            placeholder="Buscar"
          />
        </div>
        <div className="home__shop home__menu">
          <MenuCollapsible position={"right"} items={basket} />
        </div>
      </div>
    </div>
  );
};

const NavCategories = ({ productGroups }) => {
  return (
    <div className="home__category">
      <Heading level={1}>Haz tu compra</Heading>
      <Paragraph>Selecciona tus productos</Paragraph>
      <div className="products">
        <ProductGroups groups={productGroups} />
      </div>
    </div>
  );
};

const MenuCollapsible = ({ position, items }) => (
  <ul>
    <input type="checkbox" id={`collapse-${position}`} />
    <label htmlFor={`collapse-${position}`} className={`label label-${position}`}></label>
    <div className={`list list__${position}`}>
      {items &&
        items.map((item) => {
          return <li key={item.id}>{item.name}-{item.amount}</li>;
        })}
    </div>
  </ul>
);

const ProductGroups = ({ groups }) =>
  groups.map((group) => {
    const activeList = removeAccents(group.name) === "lacteos" ? "active" : "";
    return (
      <div key={group.id} className={`list ${activeList}`}>
        <div className="list__image_container">
          <img
            src={`/images/productGroup/${removeAccents(group.name)}.png`}
            alt={group.name}
            className="list__image"
          />
        </div>
        <Paragraph size={18} className={`${activeList}`}>
          {group.name}
        </Paragraph>
      </div>
    );
  });

export default HomeNav;
