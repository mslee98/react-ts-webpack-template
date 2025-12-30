import Home from '@/pages/Home';
import './style.css';

const App = () => {
    console.log(process.env.NODE_ENV);

    return <Home/>
}

export default App;