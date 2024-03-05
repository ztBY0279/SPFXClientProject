import * as React from "react"; 
import { Outlet, Link } from "react-router-dom";
function Layout():React.ReactElement<HTMLDivElement>{

    return (
        <div>
            <section>
                <nav>
                    <ul>
                        <li>
                        <Link to="/">Home</Link>
                        </li>
                        <li>
                            <a href="#/MySpace">My Space</a>
                            <Link to="#/MySpace">My Space</Link>
                        </li>
                        <li>
                        <a href="#/MySpace">Company News</a>
                            <Link to="#/CompanyNews">Company News</Link>
                        </li>
                        <li>
                            <Link to="#/HelpDesk">Help Desk</Link>
                        </li>
                        
                    </ul>
                </nav>
                <Outlet />
            </section>
            
        </div>

        
    )
}
export default Layout;