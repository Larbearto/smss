import HomeIcon from '@mui/icons-material/Home'
import MailIcon from '@mui/icons-material/Mail'
import AssessmentIcon from '@mui/icons-material/Assessment'
import DashboardIcon from '@mui/icons-material/Dashboard'
import GroupIcon from '@mui/icons-material/Group'
import PermMediaIcon from '@mui/icons-material/PermMedia'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import SavingsIcon from '@mui/icons-material/Savings'
import GroupsIcon from '@mui/icons-material/Groups'
import CastForEducationIcon from '@mui/icons-material/CastForEducation'

export const SidebarData = [
  {
    title: 'Home',
    icon: <HomeIcon />,
    link: '/home',
  },
  {
    title: 'Dashboard',
    icon: <DashboardIcon />,
    link: '/dashboard',
  },
  {
    title: 'Mailbox',
    icon: <MailIcon />,
    link: '/mailbox',
  },
  {
    title: 'Finances',
    icon: <SavingsIcon />,
    link: '/finances',
  },
  {
    title: 'Classes',
    icon: <CastForEducationIcon />,
    link: '/courses',
  },
  {
    title: 'Reports',
    icon: <AssessmentIcon />,
    link: '/analytics',
  },

  {
    title: 'Attendance',
    icon: <GroupsIcon />,
    link: '/attendance',
  },
  {
    title: 'Calendar',
    icon: <CalendarMonthIcon />,
    link: '/scheduling',
  },

  {
    title: 'Logout',
    icon: <PowerSettingsNewIcon />,
    link: '/logout',
  },
]
