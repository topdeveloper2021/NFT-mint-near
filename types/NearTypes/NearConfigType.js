import PropTypes from 'prop-types';

export const NearConfigType = {
  contractName: PropTypes.string.isRequired,
  networkId: PropTypes.string.isRequired,
  walletUrl: PropTypes.string.isRequired,
};

export const NearConfigTypeShape = PropTypes.shape(NearConfigType);
