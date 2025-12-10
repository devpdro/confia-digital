"use client";

import React from "react";
import { ContainerScroll } from "src/components/ui/container-scroll-animation";
import Image from "next/image";
import { IMAGE } from "src/presentation/assets";
import { Button } from "src/presentation/components";
import Link from "next/link";

import S from './app-header.module.scss';

const AppHeader = () => {
    return (
        <section className={S.section}>
            <ContainerScroll
                titleComponent={
                    <div className={S.titleContent}>
                        <h1 className={S.title}>
                            Gerencie seu capital de giro direto pelo app
                        </h1>
                    </div>
                }
            >
                <Image
                    src={IMAGE.APP_HEADER.src}
                    alt="Banco Confia Capital - Banco digital no celular"
                    height={720}
                    width={1400}
                    className={S.appImage}
                    unoptimized
                />
            </ContainerScroll>
        </section>
    );
};

export default AppHeader;

