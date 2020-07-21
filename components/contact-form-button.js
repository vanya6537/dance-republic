import {useState} from 'react'
import {useRouter} from 'next/router'
import Button from "./button";
export default ({children,...props}) => {
    const [opened, setOpened] = useState(false)

    const [loading, setLoading] = useState(false)

    return (
        <Button
            invert
            // small
            loading={loading}
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