export const getQueryParams = (query = ''): {} => {
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
  