import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother | null = null;

const Navbar = () => {
    useEffect(() => {
        smoother = ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 1.2,
            speed: 1.2,
            effects: true,
            autoResize: true,
            ignoreMobileResize: true,
        });

        const links = Array.from(
            document.querySelectorAll(".header ul a")
        ) as HTMLAnchorElement[];

        const handleLinkClick = (e: Event) => {
            if (window.innerWidth > 1024 && smoother) {
                e.preventDefault();
                const elem = e.currentTarget as HTMLAnchorElement;
                const section = elem.getAttribute("data-href");
                if (section) {
                    smoother.scrollTo(section, true, "top top");
                }
            }
        };

        links.forEach((link) => {
            link.addEventListener("click", handleLinkClick);
        });

        // Delay refresh to ensure all 3D sections and lazy components are sized correctly
        const refreshTimeout = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 500);

        const handleResize = () => {
            ScrollTrigger.refresh();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            clearTimeout(refreshTimeout);
            links.forEach((link) => {
                link.removeEventListener("click", handleLinkClick);
            });

            window.removeEventListener("resize", handleResize);

            if (smoother) {
                smoother.kill();
                smoother = null;
            }
        };
    }, []);

    return (
        <>
            <div className="header">
                <a href="/#" className="navbar-title" data-cursor="disable">
                    MS
                </a>

                <a
                    href="mailto:ms.mansi.suryawanshi@gmail.com"
                    className="navbar-connect"
                    data-cursor="disable"
                >
                    ms.mansi.suryawanshi@gmail.com
                </a>

                <ul>
                    <li>
                        <a data-href="#about" href="#about">
                            <HoverLinks text="ABOUT" />
                        </a>
                    </li>
                    <li>
                        <a data-href="#work" href="#work">
                            <HoverLinks text="WORK" />
                        </a>
                    </li>
                    <li>
                        <a data-href="#contact" href="#contact">
                            <HoverLinks text="CONTACT" />
                        </a>
                    </li>
                </ul>
            </div>

            <div className="landing-circle1"></div>
            <div className="landing-circle2"></div>
            <div className="nav-fade"></div>
        </>
    );
};

export default Navbar;