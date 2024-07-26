// Todo: Handle sublinks in navigation links

export class FooterModule extends HTMLElement {
	connectedCallback() {
		const socialLinks = this.querySelectorAll("tsa-social-link");
		const navigationLinks = this.querySelectorAll(".navigation-link");

		this.innerHTML = `
		<div id="footer-module" class="py-6 px-3">
			<div class="d-flex text-center justify-content-center flex-column gap-2">
				<h3 class="fs-5">Salvation Army Mission Statement</h1>
				<p class="text-center lh-base">${this.getAttribute("data-statement")}</p>
			</div>

			<hr />

			<div id="footer-navigation-links-container" class="d-flex flex-column gap-3"></div>

			<div class="my-5">
				<tsa-header-search></tsa-header-search>
			</div>

			<div id="footer-social-links-container" class="d-flex justify-content-evenly"></div>

			<div class="d-flex justify-content-evenly my-8">
				<div>
					<img
					src="https://mgfrnv8q.media.zestyio.com/image-3.png"
					alt="Location icon"
					class="me-1"
					/>
				</div>
				<div>
					<img
					src="https://mgfrnv8q.media.zestyio.com/image-4.png"
					alt="Location icon"
					class="me-1"
					/>
				</div>
				<div>
					<img
					src="https://mgfrnv8q.media.zestyio.com/image-5.png"
					alt="Location icon"
					class="me-1"
					/>
				</div>
    		</div>

			<hr />


			<div class="d-flex justify-content-between align-items-center">
				<div class="footer-policy text-black text-center">
				<p class="my-4 fs-7">The Salvation Army USA</p>
				<p class="fs-7 text-wrap">
					615 Slaters Lane, Alexandria, Virginia 22314 | 1-800-SAL-ARMY |
					<a
					class="link-dark"
					href=""
					>Privacy Policy</a
					>
					| © The Salvation Army National Headquarters
				</p>
				</div>
			</div>
		</div>

		`;

		const footerModule = this.querySelector("#footer-module") as HTMLElement;
		// This handles putting the social llinks to the container
		const socialLinksContainer = footerModule?.querySelector(
			"#footer-social-links-container",
		);
		for (let i = 0; i < socialLinks.length; i++) {
			socialLinksContainer?.appendChild(socialLinks[i]);
		}

		const navigationLinksContainer = footerModule?.querySelector(
			"#footer-navigation-links-container",
		);
		for (let i = 0; i < navigationLinks.length; i++) {
			navigationLinksContainer?.appendChild(navigationLinks[i]);
		}
	}
}

export type SocialLink = { url: string; icon: string };
export type NavigationLink = { url: string; name: string };

export interface FooterProps {
	statement: string;
	socialLinks: SocialLink[];
	navigationLinks: NavigationLink[];
}

export const Footer = ({
	statement,
	socialLinks,
	navigationLinks,
}: FooterProps) => {
	return `
  <tsa-footer data-statement="${statement}">
    ${socialLinks
			?.map(
				({ url, icon }) => `
      <tsa-social-link data-icon="${icon}" data-url="${url}"></tsa-social-link>
    `,
			)
			.join("")}

    ${navigationLinks
			?.map(
				({ url, name }) => `
				<a class="navigation-link link-underline-opacity-0 link-dark" href="${url}">${name}</a>
    `,
			)
			.join("")}
  </tsa-footer>
`;
};
