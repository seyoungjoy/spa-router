
const Root = () => {
    const onClickHandler = (page:string) =>{
        console.log(page)
    }
    return (
        <>
            <h2>root</h2>
            <button onClick={() => onClickHandler("/about")}>about</button>
        </>
    )
}

export default Root
