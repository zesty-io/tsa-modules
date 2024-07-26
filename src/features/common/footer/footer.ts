export class FooterModule extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<div>
			<div>
				<h1>Salvation Army Mission Statement</h1>
				<p>${this.getAttribute("data-statement")}</p>
			</div>

			<div>
				
			</div>

			<div>
		    	<tsa-header-search></tsa-header-search>
			</div>

			<div id="footer-social-links-container">		
			</div>
		</div>
		`;

		const socialLinksContainer = this.querySelector(
			"#footer-social-links-container",
		);

		const socialLinks = this.querySelectorAll("tsa-social-links");

		for (let i = 0; i < socialLinks.length; i++) {
			socialLinksContainer?.appendChild(socialLinks[i]);
		}
	}
}

export const Footer = () => {
	return `
		<tsa-footer>
			<tsa-social-link data-icon="https://mgfrnv8q.media.zestyio.com/ic_baseline-facebook.png" data-url="https://www.facebook.com"></tsa-social-link>
		</tsa-footer>
    `;
};
