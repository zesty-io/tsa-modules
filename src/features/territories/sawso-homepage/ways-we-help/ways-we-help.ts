export class WaysToHelpModule extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="">
        <h2 class="tsa-title mb-6">${this.getAttribute('heading')}</h2>
        <div class="container">
          <div class="row row-cols-3">
            <div class="col mb-3">
              <tsa-service-card data-title="Health & HIV" data-image-src="https://placehold.co/370x200"></tsa-service-card>
            </div>
            <div class="col mb-3">
              <tsa-service-card data-title="Health & HIV" data-image-src="https://placehold.co/370x200"></tsa-service-card>
            </div>
            <div class="col mb-3">
              <tsa-service-card data-title="Health & HIV" data-image-src="https://placehold.co/370x200"></tsa-service-card>
            </div>
            <div class="col mb-3">
              <tsa-service-card data-title="Health & HIV" data-image-src="https://placehold.co/370x200"></tsa-service-card>
            </div>
            <div class="col mb-3">
              <tsa-service-card data-title="Health & HIV" data-image-src="https://placehold.co/370x200"></tsa-service-card>
            </div>
            <div class="col mb-3">
              <tsa-service-card data-title="Health & HIV" data-image-src="https://placehold.co/370x200"></tsa-service-card>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

export const WaysToHelp = () => {
  return`
    <tsa-ways-to-help heading="How The World Service Office Helps"></tsa-ways-to-help>
  `
}