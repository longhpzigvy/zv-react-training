import React, {useState, memo} from "react"
import "./task3.css"

const Task3 = () => {
    const [isValid, setValid] = useState(false)
    const [valueInput, setValueInput] = useState("")
    const [messageError, setErrorMessage] = useState("")
    const [count, setCountDown] = useState(0)
    const [isStop, setStop] = useState(false) 

    React.useEffect(() => {
        let timer = null
        if (!isStop) {
            timer = setInterval(() => setCountDown(t => t - 1), 1000);
        }

        return () => { if(timer) clearInterval(timer) }
      }, [isStop]);

      React.useEffect(() => {
        if (count === 0) {
            setStop(true)
        }
      }, [count])

    const handleChange = (event) => {
        setValid(false)
        setErrorMessage("")
        const {value} = event.target
        setValueInput(value)
    }

    const validateInput = (event) => {
        event.preventDefault()
        let valid = true
        let message = ""
        if (!valueInput) {
            valid = false
            message = "Please enter field"
        } else if (!Number.isInteger(Number(valueInput))) {
            valid = false
            message = "Invalid input. Must be a number"
        } else if (parseInt(valueInput) < 0) {
            valid = false
            message = "Number must be greater than 0"
        } else {
            setCountDown(valueInput)
            setStop(false)
        }

        setValid(valid)
        setErrorMessage(message)
    }

    const stopCountDown = () => {
        setStop(state => !state);
    }

    return (
        <div className="task-three">
            <div className="row d-flex justify-content-center">
                <div className="col-6">
                    <form className="form-submit" onSubmit={validateInput}>
                        <div className="form-group">
                            <input 
                                className="form-control" 
                                type="text" 
                                value={valueInput}
                                onChange={handleChange}
                            />
                            {messageError && (
                                <p className="text-danger">{messageError}</p>
                            )}
                        </div>
                        <button className="btn btn-success mr-2" onClick={validateInput}>Start</button>
                        {isValid && (
                            <button type="button" className="btn btn-info" onClick={stopCountDown}>{!isStop ? "Stop" : "Continue"}</button>
                        )}
                        <div className="mt-3">{count}</div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default memo(Task3)