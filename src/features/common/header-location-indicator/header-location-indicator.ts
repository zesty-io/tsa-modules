export class HeaderLocationIndicatorModule extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
        <div class="p-3 fw-semibold d-flex align-items-center bg-gray-lighter">
            <i class="bi bi-geo-alt"></i>
            <span class="fs-7 ms-2">${this.getAttribute("data-location")}</span>
        </div>
        `;
	}
}

export interface HeaderLocationIndicatorProps {
	location: string;
}

export const HeaderLocationInidicator = ({
	location,
}: HeaderLocationIndicatorProps) => {
	return `
        <tsa-header-location-indicator data-location="${location}"></tsa-header-location-indicator>
    `;
};
