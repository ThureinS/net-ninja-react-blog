import {Link} from 'react-router-dom'

const NotFound = () => {
    return ( 
        <div>
        <h2>Sorry</h2>
        <p>This page is not found</p>
        <Link to='/'>Back to the home page.....</Link>
        </div>
     );
}
 
export default NotFound;