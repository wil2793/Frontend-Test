var arrayCart = []
var cProblem = ""
$(".btnAddCart").on('click', function (ev) {
    var mensajeToast = ""
    var cons = $(this).attr("id");

    let product = cons.split("_");

    let valor = product[1]

    agregarAlCarrito(valor);

    if (cProblem == ""){
        mensajeToast = "Producto agregado al carrito."
        document.getElementById('liveToast').className += " bg-success"
    }
    else{
        mensajeToast = cProblem
        document.getElementById('liveToast').className += " bg-danger"
        cProblem = ""
    }

    const toastLiveExample = document.getElementById('liveToast')
    document.getElementById('mensajeToast').innerText = mensajeToast
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
});

function agregarAlCarrito(product){
    if (arrayCart.includes(product)){
        cProblem = "Producto ya agregado";
    }
    else{
        arrayCart.push(product)
    }

    document.getElementById('countCart').innerText = arrayCart.length
}