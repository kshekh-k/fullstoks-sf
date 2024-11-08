"use client";
import { SfButton, SfDrawer, SfIconCloseSm, useDisclosure, useTrapFocus } from '@storefront-ui/react';
import Input from "@/app/components/ui/input";
import { Searchicon, Searchlefticon } from "@/app/icons";
import React from 'react';
import { useClickAway } from 'react-use';
import { CSSTransition } from 'react-transition-group';

export default function Search() {
    const { close, toggle, isOpen } = useDisclosure();
    const drawerRef = React.useRef(null);
    const menuRef = React.useRef(null);
    const [inputValue, setInputValue] = React.useState('');
    useTrapFocus(drawerRef, {
        activeState: isOpen,
        arrowKeysUpDown: true,
        initialFocus: 'container',
    });
    useClickAway(menuRef, () => {
        close();
    });

    const searchs = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(`Successfully found 10 results for ${inputValue}`);
    };




    return (
        <>
            <button onClick={toggle} aria-haspopup={isOpen}
                aria-expanded={isOpen} className={`hover:text-primary-500 ease-in-out duration-200 ${isOpen ? 'text-primary-500' : 'text-primary-300'}`}>
                <Searchicon className="size-5" />
            </button>
            {isOpen && <div className="fixed inset-0 bg-neutral-500 bg-opacity-50 transition-opacity" />}
            <CSSTransition
                in={isOpen}
                timeout={500}
                unmountOnExit
                classNames={{
                    enter: '-translate-x-full md:opacity-0 md:translate-x-0',
                    enterActive: 'translate-x-0 md:opacity-100 transition duration-500 ease-in-out',
                    exitActive: '-translate-x-full md:opacity-0 md:translate-x-0 transition duration-500 ease-in-out',
                }}
            >
                <SfDrawer
                    ref={drawerRef}
                    open
                    disableClickAway
                    placement="top"
                    className="grid grid-cols-1 md:gap-x-6 md:grid-cols-4 bg-white shadow-lg p-0 max-h-screen overflow-y-auto md:!absolute md:!top-20 max-w-[376px] md:max-w-full md:p-6 mr-[50px] md:mr-0"
                >
                    <div className="relative text-white text-center bg-white w-full">
                        <SfButton
                            square
                            size="sm"
                            variant="tertiary"
                            aria-label="Close navigation menu"
                            onClick={close}
                            className="hidden md:block md:absolute md:right-0 hover:bg-white active:bg-white"
                        >
                            <SfIconCloseSm className="text-neutral-500" />
                        </SfButton>

                        <div className="max-w-screen-xl px-3 sm:px-5 py-5 mx-auto">
                            <h2 className="text-sm font-semibold uppercase text-primary-300 text-left tracking-wider">What are you looking for?</h2>
                            <form role="search" className="hidden md:flex" onSubmit={searchs}>
                                <div className="relative w-full">
                                    <Input wrapperClassName="!pl-0 !pr-12 !ring-0 border-b border-primary-100 focus-within:border-primary-500" className="!pl-0 w-full !ring-0 !text-sm " placeholder="SEARCH PRODUCTS" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
                                    <button type="submit" className="absolute inset-y-0 w-10 flex justify-center items-center right-0 text-primary-300 hover:text-primary-500 ease-in-out duration-200">
                                        <Searchlefticon className="size-5" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </SfDrawer>
            </CSSTransition>
        </>
    );
}
