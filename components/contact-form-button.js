import Button from "./button";

export default ({children, ...props}) => {

    // eslint-disable-next-line no-unused-vars
    // const [loading, setLoading] = useState(false)

    return (
        <Button
            invert
            // small¬
            loading={props.loading || false}
            {...props}
        >{children}
            <style jsx>{`
                #cf-btn {
                    // box-sizing: border-box;
                    padding: 40px 20px;
                }
                `}</style>
        </Button>

    )
}