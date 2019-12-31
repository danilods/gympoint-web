import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { signOut } from '../../store/modules/auth/actions';

import logo from '../../assets/header-logo.png';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GymPoint" />
          <strong>GYMPOINT</strong>

          <Link to="/students">ALUNOS</Link>
          <Link to="/dashboard">PLANOS</Link>
          <Link to="/dashboard">MATRÍCULAS</Link>
          <Link to="/dashboard">PEDIDOS DE AUXÍLIO</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <button type="button" onClick={handleSignOut}>
                Sair do sistema
              </button>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
