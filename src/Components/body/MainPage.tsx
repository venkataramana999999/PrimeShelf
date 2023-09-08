import React from "react";
import Sidebar from "../common/Sidebar/sidebar";
import Header from "../common/Header/header";
import Footer from "../common/Footer/footer";

interface MainPage1Props {
    sidebarVisible: boolean;
    toggleSidebar: () => void;
    backgroundColor: string;
    textClass: string;
}




const MainPage1: React.FC<MainPage1Props> = ({ sidebarVisible, toggleSidebar }) => {
    return (
        <>
            <div className="page-wrapper compact-wrapper" id="pageWrapper">
                <Header toggleSidebar={toggleSidebar} toggleBackgroundColor={function (): void {
                    throw new Error("Function not implemented.");
                } } backgroundColor={""} textClass={""} />
                <div className="page-body-wrapper sidebar-icon">
                    <Sidebar sidebarVisible={sidebarVisible} />
                </div>
            </div>
        </>
    );
}

export default MainPage1;

