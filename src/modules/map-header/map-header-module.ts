import './map-header-module.css';

export class MapHeaderModule extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="map-header-module">
        <div class="map-header-container">
            <h1 class="tsa-title">${this.getAttribute('data-title')}</h1>
            <span class="tsa-text">${this.getAttribute('data-subtitle')}</span>
        </div>
        <div class="map-search-container">
            <label class="input">
                <input class="input--medium" name="" value="" placeholder="Enter your city or zip code" type="text" false/>
            </label>
            <button type="button" class="btn btn--small btn--dark--fill ">Search</button>
        </div>
    </div>
      `;
  }
}

export interface MapHeaderProps {
  title: String;
  subtitle: String;
}

export const MapHeader = ({ title, subtitle }: MapHeaderProps) => {
  return `
    <map-header-module data-title="${title}" data-subtitle="${subtitle}">
    </map-header-module>
  `;
};
