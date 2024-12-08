import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css'
import "./App.css";
import img from './img/Terakan_img.svg'

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function App() {
  return (
    <Container className='con'>
      <Row>
        <Col xs={12} sm={5}>
      
      <div className='box-1'>
          <Row>
            <div className='header-box'>
              <h1>Terakan</h1>
              <br></br>
              <h2>Pumpoem</h2>
              
              <p style={{fontSize : "24px",textTransform:"uppercase",fontWeight:"600"}}>
                frontend developer
              </p>
              <Row className='contact' style={{width: "100%"}}>
                <Col className='phone'  sm={12}>
                  
                    <div className='icon'>
                      <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div className='data'>
                      <div className='Title'>
                        Phone :
                      </div>
                      095 - 876 - 2316
                    </div>
                </Col>
                <Col className='phone'  sm={12}>
                <div className='icon'>
                <FontAwesomeIcon icon={faEnvelope} />
                      </div>
                      <div className='data'>
                        <div className='Title'>
                          Mail :
                        </div>
                        pumpoem_t@silpakorn.edu
                      </div>
                </Col>
                <Col className='phone' sm={12}>
                <div className='icon'>
                <FontAwesomeIcon icon={faLocationDot} />
                      </div>
                      <div className='data'>
                        <div className='Title'>
                         Address:
                        </div>
                        37/48 soi 21 Hua Hin, Hua Hin, Prachuap Khiri Khan , 77110
                      </div>
                </Col>
              </Row>
            </div>

          </Row>

          <div className='content-skill'>
          <Row className='content-left'>
            <div className='education'>
              <h2>
                Education
              </h2>
              <h4>
              BACHELOR OF SCIENCE IN DIGITAL TECHNOLOGY FOR BUSINESS
              </h4>
              <h5>
              Silpakorn University
              </h5>
            </div>
          </Row>

          <Row className='content-left'>
            <div className='skills'>
              <h2>
                Skills
              </h2>

              <h5>
                PROGRAMING LANGUAGE
              </h5>
              <p>
                HTML CSS Python
              </p>
              <p>
                Javascript C# JAVA
              </p>

              <h5>
                FRAMWORK
              </h5>
              <p>
                React Next.js Bootstrap Vue.js
              </p>

              <h5>
                TOOLS
              </h5>
              <p>
                Figma PostgreSQL Postman
              </p>
              <p>
                Tailwind
              </p>

              <h5>
                Database
              </h5>
              <p>
                Microsoft SQL Server
              </p>

            </div>
          </Row>

          <Row className='content-left'>
            <div className='language'>
              <h2>
                Language
              </h2>
              <p>
                Thai
              </p>
              <p>
                English
              </p>
            </div>
          </Row>
          </div>
      </div>
      </Col>
      <Col>
          <Row>
            <div className='box-2'>
                <img className='img-resume' src={img} alt="Logo" />
            </div>
          </Row>
          <Row>
            <Col className='about' sm={12}>
              <div className='box-about'>
                About Me
              </div>
              <p>
              I am a dedicated frontend development student with a strong passion for design and user experience. Currently studying in my final year, I have gained practical experience in graphic design and am eager to expand my knowledge in frontend development. I am passionate about creating attractive and user-friendly digital experiences, and I am committed to building my skills in the latest frontend technologies. I look forward to applying what I have learned in the classroom to real-world projects, while continuously learning from industry professionals.
              </p>
            </Col>
            
          </Row>

          <Row>
            <Col className='experience' sm={12}>
              <div className='box-experience'>
                Experience
              </div>

              <div className='content-experience-1'>
                <h3>
                  E-commerce Website Project
                </h3>
                <p>
                This project involves building an e-commerce website using HTML, CSS, and JavaScript, along with the following libraries:
                </p>
                <ul>
                  <li>
                   Bootstrap 5: For responsive and modern design.
                  </li>
                  <li>
                   bxSlider: To create sliders for product displays.
                  </li>
                  <li>
                   Isotope: For dynamic filtering and sorting of products.
                  </li>
                </ul>
              </div>

              <div className='content-experience-2'>
                <h3>
                  Vue.js CRUD Project
                </h3>
                <p>
                This project involves building a web application using Vue.js that connects to an external API to perform CRUD operations:
                </p>
                <ul>
                  <li>
                  Create: Add new data entries to the API.
                  </li>
                  <li>
                  Read: Retrieve and display data from the API dynamically.
                  </li>
                  <li>
                  Update: Modify existing data entries directly through the application.
                  </li>
                  <li>
                  Delete: Remove specific data entries via API requests.
                  </li>
                </ul>
              </div>
              
            </Col>
            
          </Row>

          <Row>
            <Col className='certifications' sm={12}>
              <div className='box-certifications'>
                Certifications
              </div>
              <h3>
              DigiProof: BasicWeb Development Assessment
              <FontAwesomeIcon icon="fa-solid fa-house" />
              </h3>
            </Col>
            
          </Row>
        
      
      </Col>
      </Row>
    </Container>
  );
}

export default App;