import styled from 'styled-components';
import theme from '@/Styles/theme';

export const SubMenuListContainer = styled.div`
  display: block;
  width: 100%;
  height: 15.5rem;

  border-radius: 0.625rem;
  border: 1px solid ${theme.color.ajouSky};
  ${theme.common.shadowDefault};

  padding: 2rem;

  h3 {
    text-align: left;
    font-weight: 600;
    font-size: 1.4rem;
  }

  @media ${theme.layout.mobile} {
    height: 14rem;
  }
`;

export const TitleContainer = styled.div`
  ${theme.common.flexCenter}
  justify-content : space-between;
  padding-bottom: 1rem;
`;

export const ListContainer = styled.ul``;

export const List = styled.li`
  ${theme.common.flexCenter}
  justify-content: space-between;
  padding: 0.5rem 0;

  gap: 1.5rem;

  &:last-of-type {
    padding-bottom: 0;
  }
`;

export const ListTitle = styled.h4`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const ListElement = styled.p`
  display: flex;
  gap: 0.25rem;
  align-items: center;

  font-weight: 300;
  font-size: 0.875rem;
  white-space: nowrap;
`;

export const IsEmpty = styled.div``;
