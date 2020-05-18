import { Box } from 'theme-ui';
import { hideVisually } from 'polished';

const VisuallyHidden = (props) => (
  <Box
    sx={{
      ...hideVisually(),
    }}
    {...props}
  />
);

export default VisuallyHidden;
