'use client'
import React, { Fragment, useState, useEffect } from 'react';
import Header from '@/component/header';
import SideBar from '@/component/sidebar/sidebar';
import OptionMenuBar from '@/component/optionMenuBar';
import SecondarySidebar from '@/component/sidebar/secSidebar';
import SearchTrip from '@/component/section/seachtrip';
import PopularDestination from '@/component/section/popularDestination';
import BestValueTrip from '@/component/section/bestValueTrip';
import WhyChooseUs from '@/component/section/whyChooseUs';
import ArticleAndTips from '@/component/section/article&Tips';
import BackToTop from '@/component/backToTop';
import "@/style/global.css";

export default function Home() {

    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const [isSecSidebarOpen, setIsSecSidebarOpen] = useState<boolean>(false);

    useEffect(() => {
        if (isSidebarOpen) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'auto';
        }
    }, [isSidebarOpen])

    return (
        <Fragment>
            <Header
                setIsSidebarOpen={setIsSidebarOpen}
                isVisible={!isSidebarOpen}
            />
            <SearchTrip />
            <PopularDestination />
            <BestValueTrip />
            <WhyChooseUs />
            <ArticleAndTips />
            <BackToTop />
            <OptionMenuBar 
                state={isSecSidebarOpen}
                setOpen={setIsSecSidebarOpen}
            />
            <SideBar 
                onClose={() => setIsSidebarOpen(false)} 
                isVisible={isSidebarOpen}
            />
            <SecondarySidebar 
                isVisible={isSecSidebarOpen}
            />
        </Fragment>
    );
}