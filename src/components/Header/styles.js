import styled from 'styled-components';

export const Container = styled.div`
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const Logo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const LogoImg = styled.img`
    height: 30px;
    width: 30px;
    margin: 0 5px;
`;

export const LogoText = styled.h1`
    font-size: 20px;
    color: #ddd;
`;

export const Cart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;