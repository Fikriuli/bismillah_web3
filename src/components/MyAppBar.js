import React,{Component} from 'react';
import { Menu, Segment, Header, Image } from 'semantic-ui-react'
import {Link} from "react-router-dom";


class MyAppBar extends Component{
    state = { activeItem: 'home' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        return (
        <Segment inverted color='blue'>
            <Menu inverted pointing color='blue'>
            
            <Image size='tiny'
            src='https://previews.dropbox.com/p/thumb/AAaUuTtjZQ3ai6rBFC3cgzcP6O6CgM7vuLLMH6yuPgXpxThvpbiTpUWAhArhMg8LUr-vipG81tsdNrMHHHYHDGOAnumZr652GsHDw7m4-nPcxnqPOUbwtLNyeArbpS1aB7uujUYwivJvRb5NU7gnPCwdgZrBsfS-Cburcojg6T0KluYTrhO343Csg33HqgdISt35qgaYaOdM_CtoIkW77Yl0nNX1fLkDGk-72dOvNUJKsiAY8ON2L0_rFqNploPBHFrTmxFvnRoxn62xgjU7feZ2kPkZsWVeuaqZ2r2s3B_XbJykoHf3fYTSJbgsVr1358GUQSboZdypue_6nghM9i3j/p.png'
            style={{
                height:'10%',
                float : 'right',
                margin : '0 5em 0 2em'
            }}/>
            
            <Link to='/home'>
            <Menu.Item 
                name='home' 
                active={activeItem === 'home'} 
                onClick={this.handleItemClick} 
                />
            </Link>
            <Link to='/profile'>
            <Menu.Item
                name='profile'
                active={activeItem === 'profile'}
                onClick={this.handleItemClick}
            />
             </Link>
             <Link to='/portofolio'>
            <Menu.Item
                name='portofolio'
                active={activeItem === 'portofolio'}
                onClick={this.handleItemClick}
            />
            </Link>
            <Link to='/contact'>
            <Menu.Item
                name='contact'
                active={activeItem === 'contact'}
                onClick={this.handleItemClick}
            />
            </Link>
            </Menu>
        </Segment>
        )
    }
}

export default MyAppBar;
