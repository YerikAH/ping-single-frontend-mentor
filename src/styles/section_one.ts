import styled from "styled-components";
export const SectionOneComponent = styled.div``;
export const SoForm = styled.form`
  width: 100%;
  display: grid;
  @media (min-width: 720px) {
    grid-template-columns: 65% 30%;
    justify-content: space-between;
  }
`;
export const SoFormInputBox = styled.div``;
export const SoFormInputTex = styled.input`
  border-radius: 100rem;
  border: 1px solid var(--pale-blue);
  color: var(--very-dark-blue);
  background-color: transparent;
  font-size: 1rem;
  padding: 1rem 2rem;
  width: 100%;
  &::placeholder {
    color: var(--pale-blue);
  }
`;
export const SoFormInputError = styled.span`
  font-size: 0.8rem;
  color: var(--light-red);
  font-style: italic;
  display: block;
  margin-top: 0.5rem;
  padding: 0 2rem;
  text-align: center;
  @media (min-width: 720px) {
    text-align: left;
  }
`;
export const SoFormInputSubmit = styled.input`
  background-color: var(--blue);
  color: var(--white);
  border-radius: 100rem;
  padding: 1rem 2rem;
  margin-top: 1rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: var(--blue-hover);
  }
  @media (min-width: 720px) {
    margin-top: 0rem;
    height: 3.313rem;
  }
  /* box shadow */
`;
