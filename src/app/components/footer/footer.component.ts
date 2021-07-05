import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<footer class="flex items-center justify-center h-16">
    <div class="flex items-center space-x-6">
      <a href="https://sreyaj.dev" class="flex space-x-1">
        <svg width="20" height="20" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="54" height="54">
            <path
              d="M13.7612 50.537C17.673 52.742 22.1896 54 27 54C36.0709 54 44.097 49.5269 48.9928 42.6662L45.7954 34.6725H20.1791L13.7612 50.537Z"
              fill="white"
            />
            <path
              d="M52.5671 35.7017C53.4961 32.9714 54 30.0446 54 27C54 16.4389 47.9364 7.29404 39.1007 2.85686L52.5671 35.7017Z"
              fill="white"
            />
            <path
              d="M28.5554 0.0440527C28.0407 0.0148168 27.5221 0 27 0C12.0883 0 0 12.0883 0 27C0 34.9906 3.47112 42.1705 8.98775 47.114L28.5554 0.0440527Z"
              fill="white"
            />
            <path d="M43.6995 29.5493H22.275L33.0649 3.0015L43.6995 29.5493Z" fill="white" />
          </mask>
          <g mask="url(#mask0)">
            <rect x="-6" y="-7" width="69" height="65" fill="url(#paint0_linear)" />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="-6"
              y1="-11.5445"
              x2="57.0896"
              y2="60.3047"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D4FC79" />
              <stop offset="0.397814" stop-color="#BBF389" />
              <stop offset="1" stop-color="#96E6A1" />
            </linearGradient>
          </defs>
        </svg>
        <p class="text-sm">adi.so</p>
      </a>
      <a href="https://twitter.com/Adisreyaj" class="flex  items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            fill="#1DA1F2"
            d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"
          />
        </svg>
        <p class="text-sm">Adisreyaj</p>
      </a>
    </div>
  </footer>`,
  styles: [
    `
      :host {
        width: 100%;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
