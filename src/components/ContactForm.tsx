import React, { useState } from 'react';
import { sendEmail } from '../services/emailService';

export const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await sendEmail(form.name, form.email, form.message);
      setForm({ name: '', email: '', message: '' });
      setSent(true);
      setTimeout(() => setSent(false), 4000);
    } catch {
      alert('Помилка при надсиланні.');
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow max-w-md"
    >
      <label className="block">
        <span className="text-sm">Ім'я</span>
        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="mt-1 block w-full border rounded p-2"
          required
        />
      </label>
      <label className="block mt-4">
        <span className="text-sm">Email</span>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="mt-1 block w-full border rounded p-2"
          required
        />
      </label>
      <label className="block mt-4">
        <span className="text-sm">Повідомлення</span>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="mt-1 block w-full border rounded p-2"
          rows={4}
          required
        />
      </label>
      <div className="mt-4 flex items-center gap-3">
        <button
          type="submit"
          className="px-5 py-2 bg-indigo-600 text-white rounded"
        >
          Надіслати
        </button>
        {sent && (
          <span className="text-sm text-green-600">✅ Відправлено!</span>
        )}
      </div>
    </form>
  );
};
