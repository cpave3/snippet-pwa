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

const PageContainer = styled.div`
  background-color: #b6e1e7;
  height: 100vh;
`;

const ListContainer = styled.ul`
  padding: 10px;
`;

const Item = styled.li`
  border: 1px solid blue;
  padding: 10px 0;
  margin: 20px 0;
`;

const Categoires = () => {
  return (
    <PageContainer>
      <ListContainer>
        {categories.map((category) => (
          <Link to={`/categories/${category.slug}`}>
            <Item>{category.label}</Item>
          </Link>
        ))}
      </ListContainer>
    </PageContainer>
  );
};

export default Categoires;
