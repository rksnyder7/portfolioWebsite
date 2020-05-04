import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'tachyons';
// import CardGroup from 'react-bootstrap/CardGroup';
// import Card from 'react-bootstrap/Card';
// import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {

  render() {

    return (
      <div>
      <header className="tc pv4 pv3-ns bg-light-gray">
        <img  src={require('./Utils/LogoMakr_91hyAI.png')} class=" " />
        
      </header>
      <main className="cf pa2">
        <div className="fl w-100 w-50-ns ph2">
          <a href="https://rob-snyder7.github.io/draftGuide/" target="_blank" className="pv2 grow db no-underline black">
                  <header class="bb b--black-70 pv4">
                    <h3 class="f2 fw7 ttu tracked lh-title mt0 mb3 avenir">Fantasy Football Draft Guide</h3>
                    <h4 class="f4 fw4 i lh-title mt0">Compares player rankings across sites and highlights undervalued players</h4>
                  </header>
            <img className="db w-100" src={require('./Utils/draftGuide.PNG')}/>
          </a>
        </div>
        <div className="fl w-50 w-25-ns ph2">
          <a href="https://rob-snyder7.github.io/travelPlanner/" target="_blank" className="no-underline pv2 grow db black">
                  <header class="bb b--black-70 pv4">
                    <h3 class="f2 fw7 ttu tracked lh-title mt0 mb3 avenir">Travel Planner</h3>
                    <h4 class="f4 fw4 i lh-title mt0">Explore the world and plan your next getaway</h4>
                  </header>
            <img className="db w-100" src={require('./Utils/travelPlanner.PNG')}/>
          </a>
        </div>
        <div className="fl w-50 w-25-ns ph2">
          <a href="https://rob-snyder7.github.io/Preksway/" target="_blank" className="no-underline pv2 grow db black">
                  <header class="bb b--black-70 pv4">
                    <h3 class="f2 fw7 ttu tracked lh-title mt0 mb3 avenir">Preksway</h3>
                    <h4 class="f4 fw4 i lh-title mt0">Website for Cambodian village Eco-Tourism destination</h4>
                  </header>
            <img className="db w-100" src={require('./Utils/Preksway.PNG')}/>
          </a>
        </div>
      </main>
<footer className="pv4 ph3 ph5-ns tr">
  <a className="link hover-silver near-black dib h2 w2 mr3" href="https://www.linkedin.com/in/robert-snyder-6649b153/" target="_blank" title="LinkedIn">
    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51V7.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z" fill-rule="nonzero"/></svg>
  </a>
    <a class="link near-black hover-silver dib h2 w2 mr3" href="https://github.com/rob-snyder7" target="_blank" title="GitHub">
    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"/></svg>
  </a>
    <a class="link hover-silver near-black dib h2 w2 mr3" href="https://www.instagram.com/rob_schneiderr/" target="_blank" title="Instagram">
    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.048 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.01-3.233-.048c-.78-.036-1.203-.166-1.485-.276-.374-.145-.64-.318-.92-.598-.28-.28-.453-.546-.598-.92-.11-.282-.24-.705-.276-1.485C1.45 10.39 1.44 10.136 1.44 8s.01-2.39.048-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.61 1.45 5.864 1.44 8 1.44zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z"/></svg>
  </a>
</footer>
      </div>
    );
  }
}

export default App;
       

       // style={{backgroundImage: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAG0lEQVQYV2NkYGD4z8DAwMgABXAGNgGwSgwVAFbmAgXQdISfAAAAAElFTkSuQmCC)'}}

// <h1 class="f5 f3-ns fw6 black">Rob Snyder</h1>

  // <div class="vh-100 dt w-100 tc bg-dark-gray white cover" style={{backgroundImage: 'url(' + require('./Utils/DSCF1225.JPG') + ')'}}>
    // <div class="dtc v-mid">
      // <h1 class="f1 f-headline-l fw1 i white-60">Rob Snyder</h1>
      // <blockquote class="ph0 mh0 measure f4 lh-copy center">
        // <p class="fw1 white-70">
        //   It's the space you put between the notes that make the music.
        // </p>
        // <cite class="f6 ttu tracked fs-normal">Massimo Vignelli</cite>
      // </blockquote>
    // </div>
  // </div>

// <div class="vh-100 dt w-100 tc bg-dark-gray white cover" style="background:url(http://mrmrs.github.io/photos/u/009.jpg) no-repeat center;">

          // <a href="https://rksnyder7.github.io/draftGuide/" target="_blank" className="pv2 grow db no-underline black"><img className="db w-100" src={require('./Utils/Preksway.PNG')}/></a>
          
  // <iframe src="https://rksnyder7.github.io/draftGuide/"height={800} width={1000}/>
// <CardGroup>
//   <Card>
//     <Card.Img variant="top" src={require('./Utils/draftGuide.PNG')} />
//     <Card.Body>
//       <Card.Title>Card title</Card.Title>
//       <Card.Text>
//         This is a wider card with supporting text below as a natural lead-in to
//         additional content. This content is a little bit longer.
//       </Card.Text>
//     </Card.Body>
//     <Card.Footer>
//       <small className="text-muted">React, Python</small>
//     </Card.Footer>
//   </Card>
//   <Card>
//     <Card.Img variant="top" src={require('./Utils/travelPlanner.PNG')} />
//     <Card.Body>
//       <Card.Title>Card title</Card.Title>
//       <Card.Text>
//         This card has supporting text below as a natural lead-in to additional
//         content.{' '}
//       </Card.Text>
//     </Card.Body>
//     <Card.Footer>
//       <small className="text-muted">React, Python</small>
//     </Card.Footer>
//   </Card>
//   <Card>
//     <Card.Img variant="top" src={require('./Utils/Preksway.PNG')} />
//     <Card.Body>
//       <Card.Title>Card title</Card.Title>
//       <Card.Text>
//         This is a wider card with supporting text below as a natural lead-in to
//         additional content. This card has even longer content than the first to
//         show that equal height action.
//       </Card.Text>
//     </Card.Body>
//     <Card.Footer>
//       <small className="text-muted">HTML, CSS, JavaScript</small>
//     </Card.Footer>
//   </Card>
// </CardGroup>
