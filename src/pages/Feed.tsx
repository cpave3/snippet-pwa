import React, { useEffect, useState } from "react";
import Swiper from "react-id-swiper";
import "swiper/swiper-bundle.css";
import styled from "styled-components";

import { categories } from "./Categories";

const Feed = () => {
  const Slide = styled.div`
    background-color: "red";
    height: 100vh;
  `;

  return (
    <Swiper direction="vertical" initialSlide={0}>
      {categories.map(({ slug, label, color }) => {
        return <Slide key={slug} style={{ background: color }}>
          {label}
        </Slide>;
      })}
    </Swiper>
  );
};

export default Feed;
