import styled from "styled-components";
export const HeaderComponent = styled.div`
  width: 100%;
  max-width: 40.625rem;
`;
export const HeaderNavegator = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  padding-top: 6rem;
`;
export const NavegatorLogo = styled.img`
  width: 4rem;
  @media (min-width: 600px) {
    width: auto;
  }
`;
export const NavegatorBox = styled.div`
  display: flex;
  margin-top: 3rem;
`;
export const NavegatorTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  color: var(--gray);
  text-align: center;
  letter-spacing: -0.063rem;
  @media (min-width: 600px) {
    font-size: 3rem;
  }
`;
export const NavegatorTitleTwo = styled.span`
  font-weight: 700;
  color: var(--very-dark-blue);
  font-size: 1.5rem;
  letter-spacing: -0.063rem;
  @media (min-width: 600px) {
    font-size: 3rem;
  }
`;
export const NavegatorText = styled.p`
  font-size: 0.8rem;
  margin-top: 1.5rem;
  color: var(--very-dark-blue);
  text-align: center;
  font-weight: 300;
  @media (min-width: 600px) {
    font-size: 1.25rem;
    margin-top: 1rem;
  }
`;
