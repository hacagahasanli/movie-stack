import React, { useState } from "react"
import styled from "styled-components"
import { SearchInput } from "./SearchInput"

export const Search = () => {
  const [type, setType] = useState(false)
  return (
    <Container>
      <CheckboxContainer>
        <p>Search on <span>change</span></p>
        <ToggleInput id="toggle" type='checkbox' onClick={() => setType(!type)} />
        <ToggleLabel htmlFor="toggle" />
      </CheckboxContainer>
      <SearchInput {...{ type }} />
    </Container>
  )
}

const CheckboxContainer = styled.div`
  width: 205px;
  height: 42px;
  margin: auto;
  margin-left:0.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
  p{
    max-width: 80px;
    word-wrap: break-word;
    color:white;
    font-weight: 700;
  }
`
const ToggleLabel = styled.label`
  width: 75px;
  height: 42px;
  background: #ccc;
  position: relative;
  display: inline-block;
  border-radius: 46px;
  transition: 0.4s;
  box-sizing: border-box;
  &:after {
    content: '';
    position: absolute;
    width: 42px;
    height: 42px;
    border-radius: 100%;
    left: 0;
    top: 0;
    z-index: 2;
    background: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    transition: 0.4s;
  }
`
const ToggleInput = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  cursor: pointer;

  &:checked + ${ToggleLabel}{
    background-color: #0f0f0f;
    &:after{
      left: 40px;
    }
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
