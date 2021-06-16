import React from 'react';

export const withLoading = Loading => WapperedComponent => {
    const WithLoading = props => {
        return props.loadData ? (
            <Loading />
        ) : (
            <WapperedComponent {...props} />
        );
    };
    return WithLoading;
};


export const withLogger = (prefix = "") => WrappedComponent => {
    const WithLogger = props => {
      console.log(`${prefix}[Props]:`, props);
      return <WrappedComponent {...props} />;
    };
    return WithLogger;
};