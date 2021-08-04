import { Button, makeStyles } from "@material-ui/core"
import React from "react"

const useStyles = makeStyles({
    root: {
        backgroundColor: "#fff",
        borderBottom: "1px solid rgba(197, 200, 209, .5)",
        marginBottom: "0.5rem",
        padding: "0.5rem 1rem",
    },
    actionButton: {
        marginRight: "0.5rem",
    },
})

const ButtonBar = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Button className={classes.actionButton} color="primary" variant="contained">
                Start
            </Button>
            <Button className={classes.actionButton} variant="contained">
                Clear
            </Button>
            <Button className={classes.actionButton} color="primary" variant="contained">
                Stop
            </Button>
        </div>
    )
}

export default ButtonBar
