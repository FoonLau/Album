import { connect } from 'react-redux';

import PhotoScreen from '../components/PhotoScreen';

function mapStateToProps(state) {
  const sections = { hello: state.photos };

  return {
    photoCollections: sections,
  };
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoScreen);
