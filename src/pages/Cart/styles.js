import styled from 'styled-components';

export const Container = styled.div`
    margin: 10px 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    border-radius: 20px;
    width: 80%;
    margin: 0 40px;
    background: #ddd;
`;

export const ItemsList = styled.div`
    padding: 20px;
`;

export const NoItemsDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const NoItems = styled.p`
    font-size: 16px;
    color: #333;
`;

export const Item = styled.div`
    border: 1px #888 solid;
    border-radius: 4px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const ItemImage = styled.img`
    width: 80px;
    border-radius: 4px;
`;

export const ItemTitle = styled.h1`
    font-size: 18px;
    color: #333
`;

export const ActionButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
`;

export const Quantity = styled.input`
    text-align: center;
    width: 40px;
`;

export const Controls = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin: 5px 20px;
`;

export const PlaceOrderButton = styled.button`
    margin: 5px 0;
    padding: 10px 20px;
    width: 200px;
    border-radius: 4px;
    background: #2418a8;
    font-weight: bold;
    color: #DDD;

    &:hover {
      opacity: 0.8;
    }
`;