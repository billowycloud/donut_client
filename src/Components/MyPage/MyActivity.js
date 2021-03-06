import React from 'react';
import styled from 'styled-components';
import MyActivityList from './MyActivityList';

const Content = styled.div`
  padding: 3rem 4rem;
  background: #f4f2ed;
  border-radius: 9px;
  flex-grow: 2;
  border: 2px solid rgba(0, 0, 0, 0.4);
  h2 {
    font-size: 1.3rem;
    margin-right: 2rem;
  }
  span {
    margin-right: 2rem;
  }
`;

const MyActivity = () => {
  return (
    <Content>
      <MyActivityList />
      <MyActivityList />
      <MyActivityList />
      <MyActivityList last />
    </Content>
  );
};

export default MyActivity;
