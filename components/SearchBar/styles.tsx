import React from "react";
import styled from "styled-components";

export const Input = styled.input`
  width: 600px;
  height: 50px;
  padding: 1.5rem;
  font-size: 0.9rem;
  font-weight: bold;
  border: none;

  &:focus {
    border-color: none;
    box-shadow: none;
  }
`;

export const StyledInput = styled.div`
  &.inputWithIcon {
    position: relative;
  }

  .right-icon {
    background: none;
    border: none;
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;

    svg {
      fill: black;
      transition: 0.3s;
    }
  }
`;
