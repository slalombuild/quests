import Bookshelf from './Components/Bookshelf';
import style from  './assets/style/stylesheet.module.css';

const App = () => {
  
  return (
    <div className={style.app_container}>
     <Bookshelf/>
    </div>
  )
}

export default App;
