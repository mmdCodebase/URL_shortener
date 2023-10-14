import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownMenu, DropdownToggle, Form } from 'reactstrap';

//import images
import logoSm from "../../assets/images/logo-sm.png";
import logoDark from "../../assets/images/logo-dark.png";
import logoLight from "../../assets/images/logo-light.png";
import topIcon from "../../assets/images/dashboard/top-icon.png";

//import Components
import SearchOption from '../../Components/Common/SearchOption';
import LanguageDropdown from '../../Components/Common/LanguageDropdown';
import WebAppsDropdown from '../../Components/Common/WebAppsDropdown';
import MyCartDropdown from '../../Components/Common/MyCartDropdown';
import FullScreenDropdown from '../../Components/Common/FullScreenDropdown';
import NotificationDropdown from '../../Components/Common/NotificationDropdown';
import ProfileDropdown from '../../Components/Common/ProfileDropdown';
import LightDark from '../../Components/Common/LightDark';

const Header = ({ onChangeLayoutMode, layoutModeType }) => {
    const [search, setSearch] = useState(false);
    const toogleSearch = () => {
        setSearch(!search);
    };

    const toogleMenuBtn = () => {
        var windowSize = document.documentElement.clientWidth;

        if (windowSize > 767)
            document.querySelector(".hamburger-icon").classList.toggle('open');

        //For collapse horizontal menu
        if (document.documentElement.getAttribute('data-layout') === "horizontal") {
            document.body.classList.contains("menu") ? document.body.classList.remove("menu") : document.body.classList.add("menu");
        }

        //For collapse vertical menu
        if (document.documentElement.getAttribute('data-layout') === "vertical") {
            if (windowSize < 1025 && windowSize > 767) {
                document.body.classList.remove('vertical-sidebar-enable');
                (document.documentElement.getAttribute('data-sidebar-size') === 'sm') ? document.documentElement.setAttribute('data-sidebar-size', '') : document.documentElement.setAttribute('data-sidebar-size', 'sm');
            } else if (windowSize > 1025) {
                document.body.classList.remove('vertical-sidebar-enable');
                (document.documentElement.getAttribute('data-sidebar-size') === 'lg') ? document.documentElement.setAttribute('data-sidebar-size', 'sm') : document.documentElement.setAttribute('data-sidebar-size', 'lg');
            } else if (windowSize <= 767) {
                document.body.classList.add('vertical-sidebar-enable');
                document.documentElement.setAttribute('data-sidebar-size', 'lg');
            }
        }

        //Two column menu
        if (document.documentElement.getAttribute('data-layout') === "twocolumn") {
            document.body.classList.contains('twocolumn-panel') ? document.body.classList.remove('twocolumn-panel') : document.body.classList.add('twocolumn-panel');
        }
    };
    return (
        <React.Fragment>
            <header id="page-topbar" style={{backgroundColor: "#000"}} >
                <div className="layout-width">
                        <div style={{float: "left", paddingTop: "10px", paddingLeft: "100px", fontSize: "26px"}}>Dashboard</div>
                    <div className="navbar-header" style={{float: "right"}}>

                        <div className="d-flex align-items-center">

                            <select className="form-select bg-soft-dark" aria-label="Default select example"style={{padding: "16px", width: "140px", borderRadius: "7px"}}>
                                <option >
                                    <span>mnAlnxloax</span>
                                </option>
                                <option value="1">mnAlnxloax</option>
                                <option value="2">mnAlnxloax</option>
                                <option value="3">mnAlnxloax</option>
                            </select>

                            {/* NotificationDropdown */}
                            <NotificationDropdown />

                            {/* ProfileDropdown */}
                            <ProfileDropdown />
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
};

export default Header;