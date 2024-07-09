"use client"
import React, { ReactNode } from 'react';
import { useRef } from 'react';

interface EventScrollerProps {
    children: ReactNode;
}

const EventScroller: React.FC<EventScrollerProps> = ({ children }) => {

    const scrollerRef = useRef<HTMLDivElement | null>(null)

    const scrollLeft = () => {
        if (scrollerRef.current) {
            const { scrollLeft } = scrollerRef.current
            scrollerRef.current.scrollTo({ left: scrollLeft - 424, behavior: 'smooth' })
        }
    }

    const scrollRight = () => {
        if (scrollerRef.current) {
            const { scrollLeft } = scrollerRef.current
            scrollerRef.current.scrollTo({ left: scrollLeft + 424, behavior: 'smooth' })
        }
    }


    return (
        <div className="relative">

            <button onClick={() => { scrollLeft() }} className="absolute my-auto inset-y-0 left-3 cursor-pointer">
                <img src="/imgs/chevron.svg" height={20} width={20} alt="Scroll Left" />
            </button>

            <button onClick={scrollRight} className="absolute my-auto inset-y-0 right-3 transform scale-x-[-1] cursor-pointer">
                <img src="/imgs/chevron.svg" height={20} width={20} alt="Scroll Right" />
            </button>


            <div ref={scrollerRef} className="w-full overflow-x-scroll whitespace-nowrap scroll-smooth">
                {children}
            </div>
            
        </div>
    );
}

export default EventScroller