export class FindCTAModule extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `


<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="d-flex p-2">
    <button type="button" class="btn-close ms-auto" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-header">
    <h5 class="offcanvas-title tsa-title">Find Help Near You</h5>
  </div>
  <div class="offcanvas-body">
    <form class="d-flex flex-column gap-5 h-100">
      <tsa-select options='[{"label":"[FPO] Homeless Shelter 1","value":"1"},{"label":"[FPO] Homeless Shelter 2","value":"2"}]' label='What service are you looking for?' placeholder='Select services' id="serviceSelect"></tsa-select>
      <label class="input">
        <span>City or zip code</span>
        <input class="input--small" name="" value="" placeholder="Enter your city or zip code" type="text" id="locationInput" />
      </label>
      <div>
        <i class="bi bi-crosshair"></i>
        <a href="#" class="me-3 text-black text-decoration-none">Use my location</a>
      </div>
      <div class="d-grid mt-auto">
        <button type="button" class="btn btn-dark" id="findHelpButton" disabled>Find Help</button>
      </div>
    </form>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const serviceSelect = document.getElementById('serviceSelect');
    const locationInput = document.getElementById('locationInput');
    const findHelpButton = document.getElementById('findHelpButton');

    function toggleButtonState() {
      if (locationInput.value.trim() !== '') {
        findHelpButton.disabled = false;
      } else {
        findHelpButton.disabled = true;
      }
    }

    serviceSelect.addEventListener('change', toggleButtonState);
    locationInput.addEventListener('input', toggleButtonState);
  });
</script>
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
