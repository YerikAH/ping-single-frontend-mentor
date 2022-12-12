import styled from "styled-components";
export const FooterComponent = styled.div`
  width: 100%;
  display: grid;
  max-width: 40.625rem;
  margin-top: 6rem;
  @media (min-height: 880px) {
    margin-top: auto;
  }
`;
export const FooterComponentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const FtBUl = styled.ul`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;
export const FtBulLi = styled.li`
  list-style: none;
`;
export const FtBulLiA = styled.a`
  width: 2rem;
  height: 2rem;
  display: flex;
  border: 0.2px solid var(--gray-light);
  border-radius: 100rem;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    border: none;
    background-color: var(--blue);
  }
  &:hover > svg > path {
    fill: var(--white);
  }
`;
export const FooterComponentText = styled.p`
  text-align: center;
  margin-top: 2rem;
  font-size: 0.8rem;
  color: var(--gray);
  margin-bottom: 2rem;
`;
