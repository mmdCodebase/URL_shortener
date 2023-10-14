import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";
//import logo
import logoSm from "../../assets/images/logo-sm.png";
import logoDark from "../../assets/images/dashboard/logo-img.png";
import logoLight from "../../assets/images/dashboard/logo-img.png";
import avatar1 from "../../assets/images/dashboard/b-icon.png";

//Import Components
import SidebarContent from "./SidebarContent";
import TwoColumnLayout from "../TwoColumnLayout";
import { Container } from "reactstrap";
import HorizontalLayout from "../HorizontalLayout";
import { WidgetsCharts } from "../../pages/DashboardTest/DashboardCryptoCharts";

const Sidebar = ({ layoutType }) => {

  useEffect(() => {
    var verticalOverlay = document.getElementsByClassName("vertical-overlay");
    if (verticalOverlay) {
      verticalOverlay[0].addEventListener("click", function () {
        document.body.classList.remove("vertical-sidebar-enable");
      });
    }
  });

  const addEventListenerOnSmHoverMenu = () => {
    // add listener Sidebar Hover icon on change layout from setting
    if (document.documentElement.getAttribute('data-sidebar-size') === 'sm-hover') {
      document.documentElement.setAttribute('data-sidebar-size', 'sm-hover-active');
    } else if (document.documentElement.getAttribute('data-sidebar-size') === 'sm-hover-active') {
      document.documentElement.setAttribute('data-sidebar-size', 'sm-hover');
    } else {
      document.documentElement.setAttribute('data-sidebar-size', 'sm-hover');
    }
  };
  return (
    <React.Fragment>
      <div className="app-menu navbar-menu">
        <div className="navbar-brand-box text-start">
          <Link to="/" className="logo logo-dark">
            <span className="logo-sm">
              <img src={logoSm} alt="" height="22" />
            </span>
            <span className="logo-lg">
              <img src={logoDark} alt="" height="17" />
            </span>
          </Link>

          <Link to="/" className="logo logo-light">
            <span className="logo-sm">
              <img src={logoSm} alt="" height="22" />
            </span>
            <span className="logo-lg">
              <img src={logoLight} alt="" height="40" />
            </span>
          </Link>
          <button
            onClick={addEventListenerOnSmHoverMenu}
            type="button"
            className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
            id="vertical-hover"
          >
            <i className="ri-record-circle-line"></i>
          </button>
        </div>
        {layoutType === "horizontal" ? (
          <div id="scrollbar">
            <Container fluid>
              <div id="two-column-menu"></div>
              <ul className="navbar-nav" id="navbar-nav">
                <HorizontalLayout />
              </ul>
            </Container>
          </div>
        ) : layoutType === 'twocolumn' ? (
          <TwoColumnLayout layoutType={layoutType} />
        ) : (
          <SimpleBar id="scrollbar" className="h-100">
            <Container fluid>
              <div id="two-column-menu"></div>
              <ul className="navbar-nav" id="navbar-nav">
                <SidebarContent layoutType={layoutType} />
              </ul>
            </Container>
          </SimpleBar>
        )}
        <div className="position-relative text-center" style={{ bottom: "26px", left: "12px" }}>
          <span className="d-flex align-items-center">
            <div className="d-flex">
              <img className="rounded-circle header-profile-user" src={avatar1}
                alt="Header Avatar" />
              <span className="text-start ms-xl-2">
                <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">Billy Davis</span>
                <span className="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">billydavis@gmail.com</span>
              </span>
            </div>
            <div className="d-flex float-end ms-3">
              <i className="d-inline mdi mdi-logout text-muted fs-22 align-middle me-1"></i>
            </div>
          </span>
        </div>
      </div>
      <div className="vertical-overlay"></div>
    </React.Fragment>
  );
};

export default Sidebar;
