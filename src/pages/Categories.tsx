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
  padding: 35px;
  a:link,
  a:visited {
    text-decoration: none;
    color: black;
  }
`;

const Item = styled.li`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: bold;
  background: white;
  flex-direction: column;
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
`;

const Adnornment = styled.div`
  height: 10px;
  width: 100%;
  border-bottom: 1px dashed black;
`;

const Categoires = () => {
  return (
    <PageContainer>
      <ListContainer>
        {categories.map((category) => (
          <Link to={`/categories/${category.slug}`}>
            <Item>
              <span style={{ padding: 20 }}>{category.label}</span>
              <Adnornment style={{ background: category.color }} />
            </Item>
          </Link>
        ))}
      </ListContainer>
    </PageContainer>
  );
};

export default Categoires;
