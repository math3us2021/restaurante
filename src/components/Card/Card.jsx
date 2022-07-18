import React from "react";
import { Card } from "../styles";
import Swal from 'sweetalert2';

export default (props) => {

    function especialidadeImage(name) {
        if (name === "camarao") {
            return (
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTannmRRC3SfZSs7qh2WuAGHMlSMeDgG_Wu-A&usqp=CAU'
            )
        } if (name === "angus") {
            return (
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsFuaoQkVpS8pZMhytl10_LTrAH-wh5rTMww&usqp=CAU'
            )
        } if (name === "frango") {
            return (
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQisbI0PW_ZH1UM2H8Qabv4R0hzJAcf2kpYUQ&usqp=CAU"
            )
        } else {
            return (
                null
            )
        }
    }
    function especialidadeText(name) {
        if (name === "camarao") {
            return (
                "Camarão ao molho de mostarda e alho"
            )
        } if (name === "angus") {
            return (
                "Angus ao tostado ao carvão mexicano"
            )
        } if (name === "frango") {
            return (
                "Frango ao assado com peito de peru"
            )
        } else {
            return (
                null
            )
        }
    }

   


    function especialidade(name) {
        Swal.fire({
            title: 'HUmmmmm',
            text: especialidadeText(name),
            imageUrl: especialidadeImage(name),
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })
    }



    return (
        <div>

            <Card>
                <div>
                    <h1>Especialidade da casa</h1>
                </div>
                <div className="row">

                    <div className="col-lg-4">
                        <img className="rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV8K8C1RSLI6XtzzjVD9qS5t290jLbq2dLEw&usqp=CAU" alt="Generic placeholder image" width="140" height="140" onClick={() => especialidade("camarao")} ></img>

                        <h2>Camarrão ao cremy</h2>


                    </div>
                    <div className="col-lg-4">
                        <img className="rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9bCrms1GApsb21zrflrGEQ5aT8hdtSV6XTg&usqp=CAU" alt="Generic placeholder image" width="140" height="140" onClick={() => especialidade("angus")}></img>
                        <h2>Angus</h2>

                    </div>
                    <div className="col-lg-4">
                        <img className="rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjn2XCATUwNHRfQGzXcH1iqiAZKFLTzxZhg&usqp=CAU" alt="Generic placeholder image" width="140" height="140" onClick={() => especialidade("frango")}></img>
                        <h2>Frangolito</h2>

                    </div>
                </div>
            </Card>
        </div>
    );
}