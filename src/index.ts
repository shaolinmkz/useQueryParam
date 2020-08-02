import { useEffect, useState } from 'react'; 
import { useLocation } from 'react-router-dom'; 
import { getQueryParams, setQueryString, } from './helpers';

interface queryPrms {
    queryParams?: {}
}

const useQueryParam = (queryStr: string = window?.location?.search): queryPrms => {
    const [{ queryParams }, setQueryParams] = useState(getQueryParams(queryStr));
 
    const { search } = useLocation();

    useEffect(() => setQueryParams(getQueryParams(search)), [search])

    return { queryParams };
};

export { useQueryParam, setQueryString, getQueryParams }
