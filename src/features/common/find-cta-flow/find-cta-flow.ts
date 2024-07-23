export class FindCTAModule extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `


<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  <div class="offcanvas-header">
    <h5 class="offcanvas-title tsa-title">Find Help Near You</h5>
  </div>
  <div class="offcanvas-body">
    <div class="d-flex flex-column gap-5">
        <tsa-select options='[{"label":"[FPO] Homeless Shelter 1","value":"1"},{"label":"[FPO] Homeless Shelter 2","value":"2"}]' label='What service are you looking for?' placeholder='Select services'></tsa-select>
        <label class="input">
            <span>City or zip code</span>
            <input class="input--small" name="" value="" placeholder="Enter you city or zip code" type="text" false/>
        </label>

        <div>
          <i class="bi bi-crosshair"></i>
          <a  href="#"class="me-3 text-black text-decoration-none">Use my location</a>
        </div>
    </div>

  </div>
</div>
        `;
	}
}

export const FindCTA = () => {
	return `
    <button class="btn btn-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
        Find Help
    </button>
    <tsa-find-cta></tsa-find-cta>
    `;
};
