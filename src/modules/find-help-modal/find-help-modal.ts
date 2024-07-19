import './find-help.scss';

export class FindHelpModule extends HTMLElement {
  private heading: string | null;
  private options: string | null;

  constructor() {
    super();
    this.heading = this.getAttribute('heading');
    this.options = this.getAttribute('options');
  }

  connectedCallback() {
    this.innerHTML = `
      <script>
          document.getElementById("open").onclick = () => {
            document.querySelector("lightbox-module").toggleAttribute('open');
          };

          function getLocation() {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(showPosition, showError);
            } else {
              alert("Geolocation is not supported by this browser.");
            }
          }

          function showPosition(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            getAddress(latitude, longitude);
          }

          function showError(error) {
            switch(error.code) {
              case error.PERMISSION_DENIED:
                alert("User denied the request for Geolocation.");
                break;
              case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable.");
                break;
              case error.TIMEOUT:
                alert("The request to get user location timed out.");
                break;
              case error.UNKNOWN_ERROR:
                alert("An unknown error occurred.");
                break;
            }
          }

          function getAddress(latitude, longitude) {
            const apiKey = 'AIzaSyA1yhWlvD1gOrWCGvHQSOQVB1eCtNOXnyY';
            const url = \`https://maps.googleapis.com/maps/api/geocode/json?latlng=\${latitude},\${longitude}&key=\${apiKey}\`;

            fetch(url)
              .then(response => response.json())
              .then(data => {
                if (data.status === 'OK') {
                  const addressComponents = data.results[0].address_components;
                  let address = '';
                  let postalCode = '';

                  addressComponents.forEach(component => {
                    if (component.types.includes('street_address') || component.types.includes('route')) {
                      address += component.long_name + ' ';
                    }
                    if (component.types.includes('locality')) {
                      address += component.long_name + ', ';
                    }
                    if (component.types.includes('administrative_area_level_1')) {
                      address += component.long_name + ' ';
                    }
                    if (component.types.includes('postal_code')) {
                      postalCode = component.long_name;
                    }
                  });

                  document.querySelector('input[name="zipcode"]').value = \`\${address.trim()} \${postalCode}\`;
                } else {
                  alert('Unable to retrieve address');
                }
              })
              .catch(error => {
                alert('Error: ' + error);
              });
          }

          document.querySelector('.use-location a').onclick = (event) => {
            event.preventDefault();
            getLocation();
          };
      </script>
      <lightbox-module title="${this.heading}">
          <div class="modal__content">
            <tsa-select options='${this.options}' placeholder='Select services' label='What services are you looking for?'></tsa-select>
            <label class="input mt-5">
                <span>City or Zip code</span>
                <input class="input--large" name="zipcode" value="" placeholder="Enter your city or zip code" type="text" />
            </label>
            <div class="use-location mt-5">
              <a href="" class="mt-2"><i class="bi bi-crosshair"></i>  Use my Location</a>
            </div>
            <div class="mt-5"><button type="button" id="apply-btn" class="btn btn--fullWidth btn--medium btn--dark--fill">Find Help</button></div>
          </div>
      </lightbox-module>
    `;
  }
}

export interface FindHelpProps {
  options?: string;
  heading?: string;
}

export const FindHelp = ({ options, heading }: FindHelpProps) => {
  return `
    <button id="open" type="button" class="btn btn--small btn--success--fill">Open</button>
    <tsa-find-help options='${options}' heading='${heading}'></tsa-find-help>
  `;
};
