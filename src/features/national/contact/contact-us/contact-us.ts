export class ContactUsModule extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
            <div class="container bg-secondary py-10 px-4">
                <div>
                    <h2 class="fs-5 text-center">[FPO] Can't find your answer?</h2>
                    <h1 class="tsa-title  mb-10 mt-6">${this.getAttribute("data-title")}</<h1>
                </div>

                <div class="bg-light p-6 fs-3 mb-10">
                    <h3 class="fw-semibold mb-3">${this.getAttribute("data-desc-title")}</h3>
                    <p class="lh-lg">${this.getAttribute("data-desc-content")}</p>
                </div>

                <form class="gap-6 row">
                    <label class="input">
                        <span>I am contacting you because: *</span>
                        <input class="input--medium" name="" value="" placeholder="I want to donate items/schedule a pick up" type="text" false/>
                    </label>
                    <label class="input">
                        <span>Email Address</span>
                        <input class="input--medium" name="" value="" placeholder="donateddaily@example.com" type="text" false/>
                    </label>
                    <label class="input">
                        <span>Phone Number</span>
                        <input class="input--medium" name="" value="" placeholder="222-222-2222" type="text" false/>
                    </label>

                    <div class="d-flex flex-column pw-4 gap-4 fs-4">
                        <span class="fw-semibold fs-3">I want to be contacted by: *</span>
                        <label>
                            <input class="input--medium" name="contacted" value="" placeholder="222-222-2222" type="radio" false/>
                            <span>Phone Number</span>
                        </label>
                        <label>
                            <input class="input--medium" name="contacted" value="" placeholder="222-222-2222" type="radio" false/>
                            <span>Email</span>
                        </label>
                        <label>
                            <input class="input--medium" name="contacted" value="" placeholder="222-222-2222" type="radio" false/>
                            <span>Either is fine</span>
                        </label>
                    </div>
                     <label class="input">
                        <span>State*</span>
                        <input class="input--medium" name="" value="" placeholder="------" type="text" false/>
                        <small class="fs-4">Please note: we only collect personal information to be able to respond to your request.</small>
                    </label>
                     <label class="input">
                        <span>ZIP Code*</span>
                        <input class="input--medium" name="" value="" placeholder="88888" type="text" false/>
                        <small class="fs-4">Please note: we only collect personal information to be able to respond to your request.</small>
                    </label>
                    <label class="textarea">
                        <span>Your Message</span>
                        <textarea class="textarea--medium" name="" placeholder="Write a message" type="text"></textarea>
                    </label>
                    <button type="button" class="btn btn--medium btn--dark--fill w-100">Submit</button>
                </form>

            </div>
        `;
	}
}

export const ContactUs = () => {
	return `<tsa-contact-us data-title="CONTACT US" data-desc-title="Services offered by your Local Salvation Army" 
                data-desc-content="To receive assistance regarding food, shelter and rent/utility assistance, please contact your local Salvation Army. Find your closest location on an interactive map. You can also call 1-800-SAL-ARMY to get information about your local Salvation Army and how they might be able to assist.">
    </tsa-contact-us>`;
};
