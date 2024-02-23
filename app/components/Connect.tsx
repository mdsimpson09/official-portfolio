import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm("mjvnrvgj"); 
  if (state.succeeded) {
    return <p className="text-lg font-semibold text-center text-green-500">Thanks for contacting me! I look forward to connecting with you!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 bg-white p-6 rounded-lg shadow-lg">
      <legend className="text-lg font-medium text-gray-200 mb-4">
        <h1 className='text-black white-outline text-2xl font-bold text-center mt-2 mb-4'>Contact Me</h1>
      </legend>

      <div className="formItem">
        <label htmlFor="name" className="block text-lg text-black mb-2">
          Name:
        </label>
        <input type="text" name="name" id="name" placeholder="Name*" required
          className="w-full px-4 py-2 bg-white border border-emerald-600 rounded-md shadow-sm focus:outline-none focus:ring-emerald-800 focus:border-emerald-800" />
      </div>

      <div className="formItem">
        <label htmlFor="email" className="block text-lg text-black mb-2">
          Email:
        </label>
        <input type="email" name="email" id="email" placeholder="Email*" required
          className="w-full px-4 py-2 bg-white border border-emerald-600 rounded-md shadow-sm focus:outline-none focus:ring-emerald-800 focus:border-emerald-800" />
        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500" />
      </div>

      <div className="formItem">
        <label htmlFor="message" className="block text-lg text-black mb-2">
          Message:
        </label>
        <textarea name="message" id="message" rows={5} placeholder="Message*" required
          className="w-full p-4 bg-white border border-emerald-600 rounded-md shadow-sm focus:outline-none focus:ring-emerald-800 focus:border-emerald-800"></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500" />
      </div>

      <button type="submit" disabled={state.submitting} className="py-2 px-4 bg-emerald-800 text-white font-bold rounded-md shadow-lg hover:bg-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-opacity-50">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
