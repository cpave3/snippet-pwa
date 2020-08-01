import React, { FunctionComponent } from "react";
import Swiper from "react-id-swiper";
import "swiper/swiper-bundle.css";
import styled from "styled-components";

import { categories } from "./Categories";
import { RouteComponentProps, withRouter, Link } from "react-router-dom";

import "./Feed.css";

import { stories } from "../assets/stories";

interface FeedRouterProps {
  type: string;
}

interface Props extends RouteComponentProps<FeedRouterProps> {}

const Feed: FunctionComponent<Props> = ({ match }) => {
  const Slide = styled.div`
    border: 1px solid purple;
    box-sizing: border-box;
    /* height: 100vh; */
    display: flex;
    justify-content: center;
    /* align-items: center; */
    flex-direction: column;
    height: 100% !important;
  `;

  const initialSlide = categories.findIndex(
    (cat) => cat.slug === match?.params?.type
  );

  const Snip = styled.div`
    border: 1px solid red;
    box-sizing: border-box;
    height: 50vh;
  `;

  const Sdiv = styled.div`
    /* height: 100vh; */
  `;

  return (
    <Sdiv>
      <Swiper
        direction="vertical"
        initialSlide={initialSlide}
        containerClass="mySwiper"
      >
        {categories.map(({ slug, label, color }) => {
          const snippets = stories[slug];

          return (
            <Slide key={slug} style={{ background: color }}>
              <h1>{label}</h1>
              <Swiper
                direction="horizontal"
                initialSlide={0}
                containerClass="swiper2"
              >
                {snippets.map((snippet) => (
                  <Snip>
                    <p>{snippet}</p>
                  </Snip>
                ))}
              </Swiper>
            </Slide>
          );
        })}
      </Swiper>
    </Sdiv>
  );
};

export default withRouter(Feed);
