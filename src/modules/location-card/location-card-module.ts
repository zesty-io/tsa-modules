// Todo Make dropdown for date and time

import './location-card-module.css';

export interface LocationCardProps {
  selected: boolean;
}

export const LocationCard = ({ selected }: LocationCardProps) => {
  return `
    <div class="tsa-location-card tsa-card" ${selected ? 'selected' : ''}>
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
            <span>Open | Closes 12 PM > </span>
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
  `;
};
