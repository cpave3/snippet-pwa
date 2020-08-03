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
    overflow: hidden;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 100% !important;
  `;

  const initialSlide = categories.findIndex(
    (cat) => cat.slug === match?.params?.type
  );

  const Snip = styled.div`
    box-sizing: border-box;
    height: 50vh;
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 2.2rem;
    padding: 0 25px;
  `;

  const Sdiv = styled.div`
    /* height: 100vh; */
  `;

  const CategoryLabel = styled.h1`
    text-transform: uppercase;
    font-size: 0.8rem;
    padding: 10px 25px;
  `;

  const InternalWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

  const BottomBar = styled.div`
    background: black;
    height: 50px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    z-index: 1;
    width: 100%;
  `;

  const CounterContainer = styled.div`
    width: 50px;
    height: 75px;
    z-index: 2;
    position: absolute;
    top: 0;
    right: 50px;
    background: black;
    color: white;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    padding-bottom: 20px;
  `;

  return (
    <Sdiv>
      <CounterContainer>
        <span>14</span>
      </CounterContainer>
      <Swiper
        direction="vertical"
        initialSlide={initialSlide}
        containerClass="mySwiper"
      >
        {categories.map(({ slug, label, color }) => {
          const snippets = stories[slug];

          return (
            <Slide key={slug} style={{ background: color }}>
              <InternalWrapper>
                <CategoryLabel>{label}</CategoryLabel>
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
              </InternalWrapper>
            </Slide>
          );
        })}
      </Swiper>
      <BottomBar />
    </Sdiv>
  );
};

export default withRouter(Feed);
