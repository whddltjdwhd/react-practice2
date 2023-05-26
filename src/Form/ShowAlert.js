function ShowAlert() {
    let alretMent = "hey";
    return (
        <div>
            <div>
                <h2>Invalid Input</h2>
            </div>
            <div>
                {alretMent}
            </div>
            <div>
                <button>Okay</button>
            </div>
        </div>
    )
}

export default ShowAlert;