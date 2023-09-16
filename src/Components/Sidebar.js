import React from 'react'
import { faFolder, faNewspaper, faUserCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookAtlas, faBookOpenReader, faChartSimple, faSignOutAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => {
    return (
        <div class="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{ backgroundColor: "#e9ecef" }}>

            <ul class="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
                <li class="nav-item mb-2 mt-3"><a class="nav-link text-secondary" href="#"><FontAwesomeIcon icon={faUserCircle} /><h5>Gaurav Mehra</h5></a></li>
                <hr />
                <li class="nav-item mb-2 "><a class="nav-link text-secondary" href="#"><FontAwesomeIcon icon={faUserAlt} /><span className="ml-3">Overview</span></a></li>
                <li class="nav-item mb-2">
                    <a class="nav-link text-secondary" href="#submenu1" data-toggle="collapse" data-target="#submenu1"><FontAwesomeIcon icon={faBookAtlas} /><span className="ml-3"> Reports▾</span></a>
                    <ul class="list-unstyled flex-column pl-3 collapse" id="submenu1" aria-expanded="false">
                        <li class="nav-item mb-2 "><a class="nav-link text-secondary" href=""><FontAwesomeIcon icon={faBookOpenReader} />Data Report </a></li>
                        <li class="nav-item mb-2 "><a class="nav-link text-secondary" href=""> <i class="fas fa-book-medical"></i> File Report </a></li>
                    </ul>
                </li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><FontAwesomeIcon icon={faChartSimple} /> <span className="ml-3">Analytics</span></a></li>

                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#">   <FontAwesomeIcon icon={faFolder} /><span className="ml-3">Layouts</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><FontAwesomeIcon icon={faNewspaper} />Careers</a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"> <FontAwesomeIcon icon={faSignOutAlt} />Sign Out</a></li>
            </ul>
        </div>
    )
}

export default Sidebar