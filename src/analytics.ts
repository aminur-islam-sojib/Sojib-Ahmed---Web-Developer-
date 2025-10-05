// src/analytics.ts
import ReactGA from 'react-ga4';

const TRACKING_ID = 'G-YNHP6GYDEM'; // Replace with your actual Measurement ID

// Initialize Google Analytics
export const initGA = () => {
  ReactGA.initialize(TRACKING_ID, {
    gtagOptions: {
      send_page_view: true,
    },
  });
};

// Track page views
export const trackPageView = (path: string) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};

// Track custom events
export const trackEvent = (
  category: string,
  action: string,
  label?: string
) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};

// Track button clicks, downloads, etc.
export const trackButtonClick = (buttonName: string) => {
  trackEvent('User Interaction', 'Button Click', buttonName);
};

// Track CV downloads
export const trackCVDownload = () => {
  trackEvent('Downloads', 'CV Downloaded', 'Resume PDF');
};

// Track project views
export const trackProjectView = (projectName: string) => {
  trackEvent('Projects', 'Project Viewed', projectName);
};
