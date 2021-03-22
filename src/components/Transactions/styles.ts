import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      text-align: center;
      background: var(--shape);
      color: var(--text-body);
      // border-radius: 0.25rem;

      &:first-child {
        color: var(--text-title);
        border-bottom-left-radius: 0.37rem;
        border-top-left-radius: 0.37rem;
      }
      &:last-child {
        border-bottom-right-radius: 0.37rem;
        border-top-right-radius: 0.37rem;
      }

      &.deposit {
        color: var(--green);
      }
      &.withdraw {
        color: var(--red);
      }
    }
  }
`;
