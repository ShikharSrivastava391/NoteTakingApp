import React from 'react';
import styled, { css } from 'styled-components';

interface DataListProps {
  items: string[];
  isLoading?: boolean;
  emptyMessage?: string;
  onItemClick?: (item: string, index: number) => void;
}

const Container = styled.div`
  border: 1px solid var(--NoteMakingApp-border);
  border-radius: 4px;
  background: var(--NoteMakingApp-secondary-background);
  max-height: 300px;
  overflow-y: auto;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li<{ clickable?: boolean }>`
  padding: 8px 12px;
  border-bottom: 1px solid var(--NoteMakingApp-border);
  font-size: 13px;
  color: var(--NoteMakingApp-foreground);
  
  &:last-child {
    border-bottom: none;
  }
  
  ${props => props.clickable && css`
    cursor: pointer;
    transition: background-color 0.15s ease;
    
    &:hover {
      background: var(--NoteMakingApp-hover-background);
    }
    
    &:active {
      background: var(--NoteMakingApp-active-background);
    }
  `}
`;

const EmptyState = styled.div`
  padding: 24px 16px;
  text-align: center;
  color: var(--NoteMakingApp-secondary-foreground);
  font-size: 13px;
  font-style: italic;
`;

const LoadingState = styled.div`
  padding: 24px 16px;
  text-align: center;
  color: var(--NoteMakingApp-secondary-foreground);
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const LoadingSpinner = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid var(--NoteMakingApp-border);
  border-top-color: var(--NoteMakingApp-accent-background);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const ItemIndex = styled.span`
  color: var(--NoteMakingApp-secondary-foreground);
  font-size: 11px;
  margin-right: 8px;
  opacity: 0.7;
`;

const ItemContent = styled.span`
  flex: 1;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const DataList: React.FC<DataListProps> = ({
  items,
  isLoading = false,
  emptyMessage = 'No items available',
  onItemClick
}) => {
  if (isLoading) {
    return (
      <Container>
        <LoadingState>
          <LoadingSpinner />
          Loading...
        </LoadingState>
      </Container>
    );
  }

  if (items.length === 0) {
    return (
      <Container>
        <EmptyState>{emptyMessage}</EmptyState>
      </Container>
    );
  }

  return (
    <Container>
      <List>
        {items.map((item, index) => (
          <ListItem
            key={index}
            clickable={!!onItemClick}
            onClick={() => onItemClick?.(item, index)}
          >
            <ItemContainer>
              <ItemIndex>#{index + 1}</ItemIndex>
              <ItemContent>{item}</ItemContent>
            </ItemContainer>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};