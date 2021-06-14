import './App.css';
import ColorTheme from './styles/ColorTheme';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  border: ${props => `1px solid ${props.theme.backgroundColor}`};
  background-color: ${props => props.theme.backgroundColor};
  color: ${({theme: {font}}) => font.color};
`;

const Heading = styled.h1`
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
  color: ${({theme: {font}}) => font.color};
`;

function App() {
  return (
    <ColorTheme colorSchema="dark">
      <Container>
        <Heading isHeading={true}>Hello world!</Heading>
        <h2>By the power of styled-components!</h2>
      </Container>
    </ColorTheme>
  );
}

export default App;
