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

			<div>
			
			</div>
		</div>
		`;
	}
}

export const Footer = () => {
	return `
		<tsa-footer></tsa-footer>
    `;
};
