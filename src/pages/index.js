import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import IntroSection from "@site/src/components/IntroSection";
import ProjectsSection from "@site/src/components/ProjectsSection";
import ContactSection from "@site/src/components/ContactSection";

export default function Home() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title={`${siteConfig.title}`}
			description="Hello, welcome to Jireh's writing portfolio!"
		>
			<main>
				<IntroSection />
				<ProjectsSection />
				<ContactSection />
			</main>
		</Layout>
	);
}
