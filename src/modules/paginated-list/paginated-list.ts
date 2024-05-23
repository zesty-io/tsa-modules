import './paginated-list.css';
export class PaginatedListModule extends HTMLElement {
  private currentPage: number;
  private itemsPerPage: number;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.currentPage = 1;
    this.updateItemsPerPage();
    this.render();
  }

  static get observedAttributes() {
    return ['items-per-page'];
  }

  connectedCallback() {
    this.updateGridAndPagination();
    this.itemsPerPage = this.getAttribute('items-per-page');
    const slot = this.shadowRoot.querySelector('slot');
    if (slot) {
      slot.addEventListener('slotchange', () => this.updateGridAndPagination());
    }

    window.addEventListener('resize', this.updateItemsPerPage.bind(this));

    const items = slot
      .assignedNodes({ flatten: true })
      .filter((node) => node.nodeType === Node.ELEMENT_NODE);
    if (items.length > 0) {
      items[0].focus();
    }
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.updateItemsPerPage.bind(this));
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'items-per-page') {
      this.updateItemsPerPage();
      this.updateGridAndPagination();
    }
  }

  updateItemsPerPage() {
    // Define different items per page based on screen width
    this.itemsPerPage =
      window.innerWidth <= 768 ? 1 : parseInt(this.getAttribute('items-per-page') || '3', 10);
  }

  render() {
    this.shadowRoot.innerHTML = `
        <div part="grid-container">
            <slot></slot>
        </div>
        <div part="pagination"></div>
        <style>
            :host {
                padding: 40px;
                z-index: 5;
                postision: relative;
            }
            ::slotted(*) {
                opacity: 0;
                visibility: hidden;
                height: 0;
                transition: opacity 1s ease-in-out, visibility 0.5s ease-in-out, height 1s ease-in-out;
            }
        </style>
        `;
  }

  renderGrid() {
    const slot = this.shadowRoot.querySelector('slot');
    if (!slot) {
      console.error('Slot not found');
      return;
    }

    const nodes = slot
      .assignedNodes({ flatten: true })
      .filter((node) => node.nodeType === Node.ELEMENT_NODE);
    nodes.forEach((node, index) => {
      node.style.visibility = 'hidden';
      node.style.opacity = '0';
      node.style.height = '0';
      if (
        index >= (this.currentPage - 1) * this.itemsPerPage &&
        index < this.currentPage * this.itemsPerPage
      ) {
        node.style.visibility = 'visible';
        node.style.opacity = '1';
        node.style.height = 'auto';
      }
    });
  }

  renderPagination() {
    const paginationContainer = this.shadowRoot.querySelector('[part="pagination"]');
    if (!paginationContainer) {
      console.error('Pagination container not found');
      return;
    }

    paginationContainer.innerHTML = ''; // Clear previous pagination buttons

    const slot = this.shadowRoot.querySelector('slot');
    if (!slot) {
      console.error('Slot not found');
      return;
    }

    const totalItems = slot
      .assignedNodes({ flatten: true })
      .filter((node) => node.nodeType === Node.ELEMENT_NODE).length;
    const totalPages = Math.ceil(totalItems / this.itemsPerPage);

    if (this.currentPage > 1) {
      const prevButton = document.createElement('button');
      prevButton.textContent = '<';
      prevButton.setAttribute('part', 'prev-button');
      prevButton.addEventListener('click', () => {
        this.currentPage--;
        this.updateGridAndPagination();
        this.scrollToTop();
      });
      paginationContainer.appendChild(prevButton);
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
        this.scrollToTop();
      });
      paginationContainer.appendChild(pageButton);
    }

    if (this.currentPage < totalPages) {
      const nextButton = document.createElement('button');
      nextButton.textContent = '>';
      nextButton.setAttribute('part', 'next-button');
      nextButton.addEventListener('click', () => {
        this.currentPage++;
        this.updateGridAndPagination();
        this.scrollToTop();
      });
      paginationContainer.appendChild(nextButton);
    }
  }

  scrollToTop() {
    const gridContainer = this.shadowRoot.querySelector('[part="grid-container"]');
    if (gridContainer) {
      const offsetY = 150; // Adjust this value to change the offset
      const rect = gridContainer.getBoundingClientRect();
      const scrollTop = window.pageYOffset + rect.top - offsetY;
      window.scrollTo({ top: scrollTop, behavior: 'smooth' });
    }
  }

  updateGridAndPagination() {
    this.renderGrid();
    this.renderPagination();
  }
}

export interface PaginatedListProps {
  title?: string;
}

export const PaginatedList = ({ title }: PaginatedListProps) => {
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
  `;
};
