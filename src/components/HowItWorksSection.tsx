"use client";

import React, { useRef, useEffect, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Steps data                                                         */
/* ------------------------------------------------------------------ */

const steps = [
	{
		title: "One Vault. One Truth.",
		shortTitle: "Secure Vault",
		description:
			"Upload your entire deal package — rent rolls, T12s, appraisals — into a secure, centralized vault. No more email attachments. No more version chaos.",
		localVideoSrc: "/Landing-Page/HowItWorksClips/Clip2.mp4",
	},
	{
		title: "Control Who Sees What",
		shortTitle: "Permissions",
		description:
			"Set granular permissions at the project and document level. Every team member, advisor or lender accesses only what they need.",
		localVideoSrc: "/Landing-Page/HowItWorksClips/Clip1.mp4",
	},
	{
		title: "Edit In-Browser. Roll Back Instantly.",
		shortTitle: "Edit & Version",
		description:
			"Edit documents directly in CapMatch. Every change is tracked automatically, and full version history means you can roll back in one click.",
		localVideoSrc: "/Landing-Page/HowItWorksClips/Clip3.mp4",
	},
	{
		title: "From Documents to Data — Automatically.",
		shortTitle: "AutoFill",
		description:
			"AutoFill extracts data directly from uploaded documents and cites its sources. Hover over any field to see exactly where the value came from.",
		localVideoSrc: "/Landing-Page/HowItWorksClips/Clip4.mp4",
	},
	{
		title: "AI Speed. Human Oversight.",
		shortTitle: "AI Agent",
		description:
			"Let AI draft the financial picture from your P&L and help resolve data conflicts in real time. You stay in control — refine, adjust, and verify every output.",
		localVideoSrc: "/Landing-Page/HowItWorksClips/Clip5.mp4",
	},
	{
		title: "Conversation Next to the Deal.",
		shortTitle: "Comms",
		description:
			"Tag team members in contextual chat. Schedule video meetings. Every call generates searchable transcripts and summaries automatically.",
		localVideoSrc: "/Landing-Page/HowItWorksClips/Clip6.mp4",
	},
	{
		title: "A Living OM. Not a Static PDF.",
		shortTitle: "Living OM",
		description:
			"Your Offering Memorandum generates automatically and stays current. Lenders can toggle scenarios, explore plans, and interrogate the deal directly.",
		localVideoSrc: "/Landing-Page/HowItWorksClips/Clip7.mp4",
	},
	{
		title: "Generate. Review. Finalize.",
		shortTitle: "Underwriting",
		description:
			"Produce lender-ready underwriting documents in minutes, not days. Every version is tracked, every change is logged. Airtight and audit-ready.",
		localVideoSrc: "/Landing-Page/HowItWorksClips/Clip8.mp4",
	},
];

/* ------------------------------------------------------------------ */
/*  Slide video                                                        */
/* ------------------------------------------------------------------ */

function SlideVideo({
	step,
	isActive,
	onProgress,
	onComplete,
}: {
	step: (typeof steps)[0];
	isActive: boolean;
	onProgress?: (pct: number) => void;
	onComplete?: () => void;
}) {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [progress, setProgress] = useState(0);

	const handleTimeUpdate = useCallback(() => {
		const video = videoRef.current;
		if (video && video.duration && video.duration > 0) {
			const pct = (video.currentTime / video.duration) * 100;
			setProgress(pct);
			onProgress?.(pct);
		}
	}, [onProgress]);

	const handleEnded = useCallback(() => {
		onComplete?.();
	}, [onComplete]);

	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;
		if (isActive) {
			video.currentTime = 0;
			setProgress(0);
			onProgress?.(0);
			video.play().catch(() => {});
		} else {
			video.pause();
		}
	}, [isActive, onProgress]);

	useEffect(() => {
		if (isActive && onComplete && !step.localVideoSrc) {
			const t = setTimeout(onComplete, 15000);
			return () => clearTimeout(t);
		}
	}, [step.localVideoSrc, isActive, onComplete]);

	if (step.localVideoSrc) {
		return (
			<div className="w-full rounded-lg overflow-hidden border border-gray-200 bg-black">
				<video
					ref={videoRef}
					className="w-full aspect-video object-cover"
					src={step.localVideoSrc}
					title={step.title}
					playsInline
					muted
					onTimeUpdate={handleTimeUpdate}
					onEnded={handleEnded}
				/>
				<div className="w-full h-[3px] bg-gray-800">
					<div
						className="h-full bg-blue-500 transition-[width] duration-150 ease-linear"
						style={{ width: `${progress}%` }}
					/>
				</div>
			</div>
		);
	}

	return (
		<div className="w-full aspect-video flex items-center justify-center bg-gray-100 text-gray-400 text-sm rounded-lg">
			Video coming soon
		</div>
	);
}

/* ------------------------------------------------------------------ */
/*  Tab navigation                                                     */
/* ------------------------------------------------------------------ */

function TabNav({
	activeIndex,
	onSelect,
}: {
	activeIndex: number;
	onSelect: (i: number) => void;
}) {
	const scrollRef = useRef<HTMLDivElement>(null);

	// Auto-scroll active tab into view
	useEffect(() => {
		const container = scrollRef.current;
		if (!container) return;
		const activeBtn = container.children[activeIndex] as HTMLElement | undefined;
		if (activeBtn) {
			activeBtn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
		}
	}, [activeIndex]);

	return (
		<div
			ref={scrollRef}
			className="flex gap-1 overflow-x-auto pb-1 scrollbar-hide"
			style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
		>
			{steps.map((step, i) => {
				const isActive = i === activeIndex;
				return (
					<button
						key={i}
						onClick={() => onSelect(i)}
						className={`
							flex-shrink-0 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 border
							${isActive
								? "bg-blue-50 text-blue-700 border-blue-200 shadow-sm"
								: "bg-white text-gray-500 border-gray-200 hover:bg-gray-50 hover:text-gray-700"
							}
						`}
					>
						{step.shortTitle}
					</button>
				);
			})}
		</div>
	);
}

/* ------------------------------------------------------------------ */
/*  Slide transition variants                                          */
/* ------------------------------------------------------------------ */

const slideVariants = {
	enter: (direction: number) => ({
		x: direction > 0 ? 40 : -40,
		opacity: 0,
	}),
	center: {
		x: 0,
		opacity: 1,
	},
	exit: (direction: number) => ({
		x: direction > 0 ? -40 : 40,
		opacity: 0,
	}),
};

/* ------------------------------------------------------------------ */
/*  Main section                                                       */
/* ------------------------------------------------------------------ */

export function HowItWorksSection() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [direction, setDirection] = useState(1);
	const [, setProgressPct] = useState(0);
	const containerRef = useRef<HTMLDivElement>(null);
	const [isInView, setIsInView] = useState(false);

	const total = steps.length;

	const goTo = useCallback(
		(index: number) => {
			setDirection(index > activeIndex ? 1 : -1);
			setActiveIndex(index);
			setProgressPct(0);
		},
		[activeIndex]
	);

	const handleVideoComplete = useCallback(() => {
		setDirection(1);
		setActiveIndex((prev) => (prev + 1) % total);
		setProgressPct(0);
	}, [total]);

	/* Intersection observer — only play when visible */
	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;
		const observer = new IntersectionObserver(
			([entry]) => setIsInView(entry.isIntersecting),
			{ threshold: 0.15 }
		);
		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	const step = steps[activeIndex];

	return (
		<div ref={containerRef} className="w-full space-y-4">
			{/* Tab navigation */}
			<TabNav activeIndex={activeIndex} onSelect={goTo} />

			{/* Carousel card */}
			<div
				className="w-full rounded-xl bg-white overflow-hidden border border-gray-200"
				style={{
					boxShadow: "0 4px 16px -2px rgba(0, 0, 0, 0.08), 0 1px 4px -1px rgba(0, 0, 0, 0.06)",
				}}
			>
				<AnimatePresence mode="wait" custom={direction}>
					<motion.div
						key={activeIndex}
						custom={direction}
						variants={slideVariants}
						initial="enter"
						animate="center"
						exit="exit"
						transition={{
							duration: 0.35,
							ease: [0.22, 1, 0.36, 1],
						}}
					>
						{/* Video */}
						<div className="p-3 pb-0">
							<SlideVideo
								step={step}
								isActive={isInView}
								onProgress={setProgressPct}
								onComplete={handleVideoComplete}
							/>
						</div>

						{/* Text */}
						<div className="p-4 pt-3">
							<h3 className="text-base font-semibold text-gray-900 mb-1.5">
								{step.title}
							</h3>
							<p className="text-sm text-gray-600 leading-relaxed">
								{step.description}
							</p>
						</div>
					</motion.div>
				</AnimatePresence>
			</div>

			{/* Slide counter + prev/next */}
			<div className="flex items-center justify-between">
				<button
					onClick={() => goTo((activeIndex - 1 + total) % total)}
					className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-gray-700 shadow-sm transition-colors"
					aria-label="Previous"
				>
					<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
				</button>

				<span className="text-xs text-gray-400 font-medium tabular-nums">
					{activeIndex + 1} / {total}
				</span>

				<button
					onClick={() => goTo((activeIndex + 1) % total)}
					className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-gray-700 shadow-sm transition-colors"
					aria-label="Next"
				>
					<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
				</button>
			</div>
		</div>
	);
}
