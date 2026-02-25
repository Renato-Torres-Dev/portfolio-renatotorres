"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface ContactProps {
    dict: any;
}

export default function ContactSection({ dict }: ContactProps) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative z-10 px-6 py-32 bg-[#0B0E14]">
        <div className="max-w-7xl mx-auto">
            <h2 className="mb-12 text-4xl font-bold text-white text-center">Contato</h2>

            {submitted && (
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8 text-center text-green-400"
                >
                Mensagem enviada com sucesso!
                </motion.div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <motion.input
                type="text"
                name="name"
                placeholder={dict.contact.name}
                value={form.name}
                onChange={handleChange}
                required
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-lg bg-white/5 px-4 py-3 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />

                <motion.input
                type="email"
                name="email"
                placeholder={dict.contact.email}
                value={form.email}
                onChange={handleChange}
                required
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="rounded-lg bg-white/5 px-4 py-3 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />

                <motion.textarea
                name="message"
                placeholder={dict.contact.message}
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-lg bg-white/5 px-4 py-3 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />

                <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-indigo-500 px-8 py-4 text-white font-semibold text-lg transition cursor-pointer"
                >
                {dict.contact.submit}
                </motion.button>
            </form>
        </div>
    </section>
  );
}
