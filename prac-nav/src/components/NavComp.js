import {Component} from 'react';

class NavComp extends Component {

  obj = this.props.navInfo;

  render(){
  return (
      <nav>
        <ul style={{listStyle : 'none', background : '#06283d', color : 'white', padding : '1.8vh 1.8vw'}}>
            <li style={{display : 'inline'}}><b>
            <a style={{textDecoration : 'none', color : '#dff6ff',fontSize : '1.4rem'}} href='/companyname'>{this.obj.companyName}</a>
            </b></li>
            <div className='items-con'>
            {
              this.obj.navItems.map((navItem, index)=>(
                <li key={index} className='nav-items'><a href={"/"+navItem}>{navItem}</a></li>
              ))
            }
            </div>
        </ul>
      </nav>
  );
  }
}

export default NavComp;
