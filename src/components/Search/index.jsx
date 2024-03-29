import React, { useState } from 'react';
import SearchInput from './SearchInput';
import styled from 'styled-components';

export const Search = () => {
  const [type, setType] = useState(true);
  return (
    <Container>
      <CheckboxContainer>
        <ToggleContainer>
          <p>
            Search on <span>change</span>
          </p>
          <ToggleInput
            id='toggle'
            type='checkbox'
            onClick={() => setType(!type)}
          />
          <ToggleLabel htmlFor='toggle' />
        </ToggleContainer>
      </CheckboxContainer>
      <SearchInput {...{ type }} />
    </Container>
  );
};

const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CheckboxContainer = styled.div`
  width: 205px;
  height: 42px;
  margin: auto;
  margin-left: 0.1rem;
  display: flex;
  justify-content: space;
  align-items: center;

  p {
    max-width: 80px;
    word-wrap: break-word;
    color: white;
    font-weight: 700;

    span {
      letter-spacing: 3.8px;
    }
  }

  @media screen and (max-width: 768px) {
    width: 75px;

    p {
      max-width: 70px;
      font-size: 12px;
      margin-bottom: 0.5rem;
    }
  }
`;
const ToggleLabel = styled.label`
  width: 75px;
  height: 38px;
  background: #ccc;
  position: relative;
  display: inline-block;
  border-radius: 46px;
  transition: 0.4s;
  box-sizing: border-box;
  top: 0.2rem;

  &:after {
    content: '';
    position: absolute;
    width: 38px;
    height: 38px;
    border-radius: 100%;
    left: 0;
    top: 0;
    z-index: 2;
    background: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    transition: 0.4s;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    width: 55px;
    height: 28px;

    &:after {
      width: 28px;
      height: 28px;
    }
  }
`;
const ToggleInput = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  cursor: pointer;

  :not(&:checked) + ${ToggleLabel} {
    background-color: #0f0f0f;
    &:after {
      left: 40px;
    }
  }

  @media screen and (max-width: 768px) {
    :not(&:checked) + ${ToggleLabel} {
      background-color: #0f0f0f;
      &:after {
        left: 30px;
      }
    }
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
