'use client';

import React, { useState, useEffect } from 'react';
import { CryptoCard } from '@/components/CryptoCard';
import { SearchBar } from '@/components/SearchBar';
import SortSelect from '@/components/SortSelect';
import { useCryptoData } from '@/hooks/useCryptoData';
import { motion } from 'framer-motion';

export default function HomePage() {
  const { cryptos, loading } = useCryptoData();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('market_cap_desc');
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 12;

  const filteredCryptos = cryptos
    .filter((crypto) => crypto.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === 'market_cap_desc') return b.market_cap - a.market_cap;
      if (sortOrder === 'market_cap_asc') return a.market_cap - b.market_cap;
      if (sortOrder === 'price_desc') return b.current_price - a.current_price;
      if (sortOrder === 'price_asc') return a.current_price - b.current_price;
      return 0;
    });

  const totalPages = Math.ceil(filteredCryptos.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCryptos = filteredCryptos.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <main className="p-6 space-y-10 max-w-[1400px] mx-auto">
      <h1 className="text-4xl font-extrabold text-center p-7">
        Welcome to the Crypto Dashboard 🪙
      </h1>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 p-6 rounded-xl shadow-sm">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <SortSelect value={sortOrder} onChange={setSortOrder} />
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <p>Loading crypto data...</p>
        </div>
      ) : (
        <>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {currentCryptos.length > 0 ? (
              currentCryptos.map((crypto) => (
                <motion.div
                  key={crypto.id}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <CryptoCard crypto={crypto} />
                </motion.div>
              ))
            ) : (
              <div className="text-center text-gray-500 col-span-full">
                <p>No results found 😢</p>
              </div>
            )}
          </motion.div>

          <div className="flex justify-center items-center gap-6 mt-8">
            <motion.button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-teal-600 text-white rounded disabled:opacity-50 hover:bg-teal-700 transition"
              whileTap={{ scale: 0.95 }}
            >
              Previous
            </motion.button>

            <span className="text-lg font-semibold">
              Page {currentPage} of {totalPages}
            </span>

            <motion.button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-teal-600 text-white rounded disabled:opacity-50 hover:bg-teal-700 transition"
              whileTap={{ scale: 0.95 }}
            >
              Next
            </motion.button>
          </div>
        </>
      )}
    </main>
  );
}
