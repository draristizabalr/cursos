class DevJobsAvatar extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  render() {
    const service = this.getAttribute('service') ?? 'github';
    const username = this.getAttribute('username') ?? 'midudev';
    const size = this.getAttribute('size') ?? '40';

    const url = this.createUrl(service, username);

    this.shadowRoot.innerHTML = `
      <style>
        img {
          width: ${size}px;
          height: ${size}px;
          border-radius: 100%;
        }
      </style>
      <img
        src="${url}"
        alt="${username}"
        class="avatar"
      />
    `
  }

  connectedCallback() {
    this.render();
  }

  createUrl(service, username) {
    return `https://unavatar.io/${service}/${username}`;
  }
}

customElements.define('devjobs-avatar', DevJobsAvatar);