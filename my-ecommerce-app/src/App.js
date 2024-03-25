import './App.css';
import Homepage from './component/homepage.js';

function App() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Homepage />} />
        </Routes>
    </Router>
  )
}

export default App;
