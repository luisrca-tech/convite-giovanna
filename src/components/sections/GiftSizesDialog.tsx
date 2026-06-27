import type { ReactNode } from 'react';
import { Footprints, Gem, Shirt, type LucideIcon } from 'lucide-react';
import { motion, type Variants } from 'motion/react';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

type GiftSizesDialogProps = {
	variants: Variants;
	animate: string;
	custom: number;
	className: string;
	iconClassName: string;
};

type SizeTip = {
	icon: LucideIcon;
	text: ReactNode;
};

const sizeTips: SizeTip[] = [
	{
		icon: Shirt,
		text: (
			<>
				Uso tamanho 36 em calças e shorts, e tamanho P nas demais peças. Adoro calças no modelo{' '}
				<em>wide leg</em>.
			</>
		),
	},
	{
		icon: Footprints,
		text: 'Calço número 37.',
	},
	{
		icon: Gem,
		text: 'Meus acessórios favoritos são na cor prata.',
	},
];

export default function GiftSizesDialog({
	variants,
	animate,
	custom,
	className,
	iconClassName,
}: GiftSizesDialogProps) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<motion.button
					type="button"
					variants={variants}
					initial="hidden"
					animate={animate}
					custom={custom}
					className={cn(
						className,
						'cursor-pointer border-0 bg-transparent p-0 font-inherit text-inherit',
					)}
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
						className={iconClassName}
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
				</motion.button>
			</DialogTrigger>

			<DialogContent
				className="max-w-[min(92vw,28rem)] gap-[calc(36*var(--s))] rounded-2xl border border-[#f6e7d3]/25 bg-[#7b0016] p-[calc(48*var(--s))] font-[family-name:var(--font-caladea)] text-[calc(38*var(--s))] leading-snug text-[#f6e7d3] ring-[#f6e7d3]/15 sm:max-w-md [&_[data-slot=dialog-close]]:text-[#f6e7d3] [&_[data-slot=dialog-close]]:hover:bg-[#f6e7d3]/10"
				showCloseButton
			>
				<DialogHeader className="gap-[calc(28*var(--s))] text-center">
					<DialogTitle className="font-[family-name:var(--font-caladea)] text-[calc(42*var(--s))] leading-snug font-normal text-[#f6e7d3]">
						Sua presença é o meu maior presente! 💖
					</DialogTitle>
					<DialogDescription className="text-[calc(38*var(--s))] leading-snug text-[#f6e7d3]/90">
						Mas, caso deseje me presentear, deixo algumas sugestões:
					</DialogDescription>
				</DialogHeader>

				<ul className="flex flex-col gap-[calc(28*var(--s))]">
					{sizeTips.map(({ icon: Icon, text }, index) => (
						<li key={index} className="flex items-start gap-[calc(20*var(--s))]">
							<Icon
								className="mt-[calc(4*var(--s))] size-[calc(52*var(--s))] shrink-0 text-[#f6e7d3]"
								strokeWidth={1.75}
								aria-hidden
							/>
							<span>{text}</span>
						</li>
					))}
				</ul>

				<p className="text-center text-[calc(38*var(--s))] leading-snug text-[#f6e7d3]">
					Todo carinho será recebido com muito amor! ✨
				</p>
			</DialogContent>
		</Dialog>
	);
}
