import React, { Component } from 'react';
import '../App.css'


class Navbar extends Component {
  render() {
    return (
      <div className="navbar" >
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#"><i class="fas fa-home"></i> Trang chủ</a>
            <a className="navbar-brand" href="#"><i class="far fa-bell"></i> Thông báo <span className="sr-only">(current)</span></a>
            <a className="navbar-brand" href="#"><i class="far fa-envelope"></i> Tin nhắn</a>
            <img className="Logo" src="https://upload.wikimedia.org/wikipedia/vi/9/9f/Twitter_bird_logo_2012.svg" alt="logosmall"></img>
            
            <form className="form-inline " style={{marginLeft: 200 + 'px'}}>
                    <input className="form-control mr-sm-2" type="search" placeholder="Tìm kiếm trên Twitter" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search   </button>
            </form>
            
            <ul className="nav right-actions" style={{marginLeft: 30 + 'px'}} >  
                <li className="me dropdown session js-session open" data-global-action="t1me">
                    <a href="#" data-toggle = "dropdown" className="btn js-tooltip settings dropdown-toggle js-dropdown-toggle" data-placement="bottom" rel="noopener" role="button" data-original-title="Hồ sơ và cài đặt">
                        <img class="Avatar Avatar--size32" src="http://www.croop.cl/UI/twitter/images/carl.jpg" alt="Hồ sơ và cài đặt" style={{height: 46 + 'px', width: 46 + 'px'}}></img>
                    </a> 
                    <div className="DashUserDropdown dropdown-menu dropdown-menu--rightAlign is-forceRight is-autoCentered">
                        <div className="dropdown-caret">
                            <span class="caret-outer"></span>
                            <span class="caret-inner"></span>    
                        </div>
                        <ul tabindex="-1" role="menu" aria-labelledby="user-dropdown-toggle" aria-hidden="false">
                            <li class="DashUserDropdown-userInfo" >
                                <a href="#" class="DashUserDropdown-userInfoLink js-nav" data-nav="view_profile" role="menuitem">
                                    <b class="fullname">30miRRR</b>
                                </a>
                            </li>
                            <li class="dropdown-divider" role="presentation"></li>
                            <li class="current-user" >
                                <a href="#" class="js-nav" data-nav="view_profile" role="menuitem">
                                <span class="DashUserDropdown-linkIcon Icon Icon--medium Icon--me"></span>Hồ sơ
                                </a>
                            </li>
                            <li >
                                <a href="#" >
                                <span class="DashUserDropdown-linkIcon Icon Icon--medium Icon--list"></span>Danh sách
                                </a>
                            </li>

                            <li class="js-signout-button" >
                                <a href="#" class="dropdown-link" role="menuitem" >Đăng xuất</a>
                            </li>

                        </ul>
                    </div>
                </li>
                
            </ul>
        
      </nav>
      </div>
    );
  }
}

export default Navbar;
