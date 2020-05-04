/**
 * @function useQueryParam
 * @description extracts all query params from the URL
 * @param {string} queries - query string
 * @returns {object} - returns an object of query param properties
 */
const useQueryParam = (queries: string = window.location.search): {} => {
    try {
        const queryParams = new URLSearchParams(queries);
        const params: any = {};
        queryParams.forEach((value: string, key: string) => { params[key] = value });
        return params;
    } catch (error) {
        return {
            message: error.message
        }
    }
  };

export default useQueryParam;
