
const Root = () => {
    window.onpopstate = (e) => {
        // console.log(e);
    }
    const onClickHandler = () => {
        window.history.pushState({page:"about"}, '', '/about');
        // console.log(history)
        console.log(window.location.pathname)
    }

    return (
        <div className="content">
            <h2>root</h2>
            <button onClick={onClickHandler}>about</button>
        </div>
    )
}

export default Root
