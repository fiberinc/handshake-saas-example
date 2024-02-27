'use client';

import { Check, Github, LoaderIcon } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const HANDSHAKE_HOST = 'http://localhost:3000'; // TODO
const APP_HOST = 'http://localhost:2000';

const HANDSHAKE_GITHUB_URL = `${HANDSHAKE_HOST}/api/auth/github/redirect?state=$&callback_uri=${APP_HOST}/integrations/done`;

export default function Page() {
	const searchParams = useSearchParams();

	const [isLoading, setIsLoading] = useState(false);

	function onClickConnectGithub() {
		setIsLoading(true);

		setTimeout(() => {
			setIsLoading(false);

			// alert('Fix HANDSHAKE_GITHUB_URL not defined');
			// return;

			window.open(HANDSHAKE_GITHUB_URL, '_blank');
		}, 1000);
	}

	useEffect(() => {
		console.log('params are', Object.fromEntries(searchParams.entries()));
	}, [searchParams]);

	return (
		<main className="w-full flex h-full flex-col gap-16 p-10">
			<div className="flex flex-col gap-5">
				<h3 className="text-3xl font-medium">Integrations</h3>
				<h3 className="text-lg">
					Connect SaaS Product to the other tools you use.
				</h3>
			</div>
			<div className="grid grid-cols-3 gap-6">
				<ConnectedButton name="Google" />
				<ConnectedButton name="Microsoft Teams" />
				<ConnectedButton name="Azure" />
				<ConnectedButton name="Hubspot" />
				<button className={BUTTON_CLS + ' '} onClick={onClickConnectGithub}>
					{isLoading ? <LoaderIcon /> : <Github />}
					Connect Github
				</button>
				<ConnectedButton name="Salesforce" />
				<ConnectedButton name="Outreach" />
			</div>
		</main>
	);
}

const BUTTON_CLS =
	'flex justify-center items-center flex-row px-5 gap-5 border enabled:hover:border-[#999] transition rounded-lg h-[80px] text-lg';

function ConnectedButton({ name }: { name: string }) {
	return (
		<button disabled className={BUTTON_CLS + ' opacity-40 cursor-not-allowed'}>
			<Check className="text-green-600" /> {name}
		</button>
	);
}
