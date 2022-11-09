import { LoginForm } from '@/Components/Form';
import Cookies, { CookieSetOptions } from 'universal-cookie';
import { Link } from 'react-router-dom';
import { LoginWrapper, LoginContainer, Logo } from './style';

const cookies = new Cookies();

export const setCookie = (name: string, value: string, option?: CookieSetOptions) =>
  cookies.set(name, value, { ...option });

export const getCookie = (name: string) => cookies.get(name);

export const removeCookie = (name: string) => cookies.remove(name);

const LoginPage = () => (
  <LoginWrapper>
    <LoginContainer>
      <Link to="/">
        <Logo src="/pictures/MIL.png" />
      </Link>
      <LoginForm />
    </LoginContainer>
  </LoginWrapper>
);

export default LoginPage;
