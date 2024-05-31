'use client';

import { createContext, ReactNode } from 'react';

interface GitHubContextProps {
	gitHubUrl: string;
}

export const GitHubContext = createContext<GitHubContextProps | undefined>(
	undefined
);

interface GitHubProviderProps {
	children: ReactNode;
}

export const GitHubProvider = ({ children }: GitHubProviderProps) => {
	const gitHubUrl = 'https://github.com';

	return (
		<GitHubContext.Provider value={{ gitHubUrl }}>
			{children}
		</GitHubContext.Provider>
	);
};
