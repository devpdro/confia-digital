import React from 'react';

import S from './clean.module.scss';

interface CleanLayoutProps {
    children: React.ReactNode;
}

const CleanLayout: React.FC<CleanLayoutProps> = ({ children }) => {
    return (
        <div className={S.layout}>
            {children}
        </div>
    );
};

export default CleanLayout;