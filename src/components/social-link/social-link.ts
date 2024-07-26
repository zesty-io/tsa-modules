export class SocialLinkComponent extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
        <div>
            <a target="_blank" href="${this.getAttribute("data-url")}">
                <img src="${this.getAttribute("data-icon")}"/>
            </a>
        </div>
        `;
	}
}

export interface SocialLinkProps {
	icon: string;
	url: string;
}

export const SocialLink = ({ icon, url }: SocialLinkProps) => {
	return `
        <tsa-social-link data-icon="${icon}" data-url="${url}"></tsa-social-link>
    `;
};
