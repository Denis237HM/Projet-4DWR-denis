import React from "react";
import { useNavigate } from "react-router-dom";




function Menu() {

    const navigate = useNavigate();
    return (

        <section className="relative mx-auto w-full">
            <nav className="fixed top-0 left-0 right-0 bg-gray-900 text-white w-full z-50">
                <div className="px-5 xl:px-12 py-6 flex w-full items-center justify-between">
                    <a className="text-3xl font-bold font-heading" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
                        BBlog
                    </a>
                    <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                        <li><a onClick={() => navigate("/")} className="hover:text-gray-200" style={{ cursor: "pointer" }}>Home</a></li>
                        <li><a onClick={() => navigate("/user-profile")} className="hover:text-gray-200" style={{ cursor: "pointer" }}>Profil</a></li>
                        {/* <li><a className="hover:text-gray-200" href="#">Collections</a></li>*/}
                        <li><a className="hover:text-gray-200" onClick={() => navigate("/edit-article")} style={{ cursor: "pointer" }}>Créer un article</a></li>
                    </ul>
                    <div className="hidden xl:flex items-center space-x-5">
                        <a className="flex items-center hover:text-gray-200" onClick={() => navigate("/user-profile")}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </a>
                    </div>
                    <div className="md:hidden flex items-center space-x-5">
                        <a className="navbar-burger self-center mr-2" onClick={() => navigate("/user-profile")}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </a>
                    </div>
                </div>
            </nav>
        </section>
    );
}
export default Menu;