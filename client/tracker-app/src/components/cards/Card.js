import react from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Data from "./Card.json";

const styles = {
    main: {
        display: "flex",
        justifyContent: "space-evenly",
        width: "100%",
        // height: "28vh",
        marginTop: "25px"
    },
    card: {
        border: "1px solid black",
        width: "24%",
        backgroundColor: "#f7f5fe",
        border: "1px solid #f7f5fe",
        padding: "40px 5px 40px 20px"

    },
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    img: {
        width: "50px"
    }
}

const Card = () => {

    return (
        <div>
            <div style={styles.main}>
                {Data.map(data => {
                    return (
                        <div className="container" style={styles.card}>
                            <div className="row" style={styles.container}>
                                <div className="col">
                                    <p>{data.name}</p>
                                </div>
                                <div className="col">
                                    <img style={styles.img} src={data.image}/>
                                </div>
                            </div>
                            <div className="row" style={styles.container}>
                                <h2>{data.usd}</h2>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

export default Card;