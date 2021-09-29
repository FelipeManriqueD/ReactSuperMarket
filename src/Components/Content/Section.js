import React from "react";
import { Heading } from "../../sharedUI/TextHeading";
import { Paragraph } from "../../sharedUI/Paragraph";

const Section = ({ content, id }) => {
  const { title, sizeHeading, backgroundColor, text, subContent } = content;
  return (
    <div
      className={`section item-${id}`}
      style={{ backgroundColor: backgroundColor ? backgroundColor : "" }}
    >
      <div className="ui container section__content">
        {(title || sizeHeading) && (
          <SectionTitle title={title} sizeHeading={sizeHeading} />
        )}
        {text && <SectionParagraph text={text} />}
        {subContent && <SectionDivided sections={subContent} />}
      </div>
    </div>
  );
};

const SectionTitle = ({ title, sizeHeading }) => (
  <Heading level={sizeHeading}>{title}</Heading>
);

const SectionParagraph = ({ text }) => <Paragraph>{text}</Paragraph>;

const SectionDivided = ({ sections }) => {
  return (
    <div className="ui equal width grid">
      {sections.map(({ image, text, title, sizeHeading }, index) => (
        <div className="column" key={index}>
          {image && (
            <img
              className="ui centered tiny image"
              src={image}
              alt="home desc"
            />
          )}
          {(title || sizeHeading) && (
            <SectionTitle title={title.toUpperCase()} sizeHeading={sizeHeading} />
          )}
          {text && <SectionParagraph text={text} />}
        </div>
      ))}
    </div>
  );
};

export default Section;
