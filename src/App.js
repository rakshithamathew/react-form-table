
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './Components/styles.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Student from './Components/Student'
import Contact from './Components/Contact'
import AddStudent from './Components/AddStudent'
import { StudentData } from './Components/StudentDataTable'
import Edit from './Components/Edit'
import NoMatch from './Components/NoMatch'

function App() {
  return (
    <StudentData>
      <div >
        <Router>
          <Navbar/>
          <Routes>
            <Route path='*' element={<NoMatch/>} />
            <Route path='/' element={<Home />} />
            <Route path='/student' element={<Student />} />
            <Route path='/student/addStudent' element={<AddStudent />} />
            <Route path='/student/edit/:ID' element={<Edit />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </StudentData>
  );
}

export default App;