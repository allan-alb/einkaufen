import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import { Container } from './styles';

function Home() {
  return (
    <Container>
      <h1>Olá, seja bem vindo</h1>
      <p>Clique abaixo para navegar pelo nosso catálogo de produtos</p>
      <Link to="/products">
        Ir para catálogo
      </Link>
    </Container>
    )
}

export default Home;