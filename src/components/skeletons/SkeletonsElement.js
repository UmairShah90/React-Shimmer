import './skeletons.css';

const SkeletonsElement = ({type}) => {
    const classes = `skeleton ${type}`
    return (
        <div className={classes}>
            
        </div>
    )
}

export default SkeletonsElement
