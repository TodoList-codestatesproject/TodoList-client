import React from "react";
import styled from "styled-components";
import {
  faCaretDown,
  faEdit,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div``;

const Form = styled.form`
  display: flex;
`;

const CheckBox = styled.input.attrs({
  type: "checkbox",
})`
  margin: 0px 10px 0px 0px;
`;

const Title = styled.h3`
  width: 10%;
`;

const Text = styled.span`
  width: 30%;
`;

const Icon = styled.a`
  margin: 0px 0px 0px 15px;
`;

const Todo = () => (
  <Container>
    <Form>
      <CheckBox></CheckBox>
      <Title>title</Title>
      <Text>text....</Text>
      <Icon>
        <FontAwesomeIcon icon={faCaretDown} />
      </Icon>
      <Icon>
        <FontAwesomeIcon icon={faEdit} />
      </Icon>
      <Icon>
        <FontAwesomeIcon icon={faTrashAlt} />
      </Icon>
    </Form>
  </Container>
);

export default Todo;
