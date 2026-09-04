import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'react-bootstrap-icons';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'auto',
        });
    }, [pathname]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="scroll-to-top-btn"
                    aria-label="Scroll to top"
                >
                    <div className="icon-wrapper">
                        <ChevronUp size={18} />
                    </div>
                </button>
            )}
        </>
    );
}

export default ScrollToTop;