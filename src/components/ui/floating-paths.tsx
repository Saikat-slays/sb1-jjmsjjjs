import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 24 }, (_, i) => ({
        id: i,
        d: `M${-1000 - i * 40 * position},${-500 + i * 30} C${-800 - i * 40 * position},${-400 + i * 30} ${-600 - i * 40 * position},${-300 + i * 30} ${-400 - i * 40 * position},${-200 + i * 30} S${0 - i * 40 * position},${0 + i * 30} ${200 - i * 40 * position},${100 + i * 30} S${600 - i * 40 * position},${300 + i * 30} ${800 - i * 40 * position},${400 + i * 30} S${1200 - i * 40 * position},${600 + i * 30} ${1400 - i * 40 * position},${700 + i * 30}`,
        width: 1.5 + i * 0.15,
    }));

    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none">
            <svg
                className="w-full h-full text-white/[0.15]"
                viewBox="-1000 -500 2400 1200"
                preserveAspectRatio="xMidYMid slice"
                style={{ filter: 'blur(2px)' }}
            >
                <defs>
                    <linearGradient id={`gradient-${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--color-1))" stopOpacity="0.2" />
                        <stop offset="50%" stopColor="hsl(var(--color-3))" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="hsl(var(--color-5))" stopOpacity="0.2" />
                    </linearGradient>
                </defs>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke={`url(#gradient-${position})`}
                        strokeWidth={path.width}
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: [0, 1],
                            pathOffset: [0, 1],
                            opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                            duration: 15 + Math.random() * 10,
                            repeat: Infinity,
                            ease: "linear",
                            delay: path.id * 0.1,
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths() {
    return (
        <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-charcoal to-charcoal/90">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>
        </div>
    );
}