document.querySelector("#btnCalcular").addEventListener("click", calcularLotaje)

function calcularLotaje(){
    let riesgo = (document.querySelector("#txtRiesgo").value)
    let pipsSL= (document.querySelector("#txtPipsStopLoss").value)
    let valorDelPip = 10
    let lotaje = 0

    if ((riesgo === "") || (pipsSL ==="") ){
        alert ("Los campos * son obligatorios")
        document.querySelector("#txtRiesgo").value =""
        document.querySelector("#txtPipsStopLoss").value = ""
        document.querySelector("#txtMostrar").innerHTML = ""
    }else{
    let valorPipSegunRiesgoYSL = riesgo / pipsSL
    lotaje = (valorPipSegunRiesgoYSL * 1 / valorDelPip) .toFixed(2) - 0.01
    document.querySelector("#txtMostrar").innerHTML = "El lotaje para arriesgar $"+riesgo+" en "+pipsSL+" pips"+", es de: " + lotaje
    document.querySelector("#txtRiesgo").value =""
        document.querySelector("#txtPipsStopLoss").value = ""
    }
}