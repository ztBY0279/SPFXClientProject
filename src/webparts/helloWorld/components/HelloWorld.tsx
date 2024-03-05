import * as React from 'react';
import styles from './HelloWorld.module.scss';
import type { IHelloWorldProps } from './IHelloWorldProps';
//import { escape } from '@microsoft/sp-lodash-subset';
import Home from './HomeComponents/Home';
import MySpace from './MySpaceComponents/MySpace';
import CompanyNews from './CompanyNewsComponents/CompanyNews';
import HelpDesk from './HelpDesk/HelpDesk';
import {BrowserRouter as Router, Route, Link,Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// import  FontAwesomeIcon  from '@fortawesome/fontawesome-free';
// import { faHouse } from '@fortawesome/free-regular-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  public completeURL = "https://zehntechtechnologies.sharepoint.com/sites/SharepointSpfx/_layouts/15/workbench.aspx";
  public render(): React.ReactElement<IHelloWorldProps> {
    // const {
    //   // description,
    //   // isDarkTheme,
    //   // environmentMessage,
    //   // hasTeamsContext,
    //   // userDisplayName
    // } = this.props;
    
    return (

      <Router>
     
   
        <nav  className={`${styles.navBackgroundColor} navbar navbar-expand-lg navbar-light `}>
      <Link to="/sites/SharepointSpfx/_layouts/15/workbench.aspx" className="navbar-brand">
        <img src="your-logo.png" width="30" height="30" className="d-inline-block align-top" alt="Logo" />
      </Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"/>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/sites/SharepointSpfx/_layouts/15/workbench.aspx" className="nav-link">
            {/* <FontAwesomeIcon icon="fa-regular fa-house" /> */}
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sites/SharepointSpfx/_layouts/15/workbench.aspx/MySpace" className="nav-link">
            My Space
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sites/SharepointSpfx/_layouts/15/workbench.aspx/CompanyNews" className="nav-link">
            Company News
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sites/SharepointSpfx/_layouts/15/workbench.aspx/HelpDesk" className="nav-link">
            Helpdesk
            </Link>
          </li>
        </ul>
      </div>
    </nav>



          <Routes>
          <Route path="/sites/SharepointSpfx/_layouts/15/workbench.aspx"  Component={Home} />
          <Route path='/sites/SharepointSpfx/_layouts/15/workbench.aspx/MySpace' Component={MySpace}/>
          <Route path='/sites/SharepointSpfx/_layouts/15/workbench.aspx/CompanyNews' element={<CompanyNews/>}/>
          <Route path="/sites/SharepointSpfx/_layouts/15/workbench.aspx/HelpDesk" element={<HelpDesk/>} />
          </Routes>
      
      
         
        </Router>
      
     
    );
  }
}

