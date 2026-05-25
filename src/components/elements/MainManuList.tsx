"use client"
import React from 'react';  
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ManuItemOnePage, NavItem } from '../link-content/LinkType';
import MobileManuListSingle from './MobileManuListSingle';
import { blogs_link, cars_link, home_link, pages_link, shops_link } from '../link-content/NavLink';


interface ComponentProps {
    onePageManuList: ManuItemOnePage[]
}

const MainManuList: React.FC<ComponentProps> = ({ onePageManuList }) => {
    const currentPath = usePathname();
    const findLocation = (array: NavItem[]): boolean => {
        return array.some(item => item?.link === currentPath);
    };
    const isOnePage = currentPath.includes("one-page")




    if (isOnePage) {
        return <MobileManuListSingle onePageManuListProp={onePageManuList} />
    } 
    
    return (
        <ul className="main-menu__list">
            <li className={`dropdown ${findLocation(home_link) ? "current" : ""}`}>
                <a href="#">Home</a>
                <ul className="shadow-box">
                    {
                        home_link.map((Item: NavItem) => <li key={Item?.id} className={currentPath === Item?.link ? "current" : ""}>
                            <Link href={Item?.link}>{Item?.value}</Link>
                        </li>)
                    }
                </ul>
            </li>
            <li className={currentPath === "/inner/about" ? "current" : ""}>
                <Link href="/inner/about">About Us</Link>
            </li>
            <li className={`dropdown ${findLocation(pages_link) ? "current" : ""}`}>
                <a href="#">Pages</a>
                <ul className="shadow-box">
                    {
                        pages_link.map((Item: NavItem) => <li key={Item?.id} className={currentPath === Item?.link ? "current" : ""} >
                            <Link href={Item?.link}>{Item?.value}</Link>
                        </li>)
                    }
                </ul>
            </li>
            <li className={`dropdown ${findLocation(cars_link) ? "current" : ""}`}>
                <a href="#">Cars</a>
                <ul className="shadow-box">
                    {
                        cars_link.map((Item: NavItem) => <li key={Item?.id} className={currentPath === Item?.link ? "current" : ""} >
                            <Link href={Item?.link}>{Item?.value}</Link>
                        </li>)
                    }
                </ul>
            </li>
            <li className={`dropdown ${findLocation(shops_link) ? "current" : ""}`}>
                <a href="#">Shop</a>
                <ul className="shadow-box">
                    {
                        shops_link.map((Item: NavItem) => <li key={Item?.id} className={currentPath === Item?.link ? "current" : ""} >
                            <Link href={Item?.link}>{Item?.value}</Link>
                        </li>)
                    }
                </ul>
            </li>
            <li className={`dropdown ${findLocation(blogs_link) ? "current" : ""}`}>
                <a href="#">Blog</a>
                <ul className="shadow-box">
                    {
                        blogs_link.map((Item: NavItem) => <li key={Item?.id} className={currentPath === Item?.link ? "current" : ""} >
                            <Link href={Item?.link}>{Item?.value}</Link>
                        </li>)
                    }
                </ul>
            </li>
            <li className={currentPath === "/inner/contact" ? "current" : ""}>
                <Link href="/inner/contact">Contact</Link>
            </li>
        </ul>
    );
};

export default MainManuList;