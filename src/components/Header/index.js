import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Badge } from '@material-ui/core';
import { MdShoppingCart } from 'react-icons/md';

import { Container, Logo, LogoImg, LogoText, Cart } from './styles';

import logo from '../../assets/images/logo.png';

export default function Header() {
    const itemCount = useSelector(state => state.cart.length);

    return (
      <Container>
        <div></div>
        <Link to="/">
          <Logo>
            <LogoImg src={logo} />
            <LogoText>Einkaufen</LogoText>
          </Logo>
        </Link>
        <Cart>
          <Link to="/cart">
            <Badge badgeContent={itemCount} color="primary">
              <MdShoppingCart color="#ddd" size={22} />
            </Badge>
          </Link>
        </Cart>
      </Container>
    )
}