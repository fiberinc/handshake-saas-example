'use client';

import { Check, Sandwich } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
	const searchParams = useSearchParams();

	useEffect(() => {
		console.log('params are', Object.fromEntries(searchParams.entries()));
	}, [searchParams]);

	let inner;
	if (searchParams.get('error')) {
		inner = <FailurePage />;
	} else {
		inner = <SuccessPage />;
	}

	return (
		<main className="w-full flex h-full flex-col gap-4 p-10">
			<Link href="/integrations" className="mb-5">
				&larr; Go back
			</Link>
			{inner}
		</main>
	);
}

function SuccessPage() {
	const searchParams = useSearchParams();

	return (
		<>
			<h2 className="text-xl font-semibold flex flex-row gap-3">
				Integration succeded <Check />
			</h2>
			<p>SaaS Product is now authorized to access your Github account.</p>
			<p>Received params:</p>
			<pre>
				{JSON.stringify(Object.fromEntries(searchParams.entries()), null, 2)}
			</pre>
		</>
	);
}

function FailurePage() {
	const searchParams = useSearchParams();

	return (
		<>
			<h2 className="text-xl font-semibold flex flex-row gap-3">
				Integration failed <Sandwich />
			</h2>
			<p>Failed to connected to your Github account.</p>
			<p>Received params:</p>
			<pre>
				{JSON.stringify(Object.fromEntries(searchParams.entries()), null, 2)}
			</pre>
		</>
	);
}
