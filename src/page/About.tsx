
const About = () => {
    const onClickHandler = (page:string) =>{
        console.log(page)
    }
    return (
        <>
            <h2>about</h2>
            <button onClick={() => onClickHandler("/")}>go home</button>
        </>
    )
}

export default About
