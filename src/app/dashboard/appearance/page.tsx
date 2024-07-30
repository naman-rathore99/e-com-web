// import React, { useState, useEffect } from 'react';

// const ThemeSwitch: React.FC = () => {
//   const [theme, setTheme] = useState<'light' | 'dark'>('light');

//   useEffect(() => {
//     if (theme === 'dark') {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [theme]);

//   const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>, newTheme: 'light' | 'dark') => {
//     if (event.key === 'Enter' || event.key === ' ') {
//       setTheme(newTheme);
//     }
//   };

//   return (
//     <div>
//       <p className="font-medium mb-1 text-gray-500 dark:text-gray-400">Looking for?</p>
//       <div className="flex gap-x-4">
//         {/* Light Theme Option */}
//         <div
//           role="button"
//           tabIndex={0}
//           className={`relative flex w-56 items-center justify-center rounded-xl px-4 py-3 font-medium cursor-pointer ${
//             theme === 'light' ? 'bg-gray-50 text-gray-700' : 'bg-gray-800 text-white'
//           }`}
//           onClick={() => setTheme('light')}
//           onKeyDown={(event) => handleKeyPress(event, 'light')}
//         >
//           <input
//             className="peer hidden"
//             type="radio"
//             name="theme"
//             id="theme-light"
//             checked={theme === 'light'}
//             readOnly
//             aria-hidden="true"
//           />
//           <label
//             className="peer-checked:border-blue-400 peer-checked:bg-blue-200 absolute top-0 h-full w-full rounded-xl border"
//             htmlFor="theme-light"
//           ></label>
//           <div className="peer-checked:border-transparent peer-checked:bg-blue-400 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-blue-400 ring-offset-2"></div>
//           <span className="pointer-events-none z-10">Light</span>
//         </div>
//         {/* Dark Theme Option */}
//         <div
//           role="button"
//           tabIndex={0}
//           className={`relative flex w-56 items-center justify-center rounded-xl px-4 py-3 font-medium cursor-pointer ${
//             theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-700'
//           }`}
//           onClick={() => setTheme('dark')}
//           onKeyDown={(event) => handleKeyPress(event, 'dark')}
//         >
//           <input
//             className="peer hidden"
//             type="radio"
//             name="theme"
//             id="theme-dark"
//             checked={theme === 'dark'}
//             readOnly
//             aria-hidden="true"
//           />
//           <label
//             className="peer-checked:border-blue-400 peer-checked:bg-blue-200 absolute top-0 h-full w-full rounded-xl border"
//             htmlFor="theme-dark"
//           ></label>
//           <div className="peer-checked:border-transparent peer-checked:bg-blue-400 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-blue-400 ring-offset-2"></div>
//           <span className="pointer-events-none z-10">Dark</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ThemeSwitch;


import React from 'react'

const appearance = () => {
  return (
    <div>appearance</div>
  )
}

export default appearance