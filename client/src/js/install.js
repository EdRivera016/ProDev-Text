const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the mini-infobar from appearing on mobile
  event.preventDefault();
  // Stash the event so it can be triggered later.
  window.deferredPrompt = event;
  // Update UI notify the user they can install the PWA
  butInstall.style.display = 'block';
});

butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    // The deferred prompt isn't available.
    return;
  }
  // Show the install prompt
  promptEvent.prompt();
  // Wait for the user to respond to the prompt
  const result = await promptEvent.userChoice;
  if (result.outcome === 'accepted') {
    console.log('User accepted the install prompt');
  } else {
    console.log('User dismissed the install prompt');
  }
  // Clear the deferred prompt
  window.deferredPrompt = null;
  // Hide the install button
  butInstall.style.display = 'none';
});

// Track the installation
window.addEventListener('appinstalled', (event) => {
  console.log('PWA was installed', event);
  // Clear the deferredPrompt so it can be garbage collected
  window.deferredPrompt = null;
});
