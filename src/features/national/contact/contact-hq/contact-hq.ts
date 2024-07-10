export class ContactHQModule extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
        <div class="p-6 bg-gray-lighter">
            <h1 class="tsa-title mb-8">The Salvation Army HQ</h1>
            <div class="d-flex flex-column gap-2 mx-10 d-lg-none">
                <div>
                    <i class="bi bi-telephone fs-4 me-3"></i>       
                    <span class="fw-normal  fs-4">1-800-SAL-ARMY</span>
                </div>
                <div>
                    <i class="bi bi-mailbox fs-4 me-3"></i>     
                    <a class="fw-normal fs-4 text-dark" href='/'>Send us an email</a>
                </div>
                <div class="">
                    <i class="bi bi-geo-alt fs-4 me-3"></i> 
                    <span class="fw-normal fs-4">615 Slaters Lane, Alexandria, VA 22314</span>
                </div>
            </div>

            <div class="d-lg-flex flex-column gap-2 mx-10 d-none">
                <div class="d-flex align-items-center">
                    <i class="bi bi-clock fs-4 me-3"></i>
                    <div>
                        <span class="fw-semibold fs-4 me-3">General Hours</span>
                        <span class="fw-normal fs-4">Open | Closes 12  <i class="bi bi-chevron-right"></i></span>
                    </div>     
                </div>
                <div class="d-flex align-items-center">
                    <i class="bi bi-telephone fs-4 me-3"></i>
                    <div>
                        <span class="fw-semibold fs-4 me-3">Phone</span>
                        <span class="fw-normal fs-4">1-800-SAL-ARMY</span>
                    </div>     
                </div>
                <div>
                    <i class="bi bi-mailbox fs-4 me-3"></i>     
                    <a class="text-dark" href='/'><span class="fs-4 fw-normal">Send us an email</span></a>
                </div>
               <div class="d-flex align-items-start">
                    <div class="pt-2">
                        <i class="bi bi-geo-alt fs-4 me-3"></i> 
                    </div>
                    <div>
                        <div>
                            <div>
                                <span class="fw-semibold fs-4 me-3">Address</span>
                                <span class="fw-normal fs-4">615 Slaters Lane, Alexandria, VA 22314</span>
                            </div>
                        </div>
                        
                        <div class="d-flex align-items-center">
                            <p class="me-3 fs-4">Directions:</p>
                            <div class="d-flex gap-2">
                                <div>
                                    <a  class="text-dark" href="/"><span class="fs-4 fw-normal">Walking</span></a> |
                                </div>
                                <div>
                                    <a  class="text-dark" href="/"><span class="fs-4 fw-normal">Driving</span></a> |
                                </div>
                                <div>
                                    <a class="text-dark" href="/"><span class="fs-4 fw-normal">Public Transport</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>`;
	}
}

export const ContactHQ = () => {
	return `<tsa-contact-hq>
    </tsa-contact-hq>`;
};
