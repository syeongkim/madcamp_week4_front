// 'use client';

// import { useState } from 'react';
// import Link from "next/link";
// import Logo from "../components/Logo";
// import Button from "../components/Button";
// import "./styles/login.css"; // Tailwind CSS는 별도로 구성되어야 함

// export default function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (event: { preventDefault: () => void; }) => {
//     console.log('submit');
//     event.preventDefault();

//     const res = await fetch('http://3.39.212.221:8080/login', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//     });

//     console.log(res);
//     const data = await res.json();
//     console.log(data);

//     if (res.ok) {
//       // 로그인 성공
//       window.location.href = '/dorms';
//     } else {
//       // 로그인 실패
//       setError(data.message);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       <div className="p-8 rounded-lg shadow-md w-full max-w-md">
//         <div className="mb-6 text-center">
//           <Logo />
//         </div>
//         <form onSubmit={handleSubmit} className="space-y-6 font-Animales">
//           <div>
//             <label htmlFor="username" className="block text-sm font-medium text-white">
//               Username
//             </label>
//             <input
//               id="username"
//               name="username"
//               type="text"
//               autoComplete="username"
//               required
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-white">
//               Password
//             </label>
//             <input
//               id="password"
//               name="password"
//               type="password"
//               autoComplete="current-password"
//               required
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//           </div>
//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <input
//                 id="remember_me"
//                 name="remember_me"
//                 type="checkbox"
//                 className="h-4 w-4 focus:ring-indigo-500 border-gray-300 rounded"
//               />
//               <label htmlFor="remember_me" className="ml-2 block text-sm text-white">
//                 Remember me
//               </label>
//             </div>
//           </div>
//           <div>
//             <Link href="/dorms">
//               <Button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600">
//                 Sign in
//               </Button>
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

'use client';

import { useState } from 'react';
import Link from "next/link";
import Logo from "../components/Logo";
import Button from "../components/Button";
import "./styles/login.css";

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    console.log('submit');
    event.preventDefault();

    try {
      const res = await fetch('http://3.39.212.221:8080/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
  
      console.log(res);
      const data = await res.json();
      console.log(data);
  
      if (res.ok) {
        // 로그인 성공
        window.location.href = '/dorms';
      } else {
        // 로그인 실패
        setError(data.message);
      }
    } catch (e) {
      console.log("error is", e);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="mb-6 text-center">
          <Logo />
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 font-Animales">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-white">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-white">
                Remember me
              </label>
            </div>
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <div>
            <Button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600">
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
