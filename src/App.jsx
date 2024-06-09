import 'bootstrap/dist/css/bootstrap.min.css';
import { Testimonials, CaseStudies, Contact, Footer, Hero, Process, Services, Team, CTA } from './container';
import { SignInThree } from './container/Signin';
import { SignUpThree } from './container/Signup';
import { FilterThree } from './container/FindCandidate';
import { Menu } from './components';
import { Routes, Route } from 'react-router-dom';




const App = () => (
  <div className="container">
    <Routes>
      <Route path="/" element={
        <>  
          <Menu/>
          <Hero />
          <Services />
          <CTA />
          <CaseStudies />
          <Process />
          <Team />
          <Testimonials />
          <Contact />
          <Footer />
        </>
      } />

      <Route path="/signin" element={<SignInThree />} />
      <Route path="/signup" element={<SignUpThree />} />
      <Route path="/filtercandidate" element={<FilterThree/>}/>

    </Routes>
  </div>
);

export default App;
