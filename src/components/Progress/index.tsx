import { useRef, useState } from 'react';
import styled from 'styled-components';


const Container = styled.div`
    width: 60%;
    margin: 24% auto;
    position: relative;
`
const Input = styled.input.attrs({ type: 'range' })`
    width: 100%;
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: 0;
    height: 12px;
    border-radius: 40px;
    background: ${(props) =>
            `linear-gradient(to right, #ff9800 0%, #ff9800 ${props.value}%, #fff ${props.value}%, #fff 100%);`};
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 24px;
    height: 24px;
    background-image: radial-gradient(circle, #f7f7fc 40%, #ff9800 45%);
    border-radius: 50%;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
  };
  ::-moz-range-thumb {
    width: 24px;
    height: 24px;
    -moz-appearance: none;
    background-image: radial-gradient(circle, #f7f7fc 40%, #ff9800 45%);
    border-radius: 50%;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
  }
`
export interface params {

}

const App = (params: params) => {

    const [value, setValue] = useState<string | 0>(0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
    }
    return (
        <Container>
            <span>{value}</span>
            <Input
                value={value}
                onChange={handleChange}

            />
        </Container>
    )
}

export default App
