
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function SadbargPhones() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 text-gray-900 p-4 md:p-8">
      <header className="text-center mb-10">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          className="text-5xl font-bold mb-2 text-blue-800"
        >
          Sadbarg Phones
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.2, duration: 0.6 }} 
          className="text-xl text-gray-700"
        >
          Новые и б/у телефоны в Душанбе, Таджикистан
        </motion.p>
      </header>

      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center">Каталог телефонов</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.4 }} 
            className="border rounded-2xl p-4 shadow-lg bg-white"
          >
            <img
              src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-1.jpg"
              alt="iPhone 13 Pro"
              className="w-full h-48 object-cover rounded-xl mb-3"
            />
            <h3 className="font-semibold text-lg">iPhone 13 Pro</h3>
            <p className="text-sm text-gray-600">Состояние: Новый</p>
            <p className="text-sm font-bold mt-1">Цена: 10,000 TJS</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 0.1, duration: 0.4 }} 
            className="border rounded-2xl p-4 shadow-lg bg-white"
          >
            <img
              src="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s21-5g-1.jpg"
              alt="Samsung Galaxy S21"
              className="w-full h-48 object-cover rounded-xl mb-3"
            />
            <h3 className="font-semibold text-lg">Samsung Galaxy S21</h3>
            <p className="text-sm text-gray-600">Состояние: Б/у</p>
            <p className="text-sm font-bold mt-1">Цена: 6,500 TJS</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 0.2, duration: 0.4 }} 
            className="border rounded-2xl p-4 shadow-lg bg-white"
          >
            <img
              src="https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-12-pro-1.jpg"
              alt="Redmi Note 12 Pro"
              className="w-full h-48 object-cover rounded-xl mb-3"
            />
            <h3 className="font-semibold text-lg">Redmi Note 12 Pro</h3>
            <p className="text-sm text-gray-600">Состояние: Новый</p>
            <p className="text-sm font-bold mt-1">Цена: 3,800 TJS</p>
          </motion.div>
        </div>
      </section>

      <section className="mt-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Связаться с нами</h2>
        <p className="text-md mb-2">📍 Адрес: Dushanbe, Sadbarg</p>
        <p className="text-md mb-4">
          📱 WhatsApp: <a href="https://wa.me/992884777771" className="text-blue-600 underline">+992884777771</a>
        </p>
        <Button className="bg-green-600 hover:bg-green-700 text-white text-lg px-6 py-3 rounded-2xl">
          Написать в WhatsApp
        </Button>
      </section>
    </div>
  );
}
