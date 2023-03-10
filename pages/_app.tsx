import { NextUIProvider, createTheme } from '@nextui-org/react';
import type { AppProps } from 'next/app';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

const lightTheme = createTheme({
	type: 'light',
});

const darkTheme = createTheme({
	type: 'dark',
});

function App({ Component, pageProps }: AppProps) {
	return (
		<NextThemesProvider
			defaultTheme='system'
			attribute='class'
			value={{
				light: lightTheme.className,
				dark: darkTheme.className,
			}}
		>
			<NextUIProvider>
				<Component {...pageProps} />
			</NextUIProvider>
		</NextThemesProvider>
	);
}

export default App;
