import { Workbox } from 'workbox-window';
import Editor from './editor';
import './database';
import '../css/style.css';

const main = document.querySelector('#main');
main.innerHTML = '';

const loadSpinner = () => {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.innerHTML = `
  <div class="processing-container">
  <div class="processing-spinner" />
  </div>
  `;
  main.appendChild(spinner);
};

const editor = new Editor();

if (typeof editor === 'undefined') {
  loadSpinner();
}

// Checking service workers are valid or not
if ('serviceWorker' in navigator) {
  // registering service worker with workbox
  const sw = new Workbox('/src-sw.js');
  sw.register();
} else {
  console.error('Invalid service worker for this browser.');
}
