export class FindCTAModule extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `


<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  <div class="offcanvas-header">
    <h5 class="offcanvas-title tsa-title">Find Help Near You</h5>
  </div>
  <div class="offcanvas-body">
    <div>
        <label class="input">
            <span>What service are you looking for?</span>
            <input class="input--small" name="" value="" placeholder="Placeholder" type="text" false/>
        </label>
        <label class="input">
            <span>City or zip code</span>
            <input class="input--small" name="" value="" placeholder="Placeholder" type="text" false/>
        </label>
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
