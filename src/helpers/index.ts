interface Params {
    queryParams?: {};
    errorMesage?: string;
};

export const getQueryParams = (query = ''): Params => {
    try {
        if(query.includes('http')) query = `?${query.split('?').pop()}`;
        const params = new URLSearchParams(query);
        const queriedParams: any = {};
        params.forEach((value: string, key: string) => { queriedParams[key] = value });

        return { queryParams: queriedParams };
    } catch (error) {
        return {
            errorMesage: error.message
        }
    }
  };

interface queryString {
    queryString?: string;
    errorMesage?: string;
};

export const setQueryString = (params: object): queryString => {
    try {
        let url = '?';
        Object.entries(params)
        .filter(param => param[1])
        .forEach(param => { url += `${param[0]}=${param[1]}&` });
        const queryString = url.length > 1 ? url.slice(0, url.length - 1) : '';
        return { queryString };
    } catch (error) {
        return {
            errorMesage: error.message,
        }
    }
  };
