import "./sidebar.css";
import cartoIconDE from '../../assets/sidebar-icons/data-explorer/carto.svg';
import fileTreeIconDE from '../../assets/sidebar-icons/data-explorer/file-tree-component.svg';
import testIconDE from '../../assets/sidebar-icons/data-explorer/rectangle.svg';
import addIconDE from '../../assets/sidebar-icons/data-explorer/add-icon.svg';

export default function Sidebar() {
    return(
        <div className='sidebar_container'>
            <div className='sidebar-compact-menu'>
                <div className='sidebar-compact-menu__top-icons'>
                    <span className='sidebar-compact-menu__icon -home'></span>
                    <span className='sidebar-compact-menu__icon -map'></span>
                    <span className='sidebar-compact-menu__icon -data'></span>
                    <span className='sidebar-compact-menu__icon -view'></span>
                    <span className='sidebar-compact-menu__icon -conection'></span>
                    <span className='sidebar-compact-menu__icon -grid'></span>
                    <span className='sidebar-compact-menu__icon -settings'></span>
                </div>
                <div className='sidebar-compact-menu__bottom-icons'>
                    <span className='sidebar-compact-menu__icon -size'></span>
                </div>
                <div className='sidebar-compact-menu__footer-icons_wrapper'>
                    <span className='sidebar-compact-menu__footer-icons -hashtag'></span>
                    <span className='sidebar-compact-menu__footer-icons -question'></span>
                    <span className='sidebar-compact-menu__footer-icons -dialog'></span>
                </div>
            </div>

            <div className='sidebar_list-menu'>
                <h2 className="sidebar_list-menu-h2">
                    Connections
                </h2>

                <div className="sidebar_list-menu__file-explorer"> 
                    <img src={cartoIconDE} alt="" />
                    <span>CARTO Data Warehouse</span>
                </div>

                <div className="sidebar_list-menu__file-explorer">
                    <img src={fileTreeIconDE} alt="" />
                    <span>bqconn</span>
                </div>

                <div className="sidebar_list-menu__file-explorer">
                    <img src={testIconDE} alt="" />
                    <span>sfcon-_test</span>
                </div>

                <div className="sidebar_list-menu__file-explorer">
                    <img src={addIconDE} alt="" />
                    <span> Add a new connection</span>
                </div>
            </div>
        </div>
    )
}