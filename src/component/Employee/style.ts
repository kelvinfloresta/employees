import styled from "styled-components";

export const EmployeeContainer = styled.div`
  cursor: pointer;
  padding: 0 1rem;
  padding-bottom: 1rem;
  width: 200px;
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
      0 18px 36px -18px rgba(0, 0, 0, 0.3),
      0 -12px 36px -8px rgba(0, 0, 0, 0.025);
  }
`;

export const EmployeeAvatar = styled.img`
  border-radius: 50%;
  width: 96px;
`;

export const EmployeeDescription = styled.p`
  text-align: center;
  line-height: 1.5rem;
`;
