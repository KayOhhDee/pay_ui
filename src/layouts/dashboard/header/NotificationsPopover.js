// components
import Iconify from '../../../components/Iconify';
import { IconButtonAnimate } from '../../../components/animate';

// ----------------------------------------------------------------------

export default function NotificationsPopover() {

  return (
    <>
      <IconButtonAnimate color="default" sx={{ width: 40, height: 40 }}>
        <Iconify icon="fontisto:bell" width={20} height={20} />
      </IconButtonAnimate>
    </>
  );
}


