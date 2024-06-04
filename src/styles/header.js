import styled from 'styled-components';

export const HeaderStyle = styled.p`
  background: #072025;
  margin: 0;
  display: flex;
  justify-content: space-between;

`;

export const Items = styled.div`
display: flex;
justify-content: end;
`

export const Button = styled.button`
   border-radius: 2px;
   border: 1px solid #124f5c;
   background-color: #124f5c;
   color: #ffffff;
   font-size: px;
   cursor: pointer;
`;


export const Anchor = styled.h3`
color: #ffffff;
font-size: 16px;
text-decoration: none;
padding-right:20px;
margin-left: 2px;
cursor: pointer;
`;

export const AnchorLink = styled.a`
align-content: center;
color: inherit;
font-size: 18px;
font-weight: bold;
padding-right:20px;
margin-left: 2px;
cursor: pointer;
&:hover {
        color: red;
    }
`;