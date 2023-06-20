import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 344px;
  height: 300px;
  background: #151515;
  color: #fff;
  border-radius: 4px;
  padding: 1rem;
  margin: 1rem;

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

export const Title = styled.div`
  color: #fff;
`;

export const Image = styled.img`
  transform: scaleX(1);
  transition: all 0.2s linear;
  overflow: hidden;
  object-position: top center;
  height: 210px;
`;
