import React from 'react';
import S from './partners-stats.module.scss';

interface Stat {
    label: string;
    value: string;
}

interface PartnersStatsProps {
    className?: string;
}

const PartnersStats: React.FC<PartnersStatsProps> = ({ className }) => {
    const stats: Stat[] = [
        {
            label: 'Customers',
            value: '750K+'
        },
        {
            label: 'On Deposit',
            value: '$1.6B+'
        },
        {
            label: 'Loans Funded',
            value: '$16B+'
        }
    ];

    return (
        <section className={`${S.section} ${className || ''}`}>
            <div className={S.container}>
                <div className={S.statsGrid}>
                    {stats.map((stat, index) => (
                        <div key={index} className={S.statItem}>
                            <div className={S.statLabel}>{stat.label}</div>
                            <div className={S.statValue}>{stat.value}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnersStats;