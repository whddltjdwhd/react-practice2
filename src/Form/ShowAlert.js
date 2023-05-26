function ShowAlert(props) {
    let alretMent = "hey";

    const onClickHandler = () => props.showFunc();

    return (
        <div>
            <div>
                <h2>Invalid Input</h2>
            </div>
            <div>
                {alretMent}
            </div>
            <div>
                <button onClick={onClickHandler}>Okay</button>
            </div>
        </div>
    )
}

export default ShowAlert;