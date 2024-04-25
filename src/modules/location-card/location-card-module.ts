// Todo Make dropdown for time

import './location-card-module.css';

export interface LocationCardProps {
  selected: boolean;
}

export const LocationCard = ({ selected }: LocationCardProps) => {
  return `
    <tsa-card class="tsa-location-card" ${selected ? 'selected' : ''}>
        <div class="tsa-location-card__header">
          <i slot="icon" class="bi bi-geo-alt-fill"></i>
          <h1>North Dallas Salavation Army</h1>
        </div>
    
        <tsa-text-with-icon>
            <i slot="icon" class="bi bi-clock"></i> <p slot="title">Monday 10 AM - 8 PM</p>
        </tsa-text-with-icon>

        <tsa-text-with-icon>
            <i slot="icon" class="bi bi-telephone"></i> <p slot="title">(123) 456-7890</p>
        </tsa-text-with-icon>

        <tsa-text-with-icon>
            <i slot="icon" class="bi bi-geo-alt"></i> 
            <p slot="title">5555 North Street Dallas, TX 75235</p>
        </tsa-text-with-icon>

        <div class="tsa-location-card__controls">
          <p>Directions:</p>
      
          <div>
            <a href="/">Walking</a>
            <a href="/">Driving</a>
            <a href="/">Public Transport</a>
          </div>
      </div>
      
        <button class="btn btn--dark--fill btn--small btn--fillWidth">View Location</button>

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
    </tsa-card>
  `;
};
