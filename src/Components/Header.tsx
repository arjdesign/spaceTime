import { PageHeader } from 'antd';
import './Header.css';

const  Header =() => {
    return <PageHeader 
    className = 'site-page-header'
    onBack={() => null}
    title = "Space Time"
    subTitle = "My thoughts on space time" 
    />
}

export default Header

