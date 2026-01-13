import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconChevronDown } from '@tabler/icons-react';
import S from './legal-page-section.module.scss';

interface LegalPageSectionProps {
    id: string;
    number?: number;
    title: string;
    content: React.ReactNode;
    defaultExpanded?: boolean;
}

export const LegalPageSection: React.FC<LegalPageSectionProps> = ({
    id,
    number,
    title,
    content,
    defaultExpanded = false
}) => {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded);

    const toggleSection = () => {
        setIsExpanded(prev => !prev);
    };

    return (
        <section id={id} className={`${S.section} ${isExpanded ? S.sectionOpen : ''}`}>
            <button
                className={S.sectionHeader}
                onClick={toggleSection}
                aria-expanded={isExpanded}
            >
                <h2 className={S.sectionTitle}>
                    {number ? `${number}. ` : ''}{title}
                </h2>
                <motion.div
                    className={S.chevron}
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <IconChevronDown size={20} stroke={2} />
                </motion.div>
            </button>
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                        style={{ overflow: 'hidden' }}
                    >
                        <div className={S.sectionContent}>
                            {content}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

