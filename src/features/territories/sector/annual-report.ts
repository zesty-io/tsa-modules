import "./annual-reports.scss";

export class AnnualReportModule extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
            <div>
                <div class="mb-8">
                    <h1 class="tsa-title mb-6">${this.getAttribute("data-title")}</h1>
                    <p class="tsa-text text-center">${this.getAttribute("data-desc")}</p>
                </div>

                <div class="row">
                    <div class="col-md-6 mb-6 order-md-1">
                        <img src="https://placehold.co/370x250" />
                    </div>

                    <div class="d-md-flex align-items-center justify-content-center flex-column col-md-6 order-md-0">
                        <h2 class="fw-semibold fs-1 mb-6">${this.getAttribute("data-year")}</h2>
                        <button class="btn btn--medium btn--dark--fill">${this.getAttribute("data-year-btn")}</button>
                    </div>
                </div>
            </div>
        `;
	}
}

export const AnnualReport = () => {
	return `<tsa-annual-reports data-title="World Service Office Annual Reports" 
    data-desc="Description of annual reports  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut 
    labore et dolore magna aliqua. Ut"
    data-year="2023 Annual Report" data-year-btn="Read the 2023 Annual Report">
    </tsa-annual-reports>`;
};
