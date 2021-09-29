import React, { Component } from "react";

import styles from "../../stylesheets/style.scss";
import Section from "./Section";
import verticalLine from "../../assets/images/vertical-lines.png";
import vintage from "../../assets/images/vintage.png";
import saving from '../../assets/images/saving.png';
import delivery from '../../assets/images/delivery.png';
import resaturant from '../../assets/images/food-and-restaurant.png';
import cheffBook from '../../assets/images/cheffBook.png';

const contentData = [
  {
    title: "Sobre Nosotros",
    sizeHeading: 1,
    backgroundColor: styles.lightGray,
    text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quos, optio minus odio accusantium sunt, culpa asperiores laudantium corrupti facilis ratione alias, officia repellat perferendis? Quod laudantium nesciunt architecto nobis?",
  },
  {
    subContent: [
      {
        image: saving,
        title: 'pagas en casa',
        sizeHeading: 2,
        text:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quos, optio minus odio accusantium sunt",
      },
      {
        image: delivery,
        title: 'Entrega gratis',
        sizeHeading: 2,
        text:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quos, optio minus odio accusantium sunt",
      },
      {
        image: resaturant,
        title: 'Productos frescos',
        sizeHeading: 2,
        text:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quos, optio minus odio accusantium sunt",
      },
      {
        image: cheffBook,
        title: 'Recetas de cocina',
        sizeHeading: 2,
        text:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quos, optio minus odio accusantium sunt",
      },
    ],
  },
  {
    title: "Buscar es mas facil",
    sizeHeading: 1,
    backgroundColor: styles.lightGray,
    subContent: [
      {
        image: verticalLine,
        text:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quos, optio minus odio accusantium sunt",
      },
      {
        image: vintage,
        text:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quos, optio minus odio accusantium sunt",
      },
    ],
  },
];

const renderContetData = () =>
  contentData.map((content, index) => (
    <Section content={content} key={index} id={index}/>
  ));

class Content extends Component {
  render() {
    return <div className="main-content">{renderContetData()}</div>;
  }
}

export default Content;
