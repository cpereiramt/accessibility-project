import styled from 'styled-components';
import { useTheme } from 'styled-components';
import SimpleForm from './components/ExampleAccessibilityTestComponent/index'

const Container = styled.div`
  width: 100%;
  border: ${props => `1px solid ${props.theme.backgroundColor}`};
  background-color: ${props => props.theme.backgroundColor};
  color: ${({theme: font}) => font.color};
`;

const Heading = styled.h1`
  background-color: ${({ theme:   { backgroundColor } } ) => backgroundColor};
  color: ${({theme:    {font}}) => font.color};
`;

function App() {
  const themeObject = useTheme();

  return (
    <Container>
       <SimpleForm />
        <Heading isHeading={true}>Hello world!</Heading>
        <h2 style={{color: themeObject.font.color}}>By the power of styled-components!</h2>
        {console.log("imprimindo o objeto theme style selecionado.", themeObject)}
      </Container> 
  );
}

export default App;
