import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements'

const Sidebar = ({ toggle, isOpen}) => {
  return (
    <SidebarContainer 
        isOpen={isOpen}
        onClick={toggle}
    >
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='about' onClick={toggle}>
                    About
                </SidebarLink>
                <SidebarLink to='discover' onClick={toggle}>
                    Discover
                </SidebarLink>
                <SidebarLink to='donate' onClick={toggle}>
                    Donate
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                    <SidebarRoute 
                        to="/signin"
                    >
                        Login
                    </SidebarRoute>
                </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar