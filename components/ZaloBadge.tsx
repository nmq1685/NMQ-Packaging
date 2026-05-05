'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export function ZaloBadge() {
    const [showContactMenu, setShowContactMenu] = useState(false)

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {showContactMenu && (
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.8 }}
                    className="absolute bottom-20 right-0 flex flex-col gap-3 mb-2"
                >
                    <a
                        href="https://zalo.me/0913937841"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 px-4 py-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-200 hover:border-blue-400 hover-wiggle"
                    >
                        <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center border-2 border-blue-200 group-hover:scale-110 transition-transform overflow-hidden">
                            <img
                                src="/images/zalo-icon.png"
                                alt="Zalo"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <span className="font-bold text-countryside-wood-800 pr-2 whitespace-nowrap">Chat Zalo</span>
                    </a>

                    <a
                        href="https://www.facebook.com/profile.php?id=61581726788757"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 px-4 py-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-200 hover:border-blue-600 hover-wiggle"
                    >
                        <div className="h-12 w-12 rounded-full bg-[#1877F2] flex items-center justify-center text-white font-bold text-lg border-2 border-[#0e5fc7] group-hover:scale-110 transition-transform">
                            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </div>
                        <span className="font-bold text-countryside-wood-800 pr-2 whitespace-nowrap">Facebook</span>
                    </a>
                </motion.div>
            )}

            <motion.button
                type="button"
                onClick={() => setShowContactMenu(!showContactMenu)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`h-16 w-16 rounded-full shadow-2xl flex items-center justify-center text-white font-bold text-2xl transition-all duration-300 border-4 ${showContactMenu
                        ? 'bg-countryside-wood-600 border-countryside-wood-700 rotate-45'
                        : 'bg-countryside-leaf-600 border-countryside-leaf-700 hover:bg-countryside-leaf-700 contact-bounce'
                    }`}
                aria-label="Liên hệ"
            >
                {showContactMenu ? (
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                    </svg>
                ) : (
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                )}
            </motion.button>
        </div>
    )
}
