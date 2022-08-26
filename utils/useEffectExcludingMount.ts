import { useEffect, useRef, DependencyList } from 'react';
// It will run 'func' if 'dependencies' changes, but not on initial render
const useEffectExcludingMount = (func: () => void, dependencies: DependencyList) => {
    const didMount = useRef(false);

    useEffect(() => {
        if (didMount.current) {
            func();
        } else {
            didMount.current = true;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);
};

export default useEffectExcludingMount;
