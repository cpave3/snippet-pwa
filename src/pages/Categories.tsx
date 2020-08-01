import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

interface Category {
    slug: string;
    label: string;
    color: string;
}

export const categories: Category[] = [
  { slug: "arts", label: "Arts X Culture", color: "#fed6bb" },
  { slug: "innovation", label: "Innovation X Design", color: "#fcdfea" },
  { slug: "business", label: "Business X Finance", color: "#fef9b9" },
  { slug: "world", label: "World X Politics", color: "#e4d1f1" },
  { slug: "sports", label: "Sports X Entertainment", color: "#daf0fd" },
  { slug: "quotes", label: "Quotes X Weird", color: "#d9fbdc" },
];

const Container = styled.div`
  background-color: #b6e1e7;
  height: 100vh;
`;

const Categoires = () => {
  return (
    <Container>
      <ul>
        {categories.map((category) => (
          <Link to={`/categories/${category.slug}`}>
            <li>{category.label}</li>
          </Link>
        ))}
      </ul>
    </Container>
  );
};

export default Categoires;
