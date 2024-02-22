class LoadingComp extends BaseContent {
    constructor() {
        super();
        this.shadowRoot.innerHTML = `
        <style>
            /* Add loading-comp styles here */
            :host {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
            }
            .spinner {
                border: 4px solid rgba(0, 0, 0, 0.1);
                border-top: 4px solid #3498db;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                animation: spin 1s linear infinite;
            }
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        </style>
        <div class="spinner"></div>
    `;
    }
}
customElements.define('loading-comp', LoadingComp);