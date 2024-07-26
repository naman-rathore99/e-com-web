
// SideNavbar.tsx
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import {
    MdOutlineSpaceDashboard,
    MdOutlineAnalytics,
    MdOutlineIntegrationInstructions,
    MdOutlineMoreHoriz,
    MdOutlineSettings,
    MdOutlineLogout,
} from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { FaRegComments } from 'react-icons/fa';
import { BiMessageSquareDots } from 'react-icons/bi';

interface SideNavbarProps {
    activeTab: string;
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const SideNavbar: React.FC<SideNavbarProps> = ({ activeTab, setActiveTab }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        setIsOpen(false); // Optionally close the sidebar
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLButtonElement>, tab: string) => {
        if (event.key === 'Enter' || event.key === ' ') {
            handleTabChange(tab);
        }
    };

    return (
        <div className="relative">
            {/* Toggle button */}
            <button
                className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 dark:hover:bg-white hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group z-10"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle sidebar"
            >
                <GiHamburgerMenu className="block md:hidden h-6 w-6" aria-hidden="true" />
            </button>

            {/* Sidebar */}
            <div
                className={`transition-transform duration-200 ease-out ${isOpen ? 'translate-x-0' : '-translate-x-96'
                    } lg:translate-x-0 lg:w-60 lg:relative lg:block lg:z-0  lg:h-auto`}
            >
                <div className="p-2 w-auto h-screen bg-white z-20">
                    <div className="flex flex-col justify-start ">
                        {/* Dashboard Tab */}
                        <button
                            className={`flex mb-2 justify-start items-center gap-4 dark:hover:bg-white hover:bg-gray-900   p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ${activeTab === '/dashboard' ? 'bg-gray-900 text-white' : ''}`}
                            onClick={() => handleTabChange('/dashboard')}
                            onKeyDown={(event) => handleKeyPress(event, '/dashboard')}
                            tabIndex={0}
                            aria-pressed={activeTab === '/dashboard'}
                        >
                            <MdOutlineSpaceDashboard className="text-2xl" />
                            <h3 className="text-base font-semibold">Dashboard</h3>
                        </button>

                        {/* Profile Tab */}
                        <button
                            className={`flex mb-2 justify-start items-center gap-4 dark:hover:bg-white hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ${activeTab === '/profile' ? 'bg-gray-900 text-white' : ''}`}
                            onClick={() => handleTabChange('/profile')}
                            onKeyDown={(event) => handleKeyPress(event, '/profile')}
                            tabIndex={0}
                            aria-pressed={activeTab === '/profile'}
                        >
                            <CgProfile className="text-2xl" />
                            <h3 className="text-base font-semibold">Profile</h3>
                        </button>

                        {/* Comments Tab */}
                        <button
                            className={`flex mb-2 justify-start items-center gap-4 dark:hover:bg-white hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ${activeTab === '/comments' ? 'bg-gray-900 text-white' : ''}`}
                            onClick={() => handleTabChange('/comments')}
                            onKeyDown={(event) => handleKeyPress(event, '/comments')}
                            tabIndex={0}
                            aria-pressed={activeTab === '/comments'}
                        >
                            <FaRegComments className="text-2xl" />
                            <h3 className="text-base font-semibold">Comments</h3>
                        </button>

                        {/* Analytics Tab */}
                        <button
                            className={`flex mb-2 justify-start items-center gap-4 dark:hover:bg-white hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ${activeTab === '/analytics' ? 'bg-gray-900 text-white' : ''}`}
                            onClick={() => handleTabChange('/analytics')}
                            onKeyDown={(event) => handleKeyPress(event, '/analytics')}
                            tabIndex={0}
                            aria-pressed={activeTab === '/analytics'}
                        >
                            <MdOutlineAnalytics className="text-2xl" />
                            <h3 className="text-base font-semibold">Analytics</h3>
                        </button>

                        {/* Messages Tab */}
                        <button
                            className={`flex mb-2 justify-start items-center gap-4 dark:hover:bg-white hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ${activeTab === '/messages' ? 'bg-gray-900 text-white' : ''}`}
                            onClick={() => handleTabChange('/messages')}
                            onKeyDown={(event) => handleKeyPress(event, '/messages')}
                            tabIndex={0}
                            aria-pressed={activeTab === '/messages'}
                        >
                            <BiMessageSquareDots className="text-2xl" />
                            <h3 className="text-base font-semibold">Messages</h3>
                        </button>

                        {/* Integration Tab */}
                        <button
                            className={`flex mb-2 justify-start items-center gap-4 dark:hover:bg-white hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ${activeTab === '/integration' ? 'bg-gray-900 text-white' : ''}`}
                            onClick={() => handleTabChange('/integration')}
                            onKeyDown={(event) => handleKeyPress(event, '/integration')}
                            tabIndex={0}
                            aria-pressed={activeTab === '/integration'}
                        >
                            <MdOutlineIntegrationInstructions className="text-2xl" />
                            <h3 className="text-base font-semibold">Integration</h3>
                        </button>

                        {/* Settings Tab */}
                        <button
                            className={`flex mb-2 justify-start items-center gap-4 dark:hover:bg-white hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ${activeTab === '/settings' ? 'bg-gray-900 text-white' : ''}`}
                            onClick={() => handleTabChange('/settings')}
                            onKeyDown={(event) => handleKeyPress(event, '/settings')}
                            tabIndex={0}
                            aria-pressed={activeTab === '/settings'}
                        >
                            <MdOutlineSettings className="text-2xl" />
                            <h3 className="text-base font-semibold">Settings</h3>
                        </button>

                        {/* More Tab */}
                        <button
                            className={`flex mb-2 justify-start items-center gap-4 dark:hover:bg-white hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ${activeTab === '/more' ? 'bg-gray-900 text-white' : ''}`}
                            onClick={() => handleTabChange('/more')}
                            onKeyDown={(event) => handleKeyPress(event, '/more')}
                            tabIndex={0}
                            aria-pressed={activeTab === '/more'}
                        >
                            <MdOutlineMoreHoriz className="text-2xl" />
                            <h3 className="text-base font-semibold">More</h3>
                        </button>

                        {/* Logout Tab */}
                        <button
                            className={`flex mb-2 justify-start items-center gap-4 border border-gray-200 dark:hover:bg-white hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ${activeTab === '/logout' ? 'bg-gray-900 text-white' : ''}`}
                            onClick={() => handleTabChange('/logout')}
                            onKeyDown={(event) => handleKeyPress(event, '/logout')}
                            tabIndex={0}
                            aria-pressed={activeTab === '/logout'}
                        >
                            <MdOutlineLogout className="text-2xl" />
                            <h3 className="text-base font-semibold">Logout</h3>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideNavbar;
