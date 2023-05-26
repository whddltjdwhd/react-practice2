function ShowAlert(props) {
    const onClickHandler = () => props.showFunc();
    let alertWord = props.AlertType;
 

    return (
        <div>
            <div>
                <h2>Invalid Input</h2>
            </div>
            <div>
                {alertWord}
            </div>
            <div>
                <button onClick={onClickHandler}>Okay</button>
            </div>
        </div>
    )
}

export default ShowAlert;