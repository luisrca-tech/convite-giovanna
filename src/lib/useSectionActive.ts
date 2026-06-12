import { useEffect, useRef, useState } from 'react';

/**
 * Tracks whether the closest <section> ancestor is the currently-active one,
 * by observing the `inert` attribute that the navigation script toggles.
 *
 * Returns `[ref, isActive]`: attach the ref to any element inside the section.
 */
export function useSectionActive<T extends HTMLElement>(): [React.RefObject<T | null>, boolean] {
	const ref = useRef<T>(null);
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		const section = ref.current?.closest('section');
		if (!section) return;

		const update = () => setIsActive(!section.hasAttribute('inert'));
		update();

		const observer = new MutationObserver(update);
		observer.observe(section, { attributes: true, attributeFilter: ['inert'] });

		return () => observer.disconnect();
	}, []);

	return [ref, isActive];
}
