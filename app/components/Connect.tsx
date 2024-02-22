// import React from 'react';

// interface ContactFormProps {}

// const ContactForm: React.FC<ContactFormProps> = () => {
//   return (
//     <form action="https://formspree.io/f/mjvdppnz" method="POST" className="flex flex-col space-y-4 bg-pink-200 p-6 rounded-lg shadow-lg">
//       <legend className="text-lg font-medium text-gray-700 mb-4">
//         <em>* Please fill out all of the fields below:</em>
//       </legend>

//       <div className="formItem">
//         <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
//           <span className="highlightPink">Name:</span>
//         </label>
//         <input type="text" name="name" id="name" placeholder="Name*" required
//           className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500" />
//       </div>

//       <div className="formItem">
//         <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
//           <span className="highlightPink">Email:</span>
//         </label>
//         <input type="email" name="email" id="email" placeholder="Email*" required
//           className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500" />
//       </div>

//       <div className="formItem">
//         <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
//           <span className="highlightPink">Message:</span>
//         </label>
//         <textarea name="message" id="message" rows={5} placeholder="Message*" required
//           className="w-full p-4 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"></textarea>
//       </div>

//       <button type="submit" className="py-2 px-4 bg-pink-500 text-white font-bold rounded-md shadow-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50">
//         Send Message
//       </button>
//     </form>
//   );
// };

// export default ContactForm;

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm("mjvnrvgj"); 
  if (state.succeeded) {
    return <p className="text-lg font-semibold text-center text-green-500">Thanks for contacting me! I look forward to connecting with you!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 bg-pink-200 p-6 rounded-lg shadow-lg">
      <legend className="text-lg font-medium text-gray-700 mb-4">
        <h1 className='text black text-2xl font-bold text-center mt-2 mb-4'>Contact Me</h1>
      </legend>

      <div className="formItem">
        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
          Name:
        </label>
        <input type="text" name="name" id="name" placeholder="Name*" required
          className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500" />
      </div>

      <div className="formItem">
        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
          Email:
        </label>
        <input type="email" name="email" id="email" placeholder="Email*" required
          className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500" />
        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500" />
      </div>

      <div className="formItem">
        <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
          Message:
        </label>
        <textarea name="message" id="message" rows={5} placeholder="Message*" required
          className="w-full p-4 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500" />
      </div>

      <button type="submit" disabled={state.submitting} className="py-2 px-4 bg-pink-500 text-white font-bold rounded-md shadow-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
