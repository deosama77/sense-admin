// assets
import { DashboardOutlined, ScheduleOutlined, UpSquareOutlined } from '@ant-design/icons';

// icons
const icons = {
    DashboardOutlined,
    ScheduleOutlined,
    UpSquareOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const cms_mockup = {
    id: 'cms',
    title: 'CMS',
    type: 'group',
    children: [
        {
            id: 'mockup',
            title: 'Mockup',
            type: 'item',
            url: '/cms/mockup',
            icon: icons.ScheduleOutlined,
            breadcrumbs: false
        },
        {
            id: 'campaign',
            title: 'campaign',
            type: 'item',
            url: '/cms/campaign',
            icon: icons.UpSquareOutlined,
            breadcrumbs: false
        }
    ]
};

export default cms_mockup;
