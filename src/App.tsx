import * as C from './App.styles';

import background from './assets/images/bg-desktop-dark.jpg';

export default function App(){
  return(
    <C.Container>
      <img src={background} alt="background-image" />
    </C.Container>
  )
}
