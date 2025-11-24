"use client";

import { useRef, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DottedMap from "dotted-map";
import Image from "next/image";

import S from './world-map.module.scss';

interface MapProps {
    dots?: Array<{
        start: { lat: number; lng: number; label?: string };
        end: { lat: number; lng: number; label?: string };
    }>;
    lineColor?: string;
    showLabels?: boolean;
    labelClassName?: string;
    animationDuration?: number;
    loop?: boolean;
}

export const WorldMap = ({
    dots = [],
    lineColor = "#010553",
    showLabels = true,
    labelClassName = "text-sm",
    animationDuration = 2,
    loop = true
}: MapProps) => {
    const svgRef = useRef<SVGSVGElement>(null);
    const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

    const map = useMemo(
        () => new DottedMap({ height: 100, grid: "diagonal" }),
        []
    );

    const svgMap = useMemo(
        () => map.getSVG({
            radius: 0.22,
            color: "#01055330",
            shape: "circle",
            backgroundColor: "#ffffff",
        }),
        [map]
    );

    const projectPoint = (lat: number, lng: number) => {
        const x = (lng + 180) * (800 / 360);
        const y = (90 - lat) * (400 / 180);
        return { x, y };
    };

    const createCurvedPath = (
        start: { x: number; y: number },
        end: { x: number; y: number }
    ) => {
        const midX = (start.x + end.x) / 2;
        const midY = Math.min(start.y, end.y) - 50;
        return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
    };

    // Calculate animation timing
    const staggerDelay = 0.3;
    const totalAnimationTime = dots.length * staggerDelay + animationDuration;
    const pauseTime = 2;
    const fullCycleDuration = totalAnimationTime + pauseTime;

    return (
        <div className={S.mapContainer}>
            <Image
                src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
                className={S.mapImage}
                alt="world map"
                height="495"
                width="1056"
                draggable={false}
                priority
            />

            <svg
                ref={svgRef}
                viewBox="0 0 800 400"
                className={S.mapSvg}
                preserveAspectRatio="xMidYMid meet"
            >
                <defs>
                    <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="white" stopOpacity="0" />
                        <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
                        <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
                        <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </linearGradient>

                    <filter id="glow">
                        <feMorphology operator="dilate" radius="0.5" />
                        <feGaussianBlur stdDeviation="1" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {dots.map((dot, i) => {
                    const startPoint = projectPoint(dot.start.lat, dot.start.lng);
                    const endPoint = projectPoint(dot.end.lat, dot.end.lng);

                    const startTime = (i * staggerDelay) / fullCycleDuration;
                    const endTime = (i * staggerDelay + animationDuration) / fullCycleDuration;
                    const resetTime = totalAnimationTime / fullCycleDuration;

                    return (
                        <g key={`path-group-${i}`}>
                            <motion.path
                                d={createCurvedPath(startPoint, endPoint)}
                                fill="none"
                                stroke={lineColor}
                                strokeWidth="2"
                                strokeOpacity="0.8"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={loop ? {
                                    pathLength: [0, 0, 1, 1, 0],
                                    opacity: [0, 0, 0.8, 0.8, 0],
                                } : {
                                    pathLength: 1,
                                    opacity: 0.8
                                }}
                                transition={loop ? {
                                    duration: fullCycleDuration,
                                    times: [0, startTime, endTime, resetTime, 1],
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                    repeatDelay: 0,
                                } : {
                                    duration: animationDuration,
                                    delay: i * staggerDelay,
                                    ease: "easeInOut",
                                }}
                            />

                        </g>
                    );
                })}

                {dots.map((dot, i) => {
                    const startPoint = projectPoint(dot.start.lat, dot.start.lng);
                    const endPoint = projectPoint(dot.end.lat, dot.end.lng);

                    return (
                        <g key={`points-group-${i}`}>
                            {/* Start Point */}
                            <g key={`start-${i}`}>
                                <motion.g
                                    onHoverStart={() => setHoveredLocation(dot.start.label || `Location ${i}`)}
                                    onHoverEnd={() => setHoveredLocation(null)}
                                    className={S.pointCursor}
                                    whileHover={{ scale: 1.2 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    <circle
                                        cx={startPoint.x}
                                        cy={startPoint.y}
                                        r="5"
                                        fill={lineColor}
                                        filter="url(#glow)"
                                        className={S.pointShadow}
                                    />
                                    <motion.circle
                                        cx={startPoint.x}
                                        cy={startPoint.y}
                                        r="4"
                                        fill={lineColor}
                                        opacity={0.5}
                                        animate={{
                                            r: [4, 16, 16],
                                            opacity: [0.5, 0, 0],
                                        }}
                                        transition={{
                                            duration: 2.5,
                                            repeat: Infinity,
                                            ease: "easeOut",
                                            delay: 0,
                                        }}
                                    />
                                    <motion.circle
                                        cx={startPoint.x}
                                        cy={startPoint.y}
                                        r="4"
                                        fill={lineColor}
                                        opacity={0.3}
                                        animate={{
                                            r: [4, 20, 20],
                                            opacity: [0.3, 0, 0],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeOut",
                                            delay: 0.5,
                                        }}
                                    />
                                </motion.g>

                                {showLabels && dot.start.label && (
                                    <motion.g
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 * i + 0.3, duration: 0.5 }}
                                        className={S.pointerEventsNone}
                                    >
                                        <foreignObject
                                            x={startPoint.x - 50}
                                            y={startPoint.y - 35}
                                            width="100"
                                            height="30"
                                            className={S.labelBlock}
                                        >
                                            <div className={S.labelContainer}>
                                                <span className={S.label}>
                                                    {dot.start.label}
                                                </span>
                                            </div>
                                        </foreignObject>
                                    </motion.g>
                                )}
                            </g>

                            {/* End Point */}
                            <g key={`end-${i}`}>
                                <motion.g
                                    onHoverStart={() => setHoveredLocation(dot.end.label || `Destination ${i}`)}
                                    onHoverEnd={() => setHoveredLocation(null)}
                                    className={S.pointCursor}
                                    whileHover={{ scale: 1.2 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    <circle
                                        cx={endPoint.x}
                                        cy={endPoint.y}
                                        r="5"
                                        fill={lineColor}
                                        filter="url(#glow)"
                                        className={S.pointShadow}
                                    />
                                    <motion.circle
                                        cx={endPoint.x}
                                        cy={endPoint.y}
                                        r="4"
                                        fill={lineColor}
                                        opacity={0.5}
                                        animate={{
                                            r: [4, 16, 16],
                                            opacity: [0.5, 0, 0],
                                        }}
                                        transition={{
                                            duration: 2.5,
                                            repeat: Infinity,
                                            ease: "easeOut",
                                            delay: 0.5,
                                        }}
                                    />
                                    <motion.circle
                                        cx={endPoint.x}
                                        cy={endPoint.y}
                                        r="4"
                                        fill={lineColor}
                                        opacity={0.3}
                                        animate={{
                                            r: [4, 20, 20],
                                            opacity: [0.3, 0, 0],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeOut",
                                            delay: 1,
                                        }}
                                    />
                                </motion.g>

                                {showLabels && dot.end.label && (
                                    <motion.g
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 * i + 0.5, duration: 0.5 }}
                                        className={S.pointerEventsNone}
                                    >
                                        <foreignObject
                                            x={endPoint.x - 50}
                                            y={endPoint.y - 35}
                                            width="100"
                                            height="30"
                                            className={S.labelBlock}
                                        >
                                            <div className={S.labelContainer}>
                                                <span className={S.label}>
                                                    {dot.end.label}
                                                </span>
                                            </div>
                                        </foreignObject>
                                    </motion.g>
                                )}
                            </g>
                        </g>
                    );
                })}
            </svg>

            {/* Mobile Tooltip */}
            <AnimatePresence>
                {hoveredLocation && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className={S.tooltip}
                    >
                        {hoveredLocation}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default WorldMap;

