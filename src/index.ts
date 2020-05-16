import { useEffect, useState } from 'react'; 
import { useLocation } from 'react-router-dom'; 


export const getQueryObject = (query = ''): {} => {
    try {
        const queryParams = new URLSearchParams(query);
        const params: any = {};
        queryParams.forEach((value: string, key: string) => { params[key] = value });
        return params;
    } catch (error) {
        return {
            message: error.message
        }
    }
  };

export default (queryStr: string = window.location.search) => {
    const { search } = useLocation();
    const [state, setState] = useState(getQueryObject(queryStr));

    useEffect(() => {
        setState(getQueryObject(search))
    }, [search])

    return state;
};
