export class MissionStatementModule extends HTMLElement {
	connectedCallback() {
		const img = this.querySelector("img");

		this.innerHTML = /*HTML*/ `
            <div id="mission-statement" class="d-flex flex-column gap-4 flex-lg-row justify-content-lg-between p-lg-10 pe-lg-16">
                <div class="d-flex flex-column align-items-lg-start flex-shrink">
                    <h1 class="tsa-title">${this.getAttribute("data-title")}</h1>
                    <p class="tsa-text text-center text-lg-start text-lg-balance">${this.getAttribute("data-desc")}</p>
                </div>
                <div id="img-container" class="d-flex align-items-center justify-content-center">
                </div>
            </div>
        `;

		const container = this.querySelector("#img-container");

		if (img) container?.appendChild(img);
	}
}

export const MissionStatement = () => {
	return /*HTML */ `
    <tsa-mission-statement data-title="[FPO] Our Mission Statement" data-desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua">
        <img src="https://mgfrnv8q.media.zestyio.com/Vector.png" alt="Placeholder"/>
    </tsa-mission-statement>
    `;
};
