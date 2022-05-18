import { ListData } from './components/ListData';
import './App.css';

function App() {
  const arrMobile = ["Samsung", "HTC", "Micromax", "Apple"]
  const OsList = ["Android", "Blackberry", "iPhone", "Windows Phone"]
  return (
    <>
    <div>
  <h1>React Mobile OS</h1>

  <ListData headerTitle = "Mobile Operating System" dataList={OsList} />
   <ListData headerTitle = "Mobile Manufactures" dataList={arrMobile} applyCss ='true'  />
    </div>
    </>

  );
}

export default App;
