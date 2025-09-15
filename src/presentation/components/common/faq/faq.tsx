import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import S from './faq.module.scss';

export interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

export interface FAQProps {
    title: string;
    items: FAQItem[];
    className?: string;
}

const FAQ: React.FC<FAQProps> = ({
    title,
    items,
    className
}) => {
    const [openItems, setOpenItems] = useState<Set<string>>(new Set());

    const toggleItem = (id: string) => {
        const isCurrentlyOpen = openItems.has(id);
        
        setOpenItems(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });

        // Scroll suave para a pergunta apenas quando estiver abrindo
        if (!isCurrentlyOpen) {
            setTimeout(() => {
                const element = document.getElementById(`faq-item-${id}`);
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                        inline: 'nearest'
                    });
                }
            }, 100);
        }
    };

    return (
        <section className={`${S.section} ${className || ''}`}>
            <div className={S.container}>
                <div className={S.content}>
                    <h2 className={S.title}>{title}</h2>

                    <div className={S.faqList}>
                        {items.map((item) => {
                            const isOpen = openItems.has(item.id);

                            return (
                                <div
                                    key={item.id}
                                    id={`faq-item-${item.id}`}
                                    className={`${S.faqItem} ${isOpen ? S.faqItemOpen : ''}`}
                                >
                                    <button
                                        className={S.faqQuestion}
                                        onClick={() => toggleItem(item.id)}
                                        aria-expanded={isOpen}
                                        aria-controls={`faq-answer-${item.id}`}
                                    >
                                        <span className={S.questionText}>{item.question}</span>
                                        <motion.div
                                            className={`${S.icon} ${isOpen ? S.iconOpen : ''}`}
                                            animate={{
                                                rotate: isOpen ? 45 : 0,
                                                color: isOpen ? '#264f85' : '#264f85',
                                                scale: isOpen ? 1.1 : 1
                                            }}
                                            transition={{
                                                duration: 0.25,
                                                ease: [0.4, 0, 0.2, 1]
                                            }}
                                        >
                                            +
                                        </motion.div>
                                    </button>

                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                id={`faq-answer-${item.id}`}
                                                className={S.faqAnswer}
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{
                                                    height: 'auto',
                                                    opacity: 1,
                                                    transition: {
                                                        height: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
                                                        opacity: { duration: 0.25, delay: 0.1 }
                                                    }
                                                }}
                                                exit={{
                                                    height: 0,
                                                    opacity: 0,
                                                    transition: {
                                                        height: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] },
                                                        opacity: { duration: 0.2 }
                                                    }
                                                }}
                                                style={{ overflow: 'hidden' }}
                                                aria-hidden={false}
                                            >
                                                <motion.div
                                                    className={S.answerContent}
                                                    initial={{ y: -8, opacity: 0 }}
                                                    animate={{
                                                        y: 0,
                                                        opacity: 1,
                                                        transition: {
                                                            delay: 0.15,
                                                            duration: 0.25,
                                                            ease: [0.25, 0.46, 0.45, 0.94]
                                                        }
                                                    }}
                                                    exit={{
                                                        y: -8,
                                                        opacity: 0,
                                                        transition: {
                                                            duration: 0.15,
                                                            ease: [0.25, 0.46, 0.45, 0.94]
                                                        }
                                                    }}
                                                >
                                                    <p dangerouslySetInnerHTML={{ __html: item.answer }} />
                                                </motion.div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;