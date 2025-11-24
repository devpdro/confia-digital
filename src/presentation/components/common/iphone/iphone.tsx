"use client";

import Image from "next/image";
import { CSSProperties } from "react";

import S from './iphone.module.scss';

interface IphoneProps {
    src?: string;
    alt?: string;
    className?: string;
    style?: CSSProperties;
}

export const Iphone = ({ src, alt = "iPhone screenshot", className, style }: IphoneProps) => {
    return (
        <div className={`${S.iphoneContainer} ${className || ''}`} style={style}>
            <div className={S.iphoneFrame}>
                <div className={S.iphoneScreen}>
                    {src && (
                        <Image
                            src={src}
                            alt={alt}
                            width={900}
                            height={1600}
                            className={S.iphoneImage}
                            priority
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Iphone;

