import './paginated-list.css'
export class PaginatedListModule extends HTMLElement {
  private currentPage: number;
  private itemsPerPage: number;

  static get observedAttributes() {
    return ['items-per-page'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.currentPage = 1;
    this.itemsPerPage = parseInt(this.getAttribute('items-per-page') || '3', 10);
    this.render();
  }

  connectedCallback() {
    
    this.updateGridAndPagination();
    if(this.shadowRoot) {
      // this.shadowRoot.adoptedStyleSheets = [paginatedListStyle];
    }
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'items-per-page') {
      this.itemsPerPage = parseInt(newValue, 10);
      this.updateGridAndPagination();
    }
  }

  private render() {
    this.shadowRoot!.innerHTML = `
      <div part="grid-container">
        <slot></slot>
      </div>
      <div part="pagination"></div>
      <style>
        ::slotted(*) {
          display: none;
        }
      </style>
    `;
  }

  private renderGrid() {
    const slots = this.querySelectorAll('tsa-stories-single');
    console.log(slots);
    slots.forEach((slot, index) => {
      (slot as HTMLElement).style.display = 'none';
      if (index >= (this.currentPage - 1) * this.itemsPerPage && index < this.currentPage * this.itemsPerPage) {
        (slot as HTMLElement).style.display = 'block';
      }
    });
  }

  private renderPagination() {
    const paginationContainer = this.shadowRoot!.querySelector('[part="pagination"]');
    
    if (!paginationContainer) {
      console.error('Pagination container not found');
      return;
    }
    paginationContainer!.innerHTML = '';
    const totalPages = Math.ceil(this.children.length / this.itemsPerPage);

    if (this.currentPage > 1) {
      const prevButton = document.createElement('button');
      prevButton.textContent = 'Prev';
      prevButton.setAttribute('part', 'pagination-button')
      prevButton.addEventListener('click', () => {
        this.currentPage--;
        this.updateGridAndPagination();
      });
      paginationContainer!.appendChild(prevButton);
    }

    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement('button');
      pageButton.textContent = i.toString();
      pageButton.setAttribute('part', 'pagination-button');
      if (i === this.currentPage) {
        pageButton.disabled = true;
      }
      pageButton.addEventListener('click', () => {
        this.currentPage = i;
        this.updateGridAndPagination();
      });
      paginationContainer!.appendChild(pageButton);
    }

    if (this.currentPage < totalPages) {
      const nextButton = document.createElement('button');
      nextButton.textContent = 'Next';
      nextButton.setAttribute('part', 'pagination-button');
      nextButton.addEventListener('click', () => {
        this.currentPage++;
        this.updateGridAndPagination();
      });
      paginationContainer!.appendChild(nextButton);
    }
  }

  private updateGridAndPagination() {
    this.renderGrid();
    this.renderPagination();
  }
}

export interface PaginatedListProps {
  title?: string
}

export const PaginatedList = ({title}: PaginatedListProps) => {
  return `
  <h1 class="tsa-title">${title}</h1>
  <tsa-paginated-list items-per-page="6">
    <tsa-stories-single>
      <h2 slot="heading">[FPO] Title 1</h2>
      <div class="card__content" slot="content"><p>Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut</p></div>
      <span class="card__date" data-date="2024-05-03" slot="date"></span>
      <img slot="imageURL" src="https://w1w702z1.media.zestyio.com/image-sample-full.jpg" alt="sample image" />
      <a slot="link" href="/" class="btn btn--small btn--dark--outline btn--fullWidth">View Event</a>   
    </tsa-stories-single>
    <tsa-stories-single>
      <h2 slot="heading">[FPO] Title 2</h2>
      <div class="card__content" slot="content"><p>Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut</p></div>
      <span class="card__date" data-date="2024-05-03" slot="date"></span>
      <img slot="imageURL" src="https://w1w702z1.media.zestyio.com/image-sample-full.jpg" alt="sample image" />
      <a slot="link" href="/" class="btn btn--small btn--dark--outline btn--fullWidth">View Event</a>   
    </tsa-stories-single>
    <tsa-stories-single>
      <h2 slot="heading">[FPO] Title3 </h2>
      <div class="card__content" slot="content"><p>Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut</p></div>
      <span class="card__date" data-date="2024-05-03" slot="date"></span>
      <img slot="imageURL" src="https://w1w702z1.media.zestyio.com/image-sample-full.jpg" alt="sample image" />
      <a slot="link" href="/" class="btn btn--small btn--dark--outline btn--fullWidth">View Event</a>   
    </tsa-stories-single>
    <tsa-stories-single>
      <h2 slot="heading">[FPO] Title 4</h2>
      <div class="card__content" slot="content"><p>Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut</p></div>
      <span class="card__date" data-date="2024-05-03" slot="date"></span>
      <img slot="imageURL" src="https://w1w702z1.media.zestyio.com/image-sample-full.jpg" alt="sample image" />
      <a slot="link" href="/" class="btn btn--small btn--dark--outline btn--fullWidth">View Event</a>   
    </tsa-stories-single>
    <tsa-stories-single>
      <h2 slot="heading">[FPO] Title 5</h2>
      <div class="card__content" slot="content"><p>Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut</p></div>
      <span class="card__date" data-date="2024-05-03" slot="date"></span>
      <img slot="imageURL" src="https://w1w702z1.media.zestyio.com/image-sample-full.jpg" alt="sample image" />
      <a slot="link" href="/" class="btn btn--small btn--dark--outline btn--fullWidth">View Event</a>   
    </tsa-stories-single>
    <tsa-stories-single>
      <h2 slot="heading">[FPO] Title 6</h2>
      <div class="card__content" slot="content"><p>Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut</p></div>
      <span class="card__date" data-date="2024-05-03" slot="date"></span>
      <img slot="imageURL" src="https://w1w702z1.media.zestyio.com/image-sample-full.jpg" alt="sample image" />
      <a slot="link" href="/" class="btn btn--small btn--dark--outline btn--fullWidth">View Event</a>   
    </tsa-stories-single>
    <tsa-stories-single>
      <h2 slot="heading">[FPO] Title 7</h2>
      <div class="card__content" slot="content"><p>Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut</p></div>
      <span class="card__date" data-date="2024-05-03" slot="date"></span>
      <img slot="imageURL" src="https://w1w702z1.media.zestyio.com/image-sample-full.jpg" alt="sample image" />
      <a slot="link" href="/" class="btn btn--small btn--dark--outline btn--fullWidth">View Event</a>   
    </tsa-stories-single>
  </tsa-paginated-list>
  `
}