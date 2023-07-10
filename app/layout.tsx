import './globals.css';
import { Nunito } from 'next/font/google';

// Default set for html head title
export const metadata = {
	title: 'Airbnb Superior Clone',
	description: 'Airbnb Webapp',
};

// Set google font type
const font = Nunito({ subsets: ['latin'] });

// Default set for html body
export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={font.className}>{children}</body>
		</html>
	);
}
