import { useState, useEffect } from "react";

/**
 * ✨ Custom Hook để detect mobile/desktop responsive
 * Breakpoint: < 768px = mobile, ≥ 768px = desktop
 */
export const useMobileDetection = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Kiểm tra khi component mount
        checkMobile();

        // Lắng nghe sự kiện resize
        window.addEventListener("resize", checkMobile);

        // Cleanup: xóa event listener khi component unmount
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return isMobile;
};
