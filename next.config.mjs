/** @type {import('next').NextConfig} */
import { withExpo } from "@expo/next-adapter";

const nextConfig = withExpo({
	reactStrictMode: true,
	swcMinify: true,
	transpilePackages: [
		"react-native",
		"expo",
		// Add more React Native / Expo packages here...
	],
	experimental: {
		forceSwcTransforms: true,
	},
});

export default nextConfig;
