const Card = ({children, className})=>{
    return(
    <div className={`bg-card px-6 py-4 rounded-2xl w-full ${className}`}>
        {children}
     </div>
    )
}

export default Card