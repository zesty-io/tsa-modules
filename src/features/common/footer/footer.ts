// Todo: Handle sublinks in navigation links

export class FooterModule extends HTMLElement {
	connectedCallback() {
		const socialLinks = this.querySelectorAll("tsa-social-link");
		const navigationLinks = this.querySelectorAll(".navigation-link");

		this.innerHTML = `
		<div id="footer-module" class="py-6 px-3 px-lg-18">
			<div class="d-flex text-center justify-content-center flex-column gap-2">
				<h3 class="fs-5">Salvation Army Mission Statement</h1>
				<p class="text-center lh-base">${this.getAttribute("data-statement")}</p>
			</div>

			<hr />
			<div id="footer-links-container" class="row">
				<div id="footer-navigation-links-container" class="col d-flex flex-column gap-lg-2 gap-3"></div>
				<div class="d-lg-flex d-none flex-column col gap-lg-2 gap-3">
					<a class="link-dark navigation-link d-flex" style="width:fit-content;" href="#">Salvationarymusa.org</a>
					<a class="link-dark navigation-link link-underline-opacity-0 d-flex" style="width:fit-content;" href="#">Satruck.org</a>
					<a class="link-dark navigation-link link-underline-opacity-0 d-flex" style="width:fit-content;" href="#">Disaster.Salvationarmyusa.org</a>
					<a class="link-dark navigation-link link-underline-opacity-0 d-flex" style="width:fit-content;" href="#">Kroccenter.org</a>
				</div>

				<div class="col">
					<div class="my-sm-5 my-lg-0">
						<tsa-header-search></tsa-header-search>
					</div>

					<div id="footer-social-links-container" class="d-flex justify-content-evenly ms-lg-3 justify-content-lg-start gap-lg-10"></div>
				</div>
			</div>

				<div class="d-flex d-lg-none justify-content-evenly my-8">
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


			<div class="d-flex justify-content-lg-between align-items-center">
				<div class="d-flex justify-content-between align-items-center">
					<div class="footer-policy text-black text-center text-lg-start">
					<p class="my-4 fs-7">The Salvation Army USA</p>
					<p>
						<div class="row">
            				<div class="col-12 fs-7">
                				615 Slaters Lane, Alexandria, Virginia 22314 | 1-800-SAL-ARMY |
           					</div>
            				<div class="col-12 fs-7">
                				<a class="link-dark" href="">Privacy Policy</a> | © The Salvation Army National Headquarters
            				</div>
       					</div>
					</p>
					</div>
				</div>

				<div class="d-lg-flex d-none justify-content-lg-end gap-8">
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
      <tsa-social-link data-icon="${icon}" data-url="${url}"></tsa-social-link>`,
			)
			.join("")}
    ${navigationLinks
			?.map(
				({ url, name }) => `
				<a class="navigation-link link-underline-opacity-0 link-dark d-flex" style="width:fit-content;" href="${url}">${name}</a>`,
			)
			.join("")}
  </tsa-footer>
  
`;
};
