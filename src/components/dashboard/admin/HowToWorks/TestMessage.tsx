// "use client"
// import React, { useEffect, useRef, useState } from 'react';
// import { io, Socket } from 'socket.io-client';
// import axios from 'axios';

// export interface Message {
//   sender: string;
//   receiver: string;
//   text: string;
//   createdAt?: string;
// }

// const socket: Socket = io('http://localhost:5000'); // your backend socket URL

// export default function TestMessage() {
//   const [user] = useState('681dd22f53610eccb82eb0be'); // current user
//   const [receiver] = useState('681f2c1739e0e7022e6c870d'); // chatting with
//   const [text, setText] = useState('');
//   const [messages, setMessages] = useState<Message[]>([]);
//   const scrollRef = useRef<HTMLDivElement>(null);
// console.log({socket})
// socket.on('connect', () => {
//     console.log('✅ Socket connected:', socket.id);
//     // socket.emit('user-connected', user);
//   });
//   useEffect(() => {
   
      
//       socket.on('connect_error', (err) => {
//         console.error('❌ Connection error:', err.message);
//       });
//     socket.emit('user-connected', user);
//     socket.on('receive-message', (data: { from: string; message: string }) => {
//       if (data.from === receiver) {
//         setMessages(prev => [...prev, { sender: data.from, receiver: user, text: data.message }]);
//       }
//     });

//     // return () => {
//     //   socket.off('receive-message');
//     // };
//   }, [receiver, user]);

//   useEffect(() => {
//     const fetchMessages = async () => {
//       const res = await axios.post<Message[]>('http://localhost:5000/api/messages/history', {
//         user1: user,
//         user2: receiver,
//       });
//       setMessages(res.data);
//     };
//     fetchMessages();
//   }, [receiver]);

//   const sendMessage = () => {
//     if (!text.trim()) return;
//     const newMsg: Message = { sender: user, receiver, text };
//     console.log({newMsg})
//     socket.emit('send-message', newMsg);
//     setMessages(prev => [...prev, newMsg]);
//     setText('');
//   };

//   useEffect(() => {
//     scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [messages]);

//   return (
//     <div className="max-w-3xl mx-auto p-4 bg-blue-50 h-screen flex flex-col">
//       <h2 className="text-xl font-semibold mb-4">Chat with {receiver}</h2>
//       <div className="flex-1 overflow-y-auto space-y-2">
//         {messages.map((msg, idx) => (
//           <div key={idx} className={`flex ${msg.sender === user ? 'justify-end' : 'justify-start'}`}>
//             <div
//               className={`px-4 py-2 rounded-xl max-w-xs ${
//                 msg.sender === user ? 'bg-blue-500 text-white' : 'bg-gray-200'
//               }`}
//             >
//               {msg.text}
//             </div>
//           </div>
//         ))}
//         <div ref={scrollRef} />
//       </div>
//       <div className="mt-4 flex">
//         <input
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           className="flex-1 p-2 rounded border"
//           placeholder="Type your message..."
//         />
//         <button
//           onClick={sendMessage}
//           className="ml-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import axios from 'axios';

export interface Message {
  sender: string;
  receiver: string;
  text: string;
  createdAt?: string;
}

export interface Notification {
  _id?: string;
  title: string;
  message: string;
  type: string;
  createdAt?: string;
}

// Socket instance (outside to avoid multiple connections)
const socket: Socket = io('http://localhost:5000');
console.log({socket})
export default function TestMessage() {
  const [user] = useState('681dd22f53610eccb82eb0be'); // your user ID
  const [receiver] = useState('681f2c1739e0e7022e6c870d'); // recipient ID
  const [text, setText] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Socket events
  useEffect(() => {
    socket.emit('user-connected', user);
console.log('user-connected',{user})
    socket.on('receive-message', (data: { from: string; message: string }) => {
        console.log('receive-message', {data})
      if (data.from === receiver) {
        setMessages(prev => [...prev, { sender: data.from, receiver: user, text: data.message }]);
      }
    });

    socket.on('new-notification', (data: Notification) => {
        console.log(
          'new-notification',  {data}
        )
      setNotifications(prev => [...prev, data]);
      // You can replace this with a toast
      alert(`${data.title}: ${data.message}`);
    });

    return () => {
      socket.off('receive-message');
      socket.off('new-notification');
    };
  }, [receiver, user]);

  // Fetch chat history
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.post<Message[]>('http://localhost:5000/api/messages/history', {
          user1: user,
          user2: receiver,
        });
        setMessages(res.data);
      } catch (error) {
        console.error('Failed to fetch messages', error);
      }
    };
    fetchMessages();
  }, [receiver]);

  // Send new message
  const sendMessage = () => {
    if (!text.trim()) return;
    const newMsg: Message = { sender: user, receiver, text };
    socket.emit('send-message', newMsg);
    setMessages(prev => [...prev, newMsg]);
    setText('');
  };
  useEffect(() => {
    socket.on('connect', () => {
      socket.emit('user-connected', user);
      console.log('Socket connected and user emitted:', socket.id);
    });
  }, []);

  // Auto scroll
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="max-w-3xl mx-auto p-4 bg-blue-50 h-screen flex flex-col">
      <h2 className="text-xl font-semibold mb-4">Chat with {receiver}</h2>

      {/* Notifications */}
      {notifications.length > 0 && (
        <div className="mb-4 p-2 bg-yellow-100 border border-yellow-300 rounded">
          <h3 className="font-bold">Notifications</h3>
          <ul className="text-sm">
            {notifications.map((n, idx) => (
              <li key={idx}>🔔 {n.title} - {n.message}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-2">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.sender === user ? 'justify-end' : 'justify-start'}`}>
            <div className={`px-4 py-2 rounded-xl max-w-xs ${msg.sender === user ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={scrollRef} />
      </div>

      {/* Input */}
      <div className="mt-4 flex">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 p-2 rounded border"
          placeholder="Type your message..."
        />
        <button
          onClick={sendMessage}
          className="ml-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}
