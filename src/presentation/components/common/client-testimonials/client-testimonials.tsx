import React, { useState } from 'react';
import S from './client-testimonials.module.scss';

interface Testimonial {
    id: string;
    quote: string;
    author: {
        name: string;
        title: string;
        company: string;
        avatar: string;
    };
    readMoreLink?: string;
}

interface ClientTestimonialsProps {
    className?: string;
}

const ClientTestimonials: React.FC<ClientTestimonialsProps> = ({ className }) => {
    const [showMore, setShowMore] = useState(false);
    
    const testimonials: Testimonial[] = [
        {
            id: '1',
            quote: 'Bluevine is made for people who live on the go. Since switching, we\'ve saved countless hours on mobile check deposits.',
            author: {
                name: 'Tara P.',
                title: 'VP & Co-owner',
                company: 'Timberdoodle Co.',
                avatar: '/api/placeholder/60/60'
            },
            readMoreLink: '#'
        },
        {
            id: '2',
            quote: 'Bluevine\'s dashboard is clean and simple, with all the features I need. And I can manage my checking accounts and bills from one place.',
            author: {
                name: 'Michael T.',
                title: 'Founder',
                company: 'Tech & Services',
                avatar: '/api/placeholder/60/60'
            },
            readMoreLink: '#'
        },
        {
            id: '3',
            quote: 'The connectivity made it worth it — the ability to quickly draw straight to my business checking account and make repayments directly from there. It\'s seamless and I can see everything. I liked the ability to have it all in one place.',
            author: {
                name: 'Graydon Y.',
                title: 'Tech Lead',
                company: 'Tech Startup',
                avatar: '/api/placeholder/60/60'
            },
            readMoreLink: '#'
        },
        {
            id: '4',
            quote: 'Every month, I get a notification that I met the interest requirements, so I know that as money is coming into my account, I\'m also earning interest on it.',
            author: {
                name: 'Grace D.',
                title: 'Owner',
                company: 'Retail Business',
                avatar: '/api/placeholder/60/60'
            },
            readMoreLink: '#'
        },
        {
            id: '5',
            quote: 'The customer service is exceptional. They\'re always available when I need them and provide solutions quickly.',
            author: {
                name: 'Robert K.',
                title: 'CEO',
                company: 'Manufacturing Co.',
                avatar: '/api/placeholder/60/60'
            },
            readMoreLink: '#'
        },
        {
            id: '6',
            quote: 'Bluevine has transformed how we handle our business finances. The integration with our accounting software is seamless.',
            author: {
                name: 'Sarah M.',
                title: 'CFO',
                company: 'Digital Agency',
                avatar: '/api/placeholder/60/60'
            },
            readMoreLink: '#'
        },
        {
            id: '7',
            quote: 'The line of credit feature has been a game-changer for our cash flow management. We can access funds instantly when needed.',
            author: {
                name: 'David L.',
                title: 'Founder',
                company: 'E-commerce Store',
                avatar: '/api/placeholder/60/60'
            },
            readMoreLink: '#'
        },
        {
            id: '8',
            quote: 'What impressed me most is the transparency. No hidden fees, clear terms, and straightforward processes.',
            author: {
                name: 'Jennifer W.',
                title: 'Owner',
                company: 'Consulting Firm',
                avatar: '/api/placeholder/60/60'
            },
            readMoreLink: '#'
        },
        {
            id: '9',
            quote: 'The mobile app is incredibly user-friendly. I can manage everything on the go, which is perfect for my busy schedule.',
            author: {
                name: 'Carlos R.',
                title: 'Director',
                company: 'Construction LLC',
                avatar: '/api/placeholder/60/60'
            },
            readMoreLink: '#'
        }
    ];
    
    const visibleTestimonials = showMore ? testimonials : testimonials.slice(0, 3);

    return (
        <section className={`${S.section} ${className || ''}`}>
            <div className={S.container}>
                <div className={S.testimonialsGrid}>
                    {visibleTestimonials.map((testimonial) => (
                        <div key={testimonial.id} className={S.testimonialCard}>
                            <div className={S.quoteIcon}>
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                                </svg>
                            </div>
                            
                            <blockquote className={S.quote}>
                                {testimonial.quote}
                            </blockquote>
                            
                            <div className={S.authorInfo}>
                                <div className={S.authorAvatar}>
                                    <img 
                                        src={testimonial.author.avatar} 
                                        alt={testimonial.author.name}
                                        className={S.avatarImage}
                                    />
                                </div>
                                <div className={S.authorDetails}>
                                    <div className={S.authorName}>{testimonial.author.name}</div>
                                    <div className={S.authorTitle}>{testimonial.author.title}</div>
                                    <div className={S.authorCompany}>{testimonial.author.company}</div>
                                </div>
                            </div>
                            
                            {testimonial.readMoreLink && (
                                <a href={testimonial.readMoreLink} className={S.readMoreLink}>
                                    Read the story
                                </a>
                            )}
                        </div>
                    ))}
                </div>
                
                <div className={S.showMoreContainer}>
                    <button 
                        className={S.showMoreButton}
                        onClick={() => setShowMore(!showMore)}
                    >
                        {showMore ? 'Ver menos' : 'Ver mais'}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ClientTestimonials;