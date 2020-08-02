import React, { PropsWithChildren } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, waitFor, screen } from '@testing-library/react';
import { getQueryParams, setQueryString, useQueryParam } from '..';



const TestComponent = (props: PropsWithChildren<any>) => {
    const { queryParams } = useQueryParam(props.url);

    return (
        <section data-testid="test-screen">
            <div>TEST DIV ID</div>
            <pre>{JSON.stringify(queryParams, null, 2)}</pre>
        </section>
    );
}

describe('useQueryParam', () => {

    it('should render the test component', async () => {
        const testComp = render(
            <Router>
                <TestComponent url="http://localhost/?jest=true" />
            </Router>
        );

        await waitFor(() => screen.getByTestId('test-screen'));

        expect(screen.getByTestId('test-screen')).toBeTruthy();
        expect(screen.getByTestId('test-screen').children[0].innerHTML).toEqual('TEST DIV ID');
        expect(screen.getByTestId('test-screen').querySelector('pre')?.innerHTML).toEqual("{}");
        testComp.unmount();
    });
});

describe('getQueryParams', () => {
    it('should return an empty object if no string is parsed', () => {
        const { queryParams } = getQueryParams();
        expect(queryParams).toEqual({});
    });

    it('should transform the query string into a queried object', () => {
        const queries = '?jest=true&typescript=true&hook=true&failed=false';
        const { queryParams } = getQueryParams(queries);
        expect(queryParams).toEqual({
            jest: 'true',
            typescript: 'true',
            hook: 'true',
            failed: 'false',
        });
    });
});

describe('setQueryParams', () => {
    it('should transform the query object into a query string', () => {
        const queries = '?jest=true&typescript=true&hook=true&failed=false';
        const queryParamsObject = {
            jest: 'true',
            typescript: 'true',
            hook: 'true',
            failed: 'false',
        }
        const { queryString } = setQueryString(queryParamsObject);
        expect(queryString).toEqual(queries);
    });
});
