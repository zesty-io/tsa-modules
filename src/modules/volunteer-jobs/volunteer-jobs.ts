import './volunteer-jobs.css';
import '../../features/common/paginated-list/paginated-list.scss';

export const VolunteerJobs = () => {
  return `
        <div class="volunteer-jobs-container">
            <h1 class="tsa-title">Volunteer Opportunities</h1>
            <div class="volunteer-jobs-inputs">
                <label class="input">
                    <span>Volunteer Title</span>
                    <input class="input--medium" name="" value="" placeholder="Search by volunteer title" type="text" false/>
                </label>

                <label class="input">
                    <span>Location</span>
                    <input class="input--medium" name="" value="" placeholder="City, State or ZIP" type="text" false/>
                </label>
                
                <button class="btn btn--medium btn--dark--fill btn--fullWidth">Search</button>
            </div>
            <tsa-paginated-list items-per-page="3" class="volunteer-jobs-cards">
                <div class="tsa-card volunteer-job-card">
                    <h2>Volunteer Opportunity Title</h2>
                    <span>Dallas, TX</span>
                    <p class="tsa-text">
                        Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Description. Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut
                    </p>
                    <button class="btn btn--small btn--dark--fill">View Opportunity</button>
                </div>
                <div class="tsa-card volunteer-job-card">
                    <h2>Volunteer Opportunity Title</h2>
                    <span>Dallas, TX</span>
                    <p class="tsa-text">
                        Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Description. Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut
                    </p>
                    <button class="btn btn--small btn--dark--fill">View Opportunity</button>
                </div>
                <div class="tsa-card volunteer-job-card">
                    <h2>Volunteer Opportunity Title</h2>
                    <span>Dallas, TX</span>
                    <p class="tsa-text">
                        Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Description. Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut
                    </p>
                    <button class="btn btn--small btn--dark--fill">View Opportunity</button>
                </div>
                <div class="tsa-card volunteer-job-card">
                    <h2>Volunteer Opportunity Title</h2>
                    <span>Dallas, TX</span>
                    <p class="tsa-text">
                        Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Description. Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut
                    </p>
                    <button class="btn btn--small btn--dark--fill">View Opportunity</button>
                </div>
            </tsa-paginated-list>
        </div>
    `;
};
