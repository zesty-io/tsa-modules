import "./hamburger-menu.scss";

export class HamburgerMenuModule extends HTMLElement {
	connectedCallback() {
		const buttons = this.querySelectorAll(".location-button");
		const accordionContainer = this.querySelector(
			"#hamburgerAccordionLinksContainer",
		);
		const linksContainer = this.querySelector("#hamburgerLinksContainer");
		const socialLinks = this.querySelectorAll("tsa-social-link");

		this.innerHTML = `
    <div
      id="hamburgerMenu"
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="hamburgerMenu"
      aria-labelledby="hamburgerMenuLabel"
    >
      <div class="d-flex p-2">
        <button
          type="button"
          class="btn-close ms-auto"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-header">
        <div class="d-flex gap-2 align-items-center">
          <i class="bi bi-geo-alt-fill"></i>
          <h5 class="offcanvas-title">${this.getAttribute("data-title")}</h5>
        </div>
      </div>
      <div class="offcanvas-body d-flex flex-column gap-4">
        <div
          id="hamburger-button-container"
          class="d-flex flex-column gap-3"
        ></div>

        <div id="bodyLinksContainer"></div>
        <tsa-switch labels="EN,ES"></tsa-switch>

        <div id="hamburger-social-links-container" class="d-flex justify-content-evenly mt-auto"></div>
      </div>
    </div>

		`;

		const buttonContainer = this.querySelector("#hamburger-button-container");

		for (let i = 0; i < buttons.length; i++) {
			buttonContainer?.appendChild(buttons[i]);
		}

		const bodyLinksContainer = this.querySelector("#bodyLinksContainer");
		const socialLinksContainer = this.querySelector(
			"#hamburger-social-links-container",
		);

		if (accordionContainer) bodyLinksContainer?.appendChild(accordionContainer);
		if (linksContainer) bodyLinksContainer?.appendChild(linksContainer);

		for (let i = 0; i < socialLinks.length; i++) {
			socialLinksContainer?.appendChild(socialLinks[i]);
		}
	}
}

export const HamburgerMenu = () => {
	return `
	<button class="btn btn-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#hamburgerMenu" aria-controls="hamburgerMenu">
        Toggle Menu
  </button>
	<tsa-burger-menu data-title="Salvation Army National">
      <button class="btn btn-dark btn-block location-button" type="button">
        Find my Local Salvation Army
      </button>
      <button class="btn btn-outline-dark  btn-block location-button" type="button">
        Find Thrift Stores
      </button>

    <div class="accordion accordion-flush" id="hamburgerAccordionLinksContainer">    
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOne">
          <button class="py-3 px-1 accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            Our Services
          </button>
        </h2>
        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
            <div class="d-flex flex-column gap-4">
              <a class="navigation-link link-underline-opacity-0 link-dark" href="#">Homeless Shelters</a>
              <a class="navigation-link link-underline-opacity-0 link-dark" href="#">Food Pantry</a>
              <a class="navigation-link link-underline-opacity-0 link-dark" href="#">Service Title</a>
              <a class="navigation-link link-underline-opacity-0 link-dark" href="#">Service Title</a>
              <a class="navigation-link link-underline-opacity-0 link-dark" href="#">Service Title</a>
            </div>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOne">
          <button class="py-3 px-1 accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            About Us
          </button>
        </h2>
        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
            <div class="d-flex flex-column gap-4">
              <a class="navigation-link link-underline-opacity-0 link-dark" href="#">About the Salvation Army</a>
              <a class="navigation-link link-underline-opacity-0 link-dark" href="#">Leadership</a>
              <a class="navigation-link link-underline-opacity-0 link-dark" href="#">History</a>
              <a class="navigation-link link-underline-opacity-0 link-dark" href="#">Employment Opporturnities</a>
              <a class="navigation-link link-underline-opacity-0 link-dark" href="#">Newsroom</a>
            </div>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOne">
          <button class="py-3 px-1 accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            Ways to Give
          </button>
        </h2>
        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
            <div class="d-flex flex-column gap-4">
              <a class="navigation-link link-underline-opacity-0 link-dark" href="#">View All</a>
              <a class="navigation-link link-underline-opacity-0 link-dark" href="#">Donate Money</a>
              <a class="navigation-link link-underline-opacity-0 link-dark" href="#">Donate Goods</a>
              <a class="navigation-link link-underline-opacity-0 link-dark" href="#">Volunteer</a>
              <a class="navigation-link link-underline-opacity-0 link-dark" href="#">Planned Giving, Wills, and Gift Annuties</a>
              <a class="navigation-link link-underline-opacity-0 link-dark" href="#">Become a Fundraiser</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ul class="list-group list-group-flush" id="hamburgerLinksContainer">
      <li class="list-group-item py-3 px-1">
        <a class="navigation-link link-underline-opacity-0 link-dark" href="#">Events</a>
      </li>
      <li class="list-group-item py-3 px-1">
        <a class="navigation-link link-underline-opacity-0 link-dark" href="#">Contact Us</a>
      </li>
    </ul>

    <tsa-social-link data-icon="https://mgfrnv8q.media.zestyio.com/ic_baseline-facebook.png" data-url="https://www.facebook.com"></tsa-social-link>
    <tsa-social-link data-icon="https://mgfrnv8q.media.zestyio.com/mdi_twitter.png" data-url="https://www.x.com"></tsa-social-link>
    <tsa-social-link data-icon="https://mgfrnv8q.media.zestyio.com/mdi_youtube.png" data-url="https://www.youtube.com"></tsa-social-link>
    <tsa-social-link data-icon="https://mgfrnv8q.media.zestyio.com/mdi_instagram.png" data-url="https://www.instagram.com"></tsa-social-link>
    <tsa-social-link data-icon="https://mgfrnv8q.media.zestyio.com/mdi_linkedin.png" data-url="https://www.linkedin.com"></tsa-social-link>

  </tsa-burger-menu>


	`;
};
