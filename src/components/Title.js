import { PageHeader } from 'antd';
import AddButton from './AddButton';

function Title() {
    return (
        <PageHeader className='site-page-header'>
             <div className='head-elements'>
                 <h1>To Do List</h1>
                 <AddButton></AddButton>
             </div>
        </PageHeader>
    )
}

export default Title
