import { motion, type Variants } from 'motion/react';
import { useSectionActive } from '@/lib/useSectionActive';

const containerVariants: Variants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.65,
			delayChildren: 0.55,
		},
	},
};

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 40 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
	},
};

export default function InviteContent() {
	const [ref, isActive] = useSectionActive<HTMLDivElement>();

	return (
		<motion.div
			ref={ref}
			variants={containerVariants}
			initial="hidden"
			animate={isActive ? 'visible' : 'hidden'}
			className="relative z-10 flex h-full flex-col justify-between"
		>
			<motion.header variants={itemVariants} className="relative pt-[calc(70*var(--s))]">
				<h2 className="relative text-center font-[family-name:var(--font-caladea)] text-[calc(35*var(--s))] tracking-[0.18em] text-[#ff9cc6] uppercase drop-shadow-[0_0_8px_rgba(255,90,160,0.6)]">
					Você é nosso convidado<br />para uma noite inesquecível!
				</h2>
			</motion.header>

			<motion.div
				variants={itemVariants}
				className="relative flex min-h-0 flex-1 flex-col items-center justify-center"
			>
				<svg
					className="invite-arc-svg pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
					viewBox="0 0 1080 1080"
					preserveAspectRatio="xMidYMid meet"
					aria-hidden="true"
				>
					<defs>
						<filter id="invite-arc-glow-outer" x="-30%" y="-30%" width="160%" height="160%">
							<feGaussianBlur stdDeviation="10" result="blur" />
							<feMerge>
								<feMergeNode in="blur" />
								<feMergeNode in="SourceGraphic" />
							</feMerge>
						</filter>
						<filter id="invite-arc-glow-inner" x="-30%" y="-30%" width="160%" height="160%">
							<feGaussianBlur stdDeviation="6" result="blur" />
							<feMerge>
								<feMergeNode in="blur" />
								<feMergeNode in="SourceGraphic" />
							</feMerge>
						</filter>
					</defs>
					<ellipse
						className="invite-arc-stroke invite-arc-stroke--outer"
						cx="540"
						cy="540"
						rx="540"
						ry="520"
						fill="none"
						filter="url(#invite-arc-glow-outer)"
					/>
					<ellipse
						className="invite-arc-stroke invite-arc-stroke--inner"
						cx="540"
						cy="540"
						rx="540"
						ry="460"
						fill="none"
						filter="url(#invite-arc-glow-inner)"
					/>
				</svg>

				<div className="relative z-10 flex flex-col items-center gap-[calc(10*var(--s))]">
					<h1 className="invite-giovanna-neon relative font-[family-name:var(--font-great-vibes)] text-[calc(280*var(--s))] leading-none">
						Giovanna
					</h1>
					<div className="flex flex-col items-center gap-[calc(10*var(--s))]">
						<p className="invite-xv-neon relative font-[family-name:var(--font-kelin)] text-[calc(140*var(--s))] leading-none">
							XV
						</p>
						<img
							src="/images/giovanna/light-line.png"
							alt=""
							className="block w-[calc(520*var(--s))] h-auto"
						/>
					</div>
					<p className="relative text-center font-[family-name:var(--font-caladea)] text-[calc(52*var(--s))] leading-relaxed tracking-[0.14em] text-[#ff9cc6] uppercase drop-shadow-[0_0_10px_rgba(255,90,160,0.55)]">
						Meus 15 anos<br />E eu quero você lá!
					</p>
				</div>
			</motion.div>

			<motion.footer
				variants={itemVariants}
				className="relative pb-[calc(189*var(--s))] font-[family-name:var(--font-juana)]"
			>
				<svg
					viewBox="0 0 700 160"
					className="relative mx-auto block w-[calc(700*var(--s))] overflow-visible"
					aria-hidden="true"
				>
					<defs>
						<filter id="invite-sabado-neon" x="-40%" y="-40%" width="180%" height="180%">
							<feGaussianBlur stdDeviation="1.2" result="blur-tight" />
							<feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur-mid" />
							<feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur-wide" />
							<feMerge>
								<feMergeNode in="blur-wide" />
								<feMergeNode in="blur-mid" />
								<feMergeNode in="blur-tight" />
								<feMergeNode in="SourceGraphic" />
							</feMerge>
						</filter>
					</defs>
					<path id="sabado-arc" d="M 40 140 Q 350 -10 660 140" fill="none" />
					<text
						className="invite-sabado-neon font-[family-name:var(--font-juana)] uppercase"
						fill="#ffdfd9"
						fontSize="100"
						letterSpacing="12"
						textAnchor="middle"
						filter="url(#invite-sabado-neon)"
					>
						<textPath href="#sabado-arc" startOffset="50%">
							Sábado
						</textPath>
					</text>
				</svg>

				<div className="relative -mt-[calc(16*var(--s))] flex items-center justify-center gap-[calc(180*var(--s))]">
					<span className="invite-footer-neon flex flex-col items-center gap-[calc(14*var(--s))] text-[calc(52*var(--s))] tracking-[0.14em] uppercase">
						<img
							src="/images/giovanna/light-line.png"
							alt=""
							className="block w-[calc(280*var(--s))] h-auto"
						/>
						agosto
						<img
							src="/images/giovanna/light-line.png"
							alt=""
							className="block w-[calc(280*var(--s))] h-auto"
						/>
					</span>
					<span className="invite-footer-neon text-[calc(150*var(--s))] leading-none">15</span>
					<span className="invite-footer-neon flex flex-col items-center gap-[calc(14*var(--s))] text-[calc(52*var(--s))] tracking-[0.14em]">
						<img
							src="/images/giovanna/light-line.png"
							alt=""
							className="block w-[calc(280*var(--s))] h-auto"
						/>
						20:30
						<img
							src="/images/giovanna/light-line.png"
							alt=""
							className="block w-[calc(280*var(--s))] h-auto"
						/>
					</span>
				</div>

				<p className="invite-footer-neon relative mt-[calc(41*var(--s))] text-center text-[calc(50*var(--s))] tracking-[0.2em] uppercase">
					Espaço Green Place
				</p>

				<a
					href="#links"
					data-nav
					className="invite-footer-neon absolute right-[calc(30*var(--s))] bottom-0 flex items-center gap-2 text-[calc(36*var(--s))] tracking-[0.14em] uppercase"
					aria-label="Clique aqui para ir à próxima sessão"
				>
					<span>Clique aqui</span>
					<img
						src="/images/giovanna/arrow-right.png"
						alt=""
						className="w-[calc(110*var(--s))] rotate-90"
					/>
				</a>
			</motion.footer>
		</motion.div>
	);
}
