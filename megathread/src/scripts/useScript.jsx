import { useEffect } from "react";

const useScript = (url, gVars = []) => {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = url;
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);

            gVars.forEach(varName => {
                if (window[varName] !== undefined) {
                    delete window[varName];
                }
            });
        }
    }, [url, gVars]);
}

export default useScript;