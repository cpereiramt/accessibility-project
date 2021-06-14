import './App.css';
import ColorTheme from './styles/ColorTheme';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  border: ${props => `1px solid ${props.theme.backgroundColor}`};
  background-color: ${props => props.theme.backgroundColor};
  font-family: ${props => props.theme.fonts[0]};
  color: ${({theme: {color}}) => color};
`;

const Heading = styled.h1`
  font-size: ${({ isHeading, theme: { fontSizes } }) =>
    isHeading ? fontSizes.large : fontSizes.small};
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
  color: ${({theme: {color}}) => color};
`;

function App() {
  return (
    <ColorTheme colorSchema="333">
      <Container>
        <Heading isHeading={true}>Hello world!</Heading>
        <h2>By the power of styled-components!</h2>
      </Container>
    </ColorTheme>
  );
}

export default App;
