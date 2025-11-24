"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useCallback, useEffect, useRef, useState } from "react";

import S from './globe.module.scss';

const GLOBE_CONFIG: COBEOptions = {
    width: 800,
    height: 800,
    onRender: () => { },
    devicePixelRatio: 2,
    phi: 0,
    theta: 0.3,
    dark: 0,
    diffuse: 0.4,
    mapSamples: 16000,
    mapBrightness: 1.2,
    baseColor: [1, 1, 1],
    markerColor: [1 / 255, 5 / 255, 83 / 255], // #010553
    glowColor: [1, 1, 1],
    markers: [
        { location: [-23.5505, -46.6333], size: 0.1 }, // São Paulo
        { location: [-22.9068, -43.1729], size: 0.08 }, // Rio de Janeiro
        { location: [-15.7975, -47.8919], size: 0.08 }, // Brasília
        { location: [-19.9167, -43.9345], size: 0.07 }, // Belo Horizonte
        { location: [-30.0346, -51.2177], size: 0.07 }, // Porto Alegre
        { location: [-3.7172, -38.5433], size: 0.07 }, // Fortaleza
        { location: [-12.9714, -38.5014], size: 0.07 }, // Salvador
        { location: [-22.9056, -47.0608], size: 0.08 }, // Campinas
    ],
};

interface GlobeProps {
    className?: string;
    config?: COBEOptions;
}

export const Globe = ({ className, config = GLOBE_CONFIG }: GlobeProps) => {
    let phi = 0;
    let width = 0;
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pointerInteracting = useRef<number | null>(null);
    const pointerInteractionMovement = useRef(0);
    const [r, setR] = useState(0);

    const updatePointerInteraction = (value: number | null) => {
        pointerInteracting.current = value;
        if (canvasRef.current) {
            canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
        }
    };

    const updateMovement = (clientX: number) => {
        if (pointerInteracting.current !== null) {
            const delta = clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            setR(delta / 200);
        }
    };

    const onRender = useCallback(
        (state: Record<string, any>) => {
            if (!pointerInteracting.current) phi += 0.005;
            state.phi = phi + r;
            state.width = width * 2;
            state.height = width * 2;
        },
        [r]
    );

    const onResize = () => {
        if (canvasRef.current) {
            width = canvasRef.current.offsetWidth;
        }
    };

    useEffect(() => {
        window.addEventListener("resize", onResize);
        onResize();

        const globe = createGlobe(canvasRef.current!, {
            ...config,
            width: width * 2,
            height: width * 2,
            onRender,
        });

        setTimeout(() => {
            if (canvasRef.current) {
                canvasRef.current.style.opacity = "1";
            }
        }, 100);

        return () => {
            globe.destroy();
            window.removeEventListener("resize", onResize);
        };
    }, [config, onRender]);

    return (
        <div className={`${S.globeContainer} ${className || ''}`}>
            <canvas
                className={S.globeCanvas}
                ref={canvasRef}
                onPointerDown={(e) =>
                    updatePointerInteraction(
                        e.clientX - pointerInteractionMovement.current
                    )
                }
                onPointerUp={() => updatePointerInteraction(null)}
                onPointerOut={() => updatePointerInteraction(null)}
                onMouseMove={(e) => updateMovement(e.clientX)}
                onTouchMove={(e) =>
                    e.touches[0] && updateMovement(e.touches[0].clientX)
                }
            />
        </div>
    );
};

export default Globe;


