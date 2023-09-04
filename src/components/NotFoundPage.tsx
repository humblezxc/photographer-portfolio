import {Link} from "react-router-dom";

export default function NotFoundPage(){
    return(
        <>
            This page doesn't exist. Go <Link to="/">home</Link>
        </>
    );

}
