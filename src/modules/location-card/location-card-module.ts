// Todo Make dropdown for date and time

import './location-card-module.scss';

import './hours-modal.scss';

export interface LocationCardProps {
  selected: boolean;
}

export const LocationCard = ({ selected }: LocationCardProps) => {
  return `
    <div class="tsa-location-card" ${selected ? 'selected' : ''}>
        <div class="tsa-location-card__header">
          <i slot="icon" class="bi bi-geo-alt-fill"></i>
          <h1>North Dallas Salavation Army</h1>
        </div>
    
        <div class="tsa-location-card__btns">
          <button class="btn btn--dark--fill btn--small btn--fillWidth">View Location</button>
          <button class="btn btn--dark--outline btn--small btn--fillWidth">View Services Hours & Info</button>
        </div>
        
        <div class="tsa-location-card__info">
          <div class="tsa-location-card__info-content">
            <tsa-text-with-icon bootstrapIcon="clock" title="General Hours">
            </tsa-text-with-icon>
            <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="tsa-location-card__info__hours">Open | Closes 12 PM  <i class="bi bi-chevron-right"></i></button>
          </div>

          <div class="tsa-location-card__info-content">
            <tsa-text-with-icon bootstrapIcon="telephone" title="Phone">
            </tsa-text-with-icon>
            <span>(123) 456-7890</span>
          </div>

          <div class="tsa-location-card__info-content-address">
            <div class="tsa-location-card__info-content-address-title">
              <tsa-text-with-icon bootstrapIcon="geo-alt" title="Address">
              </tsa-text-with-icon>
              
              <span>36 Eastern Ave, Augusta, ME 04330</span>
            </div>

            <div class="tsa-location-card__controls">
              <p>Directions:</p>
              <div>
                <a href="/">Walking</a>
                <a href="/">Driving</a>
                <a href="/">Public Transport</a>
              </div>
            </div>
          </div>
        </div>

      

        <hr />

        <div class="tsa-location-card__services">
          <h2>Services Offered</h2>
          <ul>
            <li>Service</li>
            <li>Service</li>
            <li>Service</li>
            <li>Service</li>
            <li>Service</li>
            <li>Service</li>
            <li>Service</li>
            <li>Service</li>
            <li>Service</li>
            <li>Service</li>
            <li>Service</li>
            <li>Service</li>
          </ul>
        </div>
    </div>

  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog  modal-dialog-centered">
  <div class="modal-content">
    <div class="hours-modal-header">
      <tsa-text-with-icon bootstrapIcon="clock" title="General Hours">
      </tsa-text-with-icon>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <div class="hours-modal-content">
          <h4>Monday</h4>

          <div class="hours-modal-time">
            <span>9 AM - 12 PM</span>
            <span>1 PM - 2:30 PM</span>
          </div>
        </div>
        <div class="hours-modal-content">
          <h4>Tuesday</h4>

          <div class="hours-modal-time">
            <span>Closed</span>
          </div>
        </div>
        <div class="hours-modal-content">
          <h4>Wednesday</h4>

          <div class="hours-modal-time">
            <span>9 AM - 12 PM</span>
            <span>1 PM - 2:30 PM</span>
          </div>
        </div>
        <div class="hours-modal-content">
          <h4>Thursday</h4>

          <div class="hours-modal-time">
            <span>9 AM - 12 PM</span>
            <span>1 PM - 2:30 PM</span>
          </div>
        </div>
        <div class="hours-modal-content">
          <h4>Friday</h4>

          <div class="hours-modal-time">
            <span>9 AM - 12 PM</span>
            <span>1 PM - 2:30 PM</span>
          </div>
        </div>
        <div class="hours-modal-content">
          <h4>Saturday</h4>

          <div class="hours-modal-time">
            <span>Closed</span>
          </div>
        </div>
        <div class="hours-modal-content">
          <h4>Sunday</h4>

          <div class="hours-modal-time">
            <span>Closed</span>
          </div>
        </div>
    </div>
    <div class="hours-modal-footer">
      <h2>Looking for service hours and info?</h2>
    <p>View all service and program hours in their <a href="/">services and programs page</a></p>
</div>
  </div>

</div>
</div>
  `;
};
