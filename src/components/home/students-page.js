import React, {useState} from "react";
import {Link, Route} from "react-router-dom";
import Profile from "../users/profile-page";
import SearchScreen from "../search-screen/search-screen";
import DetailsScreen from "../student-detail/details-screen";

const Students = (
    {
        logged,
        student
    }
) => {
    const [activeTab, setActiveTab] = useState('Records')
    return (
        <div>
            {
                logged &&
                <div className="row">
                    <div className="col-2">
                        <ul className="nav flex-column nav-pills me-3">
                            <li className="nav-item">
                                <Link onClick={()=> setActiveTab('Profile')}
                                      className={`nav-link ${activeTab=='Profile'?'active':''}`}
                                      to='/profile/details'>
                                    Details
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={()=> setActiveTab('Search')}
                                      className={`nav-link ${activeTab=='Search'?'active':''}`}
                                      to='/profile/search'>
                                    Search
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-10">
                        <Route path="/profile/search" >
                            <SearchScreen/>
                        </Route>
                        <Route path="/profile/details" >
                            <DetailsScreen student={student}/>
                        </Route>
                    </div>
                </div>
            }
            {
                !logged &&
                <>
                    <h1>Resources</h1>
                    <ul>
                        <li>
                            <a href="https://www.khanacademy.org">
                                Khan Academy
                            </a>
                        </li>
                        <li>
                            <a href="https://collegereadiness.collegeboard.org/sat/register/may-2021?ef_id=CjwKCAjwvMqDBhB8EiwA2iSmPIBBijH8Rzygswiz1BsBmLq2KQPuwhVBm4K86KzP2ImEbq2tH7vKihoC0V8QAvD_BwE:G:s&s_kwcid=AL!4330!3!494429910659!e!!g!!sat!1709889012!66413925763&gclid=CjwKCAjwvMqDBhB8EiwA2iSmPIBBijH8Rzygswiz1BsBmLq2KQPuwhVBm4K86KzP2ImEbq2tH7vKihoC0V8QAvD_BwE">
                                College Board
                            </a>
                        </li>
                    </ul>
                </>
            }
        </div>
    );
}
export default Students;