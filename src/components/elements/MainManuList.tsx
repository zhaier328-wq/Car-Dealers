"use client"
import React from 'react';  
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ManuItemOnePage } from '../link-content/LinkType';
import MobileManuListSingle from './MobileManuListSingle';

interface ComponentProps {
    onePageManuList: ManuItemOnePage[]
}

const MainManuList: React.FC<ComponentProps> = ({ onePageManuList }) => {
    const currentPath = usePathname();
    const isOnePage = currentPath.includes("one-page")

    if (isOnePage) {
        return <MobileManuListSingle onePageManuListProp={onePageManuList} />
    } 
    
    return (
        <ul className="main-menu__list">
            {/* Home - Single */}
            <li className={currentPath === "/" ? "current" : ""}>
                <Link href="/">Home</Link>
            </li>

            {/* View Stock / Cars Listing */}
            <li className={currentPath === "/inner/car-list-v-1" ? "current" : ""}>
                <Link href="/inner/car-list-v-1">View Stock</Link>
            </li>

            {/* Services */}
            <li className={currentPath === "/inner/services" ? "current" : ""}>
                <Link href="/inner/services">Services</Link>
            </li>

            {/* Finance - With 3 Sub-pages */}
            <li className={`dropdown ${currentPath.startsWith("/inner/finance") ? "current" : ""}`}>
                <a href="#">Finance</a>
                <ul className="shadow-box">
                    <li className={currentPath === "/inner/finance" ? "current" : ""}>
                        <Link href="/inner/finance">Finance</Link>
                    </li>
                    <li className={currentPath === "/inner/finance/finance-calculator" ? "current" : ""}>
                        <Link href="/inner/finance/finance-calculator">Finance Calculator</Link>
                    </li>
                    <li className={currentPath === "/inner/finance/apply-for-finance" ? "current" : ""}>
                        <Link href="/inner/finance/apply-for-finance">Apply for Finance</Link>
                    </li>
                    <li className={currentPath === "/inner/finance/finance-information" ? "current" : ""}>
                        <Link href="/inner/finance/finance-information">Finance Information</Link>
                    </li>
                </ul>
            </li>

            {/* About Us */}
            <li className={currentPath === "/inner/about" ? "current" : ""}>
                <Link href="/inner/about">About Us</Link>
            </li>

            {/* Blog */}
            <li className={currentPath === "/inner/blog" ? "current" : ""}>
                <Link href="/inner/blog">Blog</Link>
            </li>

            {/* Contact Us */}
            <li className={currentPath === "/inner/contact" ? "current" : ""}>
                <Link href="/inner/contact">Contact Us</Link>
            </li>
        </ul>
    );
};

export default MainManuList;