import "./header-search.scss";

export class HeaderSearchModule extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
        <div class="p-3">
          <div class="tsa-header-search">
            <label class="input">
                <i class="bi bi-search"></i>
                <input class="input--small" name="" value="" placeholder="What are you looking for" type="text"/>
            </label>
        </div>
        </div>
        `;
	}
}

export const HeaderSearch = () => {
	return `
    <tsa-header-search></tsa-header-search>
    `;
};
