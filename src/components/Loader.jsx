import { useLoaderContext } from "../context/LoaderContext"

export default function Loader({children}){
    const {loading} =useLoaderContext()


    return (
<>
 {loading && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-50"
          style={{ zIndex: 1050 }}
        >
          <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {children}
    </>
    
    )
}