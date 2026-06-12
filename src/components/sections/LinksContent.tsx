import { motion, type Variants } from 'motion/react';
import { useSectionActive } from '@/lib/useSectionActive';

const iconClass = 'h-[calc(170*var(--s))] w-[calc(170*var(--s))] shrink-0 text-[#f6e7d3]';
const linkClass = 'flex flex-col items-center gap-[calc(28*var(--s))] text-center';
const bottomLinkClass = `${linkClass} h-full`;
const bottomIconClass = `${iconClass} mt-auto`;

// Stagger order is decoupled from JSX order: each child uses `custom={n}` to
// pick its slot in the sequence (globe first, then CTAs clockwise from top-left).
const SECTION_DELAY = 0.55;
const STEP = 0.45;

const ctaVariants: Variants = {
	hidden: { opacity: 0, y: 30 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: SECTION_DELAY + i * STEP,
			duration: 1.05,
			ease: [0.22, 1, 0.36, 1],
		},
	}),
};

const globeVariants: Variants = {
	hidden: { opacity: 0, scale: 0.65 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delay: SECTION_DELAY,
			duration: 1.2,
			ease: [0.22, 1, 0.36, 1],
		},
	},
};

// Disco / "balada" loop: pulsing multi-color glow + subtle scale beat.
const discoFilter = [
	'drop-shadow(0 0 18px rgba(255,255,255,0.5)) drop-shadow(0 0 36px rgba(255,90,160,0.55))',
	'drop-shadow(0 0 36px rgba(255,255,255,0.95)) drop-shadow(0 0 70px rgba(255,0,116,0.85))',
	'drop-shadow(0 0 14px rgba(255,255,255,0.35)) drop-shadow(0 0 30px rgba(255,200,90,0.55))',
	'drop-shadow(0 0 30px rgba(255,255,255,0.75)) drop-shadow(0 0 60px rgba(170,90,255,0.7))',
	'drop-shadow(0 0 20px rgba(255,255,255,0.55)) drop-shadow(0 0 40px rgba(90,200,255,0.65))',
];

export default function LinksContent() {
	const [ref, isActive] = useSectionActive<HTMLDivElement>();
	const state = isActive ? 'visible' : 'hidden';

	return (
		<div
			ref={ref}
			className="relative z-10 flex h-full flex-col justify-between px-[calc(70*var(--s))] pb-[calc(150*var(--s))] pt-[calc(260*var(--s))] font-[family-name:var(--font-caladea)] text-[calc(47*var(--s))] leading-snug text-[#f6e7d3]"
		>
			<div className="flex items-start justify-between">
				<motion.a
					variants={ctaVariants}
					initial="hidden"
					animate={state}
					custom={1}
					href="#"
					className={linkClass}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className={iconClass}
					>
						<circle cx="12" cy="12" r="10" />
						<path d="m9 12 2 2 4-4" />
					</svg>
					<span>
						Confirme<br />sua presença
					</span>
				</motion.a>

				<motion.a
					variants={ctaVariants}
					initial="hidden"
					animate={state}
					custom={2}
					href="https://www.google.com/maps/place/Green+Place+Festas+e+Eventos/@-16.7173295,-49.2954542,17z/data=!3m1!4b1!4m6!3m5!1s0x935ef6d9eba6afe7:0xc823dc1a4e5d98e5!8m2!3d-16.7173295!4d-49.2954542!16s%2Fg%2F11g_qx1yp"
					target="_blank"
					rel="noopener noreferrer"
					className={linkClass}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className={iconClass}
					>
						<path
							fillRule="evenodd"
							d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0Zm-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
						/>
					</svg>
					<span>Localização</span>
				</motion.a>
			</div>

			<motion.div
				variants={globeVariants}
				initial="hidden"
				animate={state}
				className="mx-auto w-[calc(560*var(--s))]"
			>
				<motion.img
					src="/images/giovanna/globo.png"
					alt="Globo de espelhos"
					className="block w-full"
					animate={{
						filter: discoFilter,
						scale: [1, 1.03, 1, 1.025, 1],
						rotate: 360,
					}}
					transition={{
						filter: { duration: 2.2, repeat: Infinity, ease: 'easeInOut' },
						scale: { duration: 2.2, repeat: Infinity, ease: 'easeInOut' },
						rotate: { duration: 14, repeat: Infinity, ease: 'linear' },
					}}
				/>
			</motion.div>

			<div className="flex items-stretch justify-between">
				<motion.a
					variants={ctaVariants}
					initial="hidden"
					animate={state}
					custom={3}
					href="#"
					className={bottomLinkClass}
				>
					<span>
						Quer me dar um<br />mimo? Aqui estão<br />meus tamanhos
					</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
						className={bottomIconClass}
					>
						<path
							fill="currentColor"
							d="M4 8h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"
						/>
						<path
							fill="currentColor"
							d="M5 13h14v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-6Z"
						/>
						<path
							stroke="currentColor"
							strokeWidth="2"
							d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"
						/>
						<path stroke="#7b0016" strokeWidth="2" d="M12 8v13" />
					</svg>
				</motion.a>

				<motion.a
					variants={ctaVariants}
					initial="hidden"
					animate={state}
					custom={4}
					href="#"
					className={bottomLinkClass}
				>
					<span>
						Deixe um recado<br />para Gigi
					</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
						className={bottomIconClass}
					>
						<path
							fill="currentColor"
							d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z"
						/>
						<path
							stroke="currentColor"
							strokeWidth="2"
							d="M2 6h4M2 10h4M2 14h4M2 18h4"
						/>
						<path stroke="#7b0016" strokeWidth="1.5" d="M8 7h8M8 11h8M8 15h5" />
						<path
							stroke="#7b0016"
							strokeWidth="1.5"
							strokeLinejoin="round"
							d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
						/>
					</svg>
				</motion.a>
			</div>
		</div>
	);
}
