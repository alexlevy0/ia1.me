'use client';

import React, { FormEvent, useState } from 'react';
import { Card } from '@aws-amplify/ui-react';
import { generateRecipe } from './actions';
import { BookIndex } from '@/components/book/BookIndex';

export default function Home() {
	const [result, setResult] = useState<string>('');
	const [loading, setloading] = useState(false);

	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		setloading(true);
		event.preventDefault();

		try {
			const formData = new FormData(event.currentTarget);
			const data = await generateRecipe(formData);
			const recipe = typeof data === 'string' ? data : 'No data returned';
			setloading(false);
			setResult(recipe);
		} catch (e) {
			alert(`An error occurred: ${e}`);
		}
	};

	return (
		<main className="flex w-full h-full min-w-screen min-h-screen items-center m-auto ">
			<BookIndex />
		</main>
	);
}
