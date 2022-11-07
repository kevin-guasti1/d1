import Input from './componentes/Input';
import Button from './componentes/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';



const App = () => {
  const [currentNumber, setCurrentNumber] = useState(0); 
  
  const [firstNumber, setFirstNumber] = useState(0);

  const [operation, setOperation] = useState('')

  

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }
  
  const handleAddNumer = (number) => {
    setCurrentNumber (prev => `${prev ==='0'?'':prev}${number}`) }
    
    const handleSumNumber= () => {
      if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0');
        setOperation('+')
      } else {
        const sum = Number(firstNumber) + Number(currentNumber);
        setCurrentNumber(String(sum));
        setOperation('')
      }
    }

    const handleMinusNumber= () => {
      if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0');
        setOperation('-')
      } else {
        const sum = Number(firstNumber) - Number(currentNumber);
        setCurrentNumber(String(sum));
        setOperation('')
      }
    }

    const handleDividiNumber= () =>{
      if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('/')
      }else {
        const sum = Number(firstNumber) / Number(currentNumber);
        setCurrentNumber(String(sum));
        setOperation('')
      }
    }
    const handleMultipleNumber= () =>{
      if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('*')
      }else {
        const sum = Number(firstNumber) * Number(currentNumber);
        setCurrentNumber(String(sum));
        console.log(sum)
        setOperation('')
      }
    }

    const handleEquals= () => {
      if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
        switch(operation){
          case '/':
            handleDividiNumber();
            break;
          case '+':
            handleSumNumber();
            break
            case '-':
              handleMinusNumber();
              break
            case '*':
              handleMultipleNumber();
              break
            default:
              break;
        }
      }}
    
    

    return (
    <Container>
      <Content>
      <Input value={currentNumber}/>
      <Row>
        <Button label= 'CC' onClick={handleOnClear}/> 
        <Button label= 'X'onClick={handleMultipleNumber}/>
        <Button label= '/'onClick={handleDividiNumber}/>
        <Button label= '.'onClick={() => handleAddNumer('.')}/>
      </Row>
      <Row>
        <Button label= '7'onClick={() => handleAddNumer('7')}/>
        <Button label= '8'onClick={() => handleAddNumer('8')}/>
        <Button label= '9'onClick={() => handleAddNumer('9')}/>
        <Button label= '-'onClick={handleMinusNumber} />
      </Row>
      <Row>
        <Button label= '4'onClick={() => handleAddNumer('4')}/>
        <Button label= '5'onClick={() => handleAddNumer('5')}/>
        <Button label= '6'onClick={() => handleAddNumer('6')}/>
        <Button label= '+'onClick={handleSumNumber}/>
      </Row>
      <Row>
        <Button label= '1'onClick={() => handleAddNumer('1')}/>
        <Button label= '2'onClick={() => handleAddNumer('2')}/>
        <Button label= '3'onClick={() => handleAddNumer('3')}/>
        <Button label= '='onClick={handleEquals}/>
      </Row>
      </Content>
    </Container>
  );
}

export default App;
