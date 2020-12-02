import styled from 'styled-components';

export const Container = styled.div`
    margin: 10px 60px;
`;

export const List = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    max-width: 270px;
    flex: 1;
    border: 1px solid #666;
    border-radius: 8px;
    padding: 15px;
    margin: 10px;
`;

export const ItemImage = styled.img`
    width: 220px;
    height: 220px;
    border-radius: 20px;
    margin: 5px;
`;

export const ItemInfo = styled.div`
    padding: 5px;
`;

export const ItemTitle = styled.h1`
    font-size: 18px;
`;

export const ItemDescription = styled.p`
    font-size: 14px;
`;

export const ItemPrice = styled.p`
    text-align: right;
    font-weight: bold;
    font-size: 16px;
    padding-right: 15px;
`;

export const AddToCartButton = styled.button`
    margin: 5px 0;
    padding: 10px 20px;
    width: 200px;
    border-radius: 4px;
    background: #ddd;
    font-weight: bold;
    color: #111;

    &:hover {
      opacity: 0.8;
    }
`;

