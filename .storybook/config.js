import { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container } from '../src/components/ui/Container/Container';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

// turn on Info addon
addDecorator(
  withInfo({
    inline: true, // show component documentation by default
    header: false, // drop useless info
    source: false, // cause we have 'story source' addon and <Fragment> issues
    propTablesExclude: [Fragment, BrowserRouter, Container], // clear propTypes tables from useless sections
  })
);

// configure custom media breakpoints
const newViewports = {
  mobile: {
    name: 'mobile',
    styles: {
      width: '320px',
      height: '640px',
    },
  },
  mobileLarge: {
    name: 'mobile-large',
    styles: {
      width: '414px',
      height: '640px',
    },
  },
  tablet: {
    name: 'tablet',
    styles: {
      width: '640px',
      height: '1080px',
    },
  },
  tabletLarge: {
    name: 'tablet-large',
    styles: {
      width: '1024px',
      height: '1240px',
    },
  },
  desktop: {
    name: 'desktop',
    styles: {
      width: '1366px',
      height: '768px',
    },
  },
  desktopLarge: {
    name: 'desktop-large',
    styles: {
      width: '1600px',
      height: '900px',
    },
  },
  desktopExtraLarge: {
    name: 'desktop-extra-large',
    styles: {
      width: '1921px',
      height: '1080px',
    },
  },
};

// turn on Viewport addon with some custom viewport options
addParameters({
  viewport: {
    defaultViewport: 'responsive',
    viewports: {
      ...newViewports,
      ...INITIAL_VIEWPORTS,
    },
  },
});

// for propper stories order (ui on top of others)
const uiStories = require.context('../src/components/ui', true, /\.stories\.jsx?$/);
const commonStories = require.context('../src/components/common', true, /\.stories\.jsx?$/);

const loadStories = () => {
  uiStories.keys().forEach(filename => uiStories(filename));
  commonStories.keys().forEach(filename => commonStories(filename));
};

configure(loadStories, module);
