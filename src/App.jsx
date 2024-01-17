import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="app-container">
      <Navigation />
      <div className="main-content">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}


export default App

