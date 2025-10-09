function Dropdown({children, title}) {
    return (
        <>
            <details>
            <summary><h3>{title}</h3></summary><pre>
            {children}
            </pre></details>
        </>
    )
}

export { Dropdown };