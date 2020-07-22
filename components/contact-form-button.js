import Button from "./button";
import {FONT_FAMILY_SANS} from "./css-config";
// import {BIG_FONT_SIZE} from "../lib/constants";

export default ({children, ...props}) => {

    // eslint-disable-next-line no-unused-vars
    // const [loading, setLoading] = useState(false)

    return (
        <Button
            invert
            // small¬
            loading={props.loading || false}
            className="fw5"

            {...props}
        >{children}
            <style jsx>{`
            {
            font-family: ${FONT_FAMILY_SANS}
            }
                `}</style>
        </Button>

    )
}