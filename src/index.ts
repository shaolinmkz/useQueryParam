import { useEffect, useState } from 'react'; 
import { useLocation } from 'react-router-dom'; 
import { getQueryParams } from './helpers';


const useQueryParam = (queryStr: string = window?.location?.search || ''): {} => {
    const [state, setState] = useState(getQueryParams(queryStr));
    const { search } = useLocation();

    useEffect(() => setState(getQueryParams(search)), [search])

    return state;
};

export default useQueryParam;

export {
    getQueryParams,
    useQueryParam,
}
