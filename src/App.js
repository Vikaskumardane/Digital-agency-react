
import './styles/App.scss';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Services from './components/Services.jsx';



import './styles/header.scss';
import './styles/home.scss';
import './styles/footer.scss';
import './styles/contact.scss';
import './styles/services.scss';
import './styles/mediaquery.scss';





function App() {
  return (
    <div >
      <Router>
      
      <Header />
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/contact' element={<Contact />} />
  <Route path='/services' element={<Services />} />


</Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
