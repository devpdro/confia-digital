import S from './partners-stats.module.scss';

interface Stat {
    label: string;
    value: string;
}

interface PartnersStatsProps {
    className?: string;
}

const stats: Stat[] = [
    {
        label: 'Parceiros Ativos',
        value: '200+'
    },
    {
        label: 'Volume Securitizado',
        value: 'R$ 1,8B+'
    },
    {
        label: 'Operações Realizadas',
        value: '1.200+'
    }
];


const PartnersStats: React.FC<PartnersStatsProps> = ({ className }) => {
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