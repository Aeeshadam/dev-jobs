import styled from "styled-components";

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5rem auto;
`;

const MessageH2 = styled.h2`
  text-align: center;
`;
const Message = ({ message }) => {
  return (
    <MessageContainer>
      <MessageH2>{message}</MessageH2>
    </MessageContainer>
  );
};

export default Message;
