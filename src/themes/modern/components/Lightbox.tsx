import React, { useEffect, useState, useCallback } from 'react';

/**
 * A lightweight image lightbox for the modern theme.
 *
 * Any <img> inside .article__body becomes clickable — clicking opens the
 * full-size image in a dark overlay, centered, with a close button. ESC or
 * click-outside closes. No library dependency.
 */
const Lightbox: React.FC = () => {
	const [src, setSrc] = useState<string | null>(null);
	const [alt, setAlt] = useState('');

	const close = useCallback(() => setSrc(null), []);

	useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			if (!target) return;
			// Only trigger for images inside an article body
			const img = target.closest('.article__body img') as HTMLImageElement | null;
			if (!img) return;
			e.preventDefault();
			setSrc(img.currentSrc || img.src);
			setAlt(img.alt || '');
		};
		document.addEventListener('click', handleClick);
		return () => document.removeEventListener('click', handleClick);
	}, []);

	useEffect(() => {
		if (!src) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') close();
		};
		document.body.style.overflow = 'hidden';
		document.addEventListener('keydown', onKey);
		return () => {
			document.body.style.overflow = '';
			document.removeEventListener('keydown', onKey);
		};
	}, [src, close]);

	if (!src) return null;

	return (
		<div
			className="lightbox"
			onClick={close}
			role="dialog"
			aria-modal="true"
			aria-label={alt || 'Image viewer'}
		>
			<button className="lightbox__close" onClick={close} aria-label="Close image">
				<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<path d="M18 6L6 18M6 6l12 12" />
				</svg>
			</button>
			<img
				className="lightbox__image"
				src={src}
				alt={alt}
				onClick={(e) => e.stopPropagation()}
			/>
		</div>
	);
};

export default Lightbox;
