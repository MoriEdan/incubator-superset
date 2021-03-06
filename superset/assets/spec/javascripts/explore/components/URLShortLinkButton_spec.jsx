import React from 'react';
import configureStore from 'redux-mock-store';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { shallow } from 'enzyme';

import { OverlayTrigger } from 'react-bootstrap';
import URLShortLinkButton from '../../../../src/explore/components/URLShortLinkButton';

describe('URLShortLinkButton', () => {
  const defaultProps = {
    slice: {
      querystring: () => 'query string',
    },
  };

  function setup() {
    const mockStore = configureStore([]);
    const store = mockStore({});
    return shallow(<URLShortLinkButton {...defaultProps} />, { context: { store } }).dive();
  }

  it('renders OverlayTrigger', () => {
    const wrapper = setup();
    expect(wrapper.find(OverlayTrigger)).have.length(1);
  });
});
