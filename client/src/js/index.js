import { Workbox } from 'workbox-window';
import Editor from './editor';
import './database';
import '../css/style.css';

// Initializing the editor and the main HTML element
const main = document.querySelector('#main');
main.innerHTML = '';

// Function to load the spinner
const loadSpinner = () => {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.innerHTML = `
  <div class="loading-container">
  <div class="loading-spinner" />
  </div>
  `;
  main.appendChild(spinner);
};

// Create a new editor instance
const editor = new Editor();

// If editor is not defined, load the spinner
if (typeof editor === 'undefined') {
  loadSpinner();
}

// Check if service workers are supported
if ('serviceWorker' in navigator) {
  // Register the workbox service worker
  const workboxSW = new Workbox('/src-sw.js');
  workboxSW.register();
} else {
  console.error('Service workers are not supported in this browser.');
}

// Logic for PWA installation button
const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the mini-infobar from appearing on mobile
  event.preventDefault();
  // Stash the event so it can be triggered later.
  window.deferredPrompt = event;
  // Update UI notify the user they can install the PWA
  butInstall.style.display = 'block';

  butInstall.addEventListener('click', () => {
    // Hide the install button
    butInstall.style.display = 'none';
    // Show the install prompt
    event.prompt();
    // Wait for the user to respond to the prompt
    event.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      window.deferredPrompt = null;
    });
  });
});

// Track the installation
window.addEventListener('appinstalled', (event) => {
  console.log('PWA was installed', event);
  // Clear the deferredPrompt
  window.deferredPrompt = null;
});
