import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

// const override: CSSProperties = {
//     display: "block",
//     margin: "0 auto",
//     borderColor: "red",
// };

const ButtlonLoader = ({ width, height }) => {
    return (
        <div>

            <button
                type='submit'
                className={`w-full px-5 py-2 inline h-[${height}px] mx-auto bg-indigo-500 text-white  rounded-sm`}>

                <ClipLoader
                    color={"white"}
                    // loading={loading}
                    // cssOverride={override}
                    size={30}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </button>

        </div>
    )
}

export default ButtlonLoader