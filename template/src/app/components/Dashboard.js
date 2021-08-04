import { Container, makeStyles } from "@material-ui/core"
import React from "react"
import ButtonBar from "./common/ButtonBar"
import Header from "./common/Header"

const useStyles = makeStyles({
    root: {
        backgroundColor: "#F1F2F4",
        margin: 0,
        minHeight: "100vh",
        padding: "0 0 1rem",
    },
})

const Dashboard = () => {
    const classes = useStyles()

    return (
        <Container className={classes.root} maxWidth={false}>
            <Header />
            <ButtonBar />

            <div>Dashboard</div>
        </Container>
    )
}

export default Dashboard
