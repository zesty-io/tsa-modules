import './volunteer-form.css';

export const VolunteerForm = () => {
  return `
    <form class="volunteer-form">
        <h1 class="tsa-title">Volunteer Form</h1>
        <p class="tsa-text">If you'd like to volunteer with us, please fill out the form below 
            and choose and a representative will contact you with more information
        </p>
        
        <div class="volunteer-form-names">
            <label class="input">
                <span>First Name *</span>
                <input class="input--medium" name="" value="" placeholder="William" type="text" false/>
            </label>
            
            <label class="input">
                <span>Last Name *</span>
                <input class="input--medium" name="" value="" placeholder="Booth" type="text" false/>
            </label>
        </div>

        <div class="volunteer-form-contact">
            <label class="input">
                <span>Phone Number *</span>
                <input class="input--medium" name="" value="" placeholder="(123) 456 7890" type="text" false/>
            </label>
            <label class="input">
                <span>Email *</span>
                <input class="input--medium" name="" value="" placeholder="wbooth@use.salvationarmy.org" type="text" false/>
            </label>
            <label class="input">
                <span>Zip Code *</span>
                <input class="input--medium" name="" value="" placeholder="12345" type="text" false/>
            </label>
        </div>

        <div class="volunteer-form-checkboxes">
            <h2>How would you like to help?</h2>
            <div class="checkboxes-container">
                <label class="checkbox">
                    <input class="" name="" type="checkbox"/>
                    <span>Sorter</span>
                </label>
                <label class="checkbox">
                    <input class="" name="" type="checkbox"/>
                    <span>Youth Programs</span>
                </label>
                <label class="checkbox">
                    <input class="" name="" type="checkbox"/>
                    <span>Driver</span>
                </label>
                <label class="checkbox">
                    <input class="" name="" type="checkbox"/>
                    <span>Senior Programs</span>
                </label>
                <label class="checkbox">
                    <input class="" name="" type="checkbox"/>
                    <span>Office  Worker</span>
                </label>
                <label class="checkbox">
                    <input class="" name="" type="checkbox"/>
                    <span>Friendly Visitor</span>
                </label>
            </div>
        </div>

        <div class="volunteer-form-message">
            <label class="textarea">
                <span class="">Your Message</span>
                <textarea rows="10" class="textarea--medium" name="" placeholder="Enter your message" type="text" false></textarea>
            </label>
        </div>

        <button class="btn btn--small btn--dark--fill">Submit</button>
    </form>
  `;
};
