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

const Sidebar = () => {
  return (
    <SidebarContainer>
        <Icon>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='about'>
                    About
                </SidebarLink>
                <SidebarLink to='discover'>
                    Discover
                </SidebarLink>
                <SidebarLink to='donate'>
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